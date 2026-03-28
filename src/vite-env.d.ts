/// <reference types="vite/client" />
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
