import axios from 'axios';

declare module 'jsonwebtoken' {
  export function decode(token: string, options?: DecodeOptions): any | null | JwtPayload | string;
}