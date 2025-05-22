function dex_extract(filename: string) {
  return filename.split('/').pop()?.split("_")[0];
}

export default dex_extract;
