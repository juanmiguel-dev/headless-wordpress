import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    // LÓGICA SENIOR:
    // 1. Intenta usar la variable de entorno (para Vercel)
    // 2. Si no existe, usa tu dirección local (para tu PC)
    [`${process.env.WORDPRESS_API_URL || "http://headless-backend.local/graphql"}`]: {
      headers: {
        "User-Agent": "Codegen",
      },
    },
  },
  generates: {
    "src/gql/": {
      preset: "client",
    },
    "src/gql/schema.gql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;