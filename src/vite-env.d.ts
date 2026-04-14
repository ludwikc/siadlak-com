/// <reference types="vite/client" />

interface Window {
  ml?: ((...args: unknown[]) => void) & {
    q?: unknown[][];
    fn?: {
      jsonpRequest?: { make: (url: string, callback: string) => void };
      account_id?: string;
      [key: string]: unknown;
    };
  };
  mlDataset?: unknown;
  MailerLite?: unknown;
  MailerLiteObject?: string;
}
/// <reference types="vite-imagetools/client" />

declare module '*&as=picture' {
  import type { Picture } from 'vite-imagetools';
  const pic: Picture;
  export default pic;
}

declare module '*?format=avif;webp&as=picture' {
  import type { Picture } from 'vite-imagetools';
  const pic: Picture;
  export default pic;
}
