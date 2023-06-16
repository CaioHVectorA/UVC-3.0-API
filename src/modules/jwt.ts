import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// @ts-ignore
const secretKey: string = process.env.SECRET_KEY;
// Gere um token JWT com base nos dados fornecidos
export function generateToken(data: JSON) {
  return jwt.sign(data, secretKey, { expiresIn: "1h" });
}

// Verifique se um token JWT é válido
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
}

// Hash de uma senha
export async function hashPassword(password: string) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Verificação de uma senha em relação ao hash
export async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
