export function extractEmail({ input }: { input: string | undefined }) {
  return input?.replace('mailto:', '').split('?')?.[0];
}

export function extractPhoneNumber({ input }: { input: string | undefined }) {
  return input?.replace('tel:', '');
}
