import * as XLSX from 'xlsx';
import { writeFileSync, readdirSync, mkdirSync, existsSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

// Configuration - you can modify these or pass as command line arguments
const INPUT_DIR = process.argv[2] || './excel-files';
const OUTPUT_DIR = process.argv[3] || './json-output';

function convertExcelToJson(inputDir: any, outputDir: any) {
    // Create output directory if it doesn't exist
    if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
        console.log(`📁 Created output directory: ${outputDir}`);
    }

    // Get all Excel files from input directory
    const files = readdirSync(inputDir).filter(file => {
        const ext = extname(file).toLowerCase();
        return ext === '.xlsx' || ext === '.xls';
    });

    if (files.length === 0) {
        console.log(`❌ No Excel files found in ${inputDir}`);
        return;
    }

    console.log(`🔍 Found ${files.length} Excel file(s): ${files.join(', ')}\n`);

    files.forEach(filename => {
        console.log(`📊 Processing: ${filename}`);
        
        const filePath = join(inputDir, filename);
        const fileBaseName = basename(filename, extname(filename));
        
        try {
            // Read the Excel file
            const workbook = XLSX.readFile(filePath);
            const sheetNames = workbook.SheetNames;
            
            console.log(`   Found ${sheetNames.length} sheet(s): ${sheetNames.join(', ')}`);
            
            // Create subdirectory for this Excel file
            const fileOutputDir = join(outputDir, fileBaseName);
            if (!existsSync(fileOutputDir)) {
                mkdirSync(fileOutputDir, { recursive: true });
            }
            
            // Convert each sheet to JSON
            sheetNames.forEach(sheetName => {
                const worksheet = workbook.Sheets[sheetName];
                // @ts-ignore
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                
                // Clean sheet name for filename
                const cleanSheetName = sheetName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                const jsonFilename = `${cleanSheetName}.json`;
                const jsonFilePath = join(fileOutputDir, jsonFilename);
                
                // Save JSON file
                writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
                
                console.log(`   ✅ ${sheetName} -> ${jsonFilename} (${jsonData.length} rows)`);
            });
            
            console.log(`   📁 Saved to: ${fileOutputDir}\n`);
            
        } catch (error: any) {
            console.error(`   ❌ Error processing ${filename}:`, error.message);
        }
    });
    
    console.log('🎉 Batch conversion complete!');
}

// Validate input directory
if (!existsSync(INPUT_DIR)) {
    console.error(`❌ Input directory does not exist: ${INPUT_DIR}`);
    console.log('\nUsage: bun run convert.js [input-directory] [output-directory]');
    console.log('Example: bun run convert.js ./my-excel-files ./my-json-output');
    process.exit(1);
}

if (!statSync(INPUT_DIR).isDirectory()) {
    console.error(`❌ Input path is not a directory: ${INPUT_DIR}`);
    process.exit(1);
}

console.log(`📂 Input directory: ${INPUT_DIR}`);
console.log(`📂 Output directory: ${OUTPUT_DIR}\n`);

// Run the conversion
convertExcelToJson(INPUT_DIR, OUTPUT_DIR);