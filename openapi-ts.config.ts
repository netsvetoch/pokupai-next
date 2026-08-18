import { defineConfig } from "@hey-api/openapi-ts"

export default defineConfig({
  input: "https://api.apiship.ru/doc/openapi.yaml",
  output: "src/shared/api/autogen/apiship",
  plugins: ["@hey-api/client-next"],
})
