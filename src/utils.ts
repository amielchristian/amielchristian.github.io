export function getMainImage(name: string) {
  // get keys from import.meta.glob, then filter to find the main image in the folder with the given name
  const match: string = Object.keys(
    import.meta.glob(`../public/works/*/main.*`, { eager: true })
  ).filter((key) => key.includes(name) && isImage(key))[0];
  return match ? match.replace('../public', '') : '';
}

export function getAllImages(name: string): string[] {
  // get keys from import.meta.glob, then filter to find all images in the folder with the given name
  return Object.keys(import.meta.glob('../public/works/*/*', { eager: true }))
    .filter((key) => key.includes(name) && isImage(key))
    .sort((a, _) => {
      if (a.includes('main.')) return -1;
      else return 0;
    });
}

function isImage(file: string) {
  return (
    file.endsWith('.png') ||
    file.endsWith('.jpg') ||
    file.endsWith('.jpeg') ||
    file.endsWith('.gif') ||
    file.endsWith('.webp') ||
    file.endsWith('.svg')
  );
}
