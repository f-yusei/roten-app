/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL: string;
  readonly VITE_BACKEND_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
