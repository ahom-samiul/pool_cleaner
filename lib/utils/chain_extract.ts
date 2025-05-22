export default function chain_extract(file_name: string) {
  return file_name.split("_")[1]?.split(".")[0];
}
