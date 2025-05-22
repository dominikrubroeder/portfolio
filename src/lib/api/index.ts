export function getApiUrl() {
  return process.env.NODE_ENV === 'development'
    ? process.env.LOCAL_URL
    : process.env.PRODUCTION_URL;
}
