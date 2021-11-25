import CryptoJS from 'crypto-js';

export function avatarImageFromEmail(email: string): string {
  const emailMD5Hash = CryptoJS.MD5(email);
  return `https://www.gravatar.com/avatar/${emailMD5Hash}`;
}