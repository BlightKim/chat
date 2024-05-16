import CryptoJS from "crypto-js";

const cryptoKey = "1234";

export function encryptSignupData(name: string, username: string, password: string): Record<string, string> {
  const encryptedName = CryptoJS.AES.encrypt(name, cryptoKey).toString();
  const encryptedUsername = CryptoJS.AES.encrypt(username, cryptoKey).toString();
  const encryptedPassword = CryptoJS.AES.encrypt(password, cryptoKey).toString();

  return { encryptedName, encryptedUsername, encryptedPassword };
}
