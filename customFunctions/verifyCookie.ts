import { verify } from "jsonwebtoken";

type Token =
  | {
      name: string;
      value: string;
    }
  | undefined;
  
type JWTdata = {
  id: string;
  name: string;
  iat: number;
  type: string;
  exp: number;
};

export default function verifyCookie(token: Token, returnObj?: boolean) {
  if (!token) return false;
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined in .env file");
    }
    const JWTdata = verify(token.value, process.env.JWT_SECRET) as JWTdata;
    if (JWTdata.exp < Date.now() / 1000) return false;
    if (returnObj) return JWTdata;
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
