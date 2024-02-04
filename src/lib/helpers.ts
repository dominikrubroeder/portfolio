export function convertObjectToArray(object: { [key: string]: string }) {
  return Object.entries(object).map(([key, value]) => ({ key, value }));
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatTitle(title: string) {
  return title.trim().toLowerCase().replaceAll(' ', '-').replaceAll('.', '-');
}
