import { genSalt, hash } from "bcrypt";

export default async function hashPassword(password: string): Promise<string> {
    const saltRounds = 6;
  
    try {
      // Generate a salt
      const salt = await genSalt(saltRounds);
  
      // Hash the password using the salt
      const hashedPassword = await hash(password, salt);
  
      return hashedPassword;
    } catch (error) {
      throw new Error(`Error hashing password: ${error}`);
    }
  }