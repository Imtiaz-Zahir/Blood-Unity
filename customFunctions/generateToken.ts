import { sign } from "jsonwebtoken";

export default function generateToken(user: any) {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined in .env file");
    }
    const token = sign(
      { exp: Math.round(Date.now() / 1000) + 2629743, id: user._id, name: user.name,type:user.type },
      process.env.JWT_SECRET
    );
    return token;
  } catch (error) {
    console.log(error);
  }
}
