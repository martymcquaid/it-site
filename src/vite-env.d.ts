/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL?: string
  // Add additional environment variables here as needed
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
