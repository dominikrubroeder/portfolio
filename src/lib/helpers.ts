export function convertObjectToArray(object: { [key: string]: string }) {
  return Object.entries(object).map(([key, value]) => ({ key, value }));
}
