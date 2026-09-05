// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Tina Cloud credentials
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Noticias y Cr\xF3nicas",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titular",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subt\xEDtulo / Bajada"
          },
          {
            type: "string",
            name: "category",
            label: "Categor\xEDa Principal",
            options: ["Softball", "Baseball", "Noticias"],
            required: true
          },
          {
            type: "string",
            name: "subCategory",
            label: "Subcategor\xEDa / Etiqueta",
            required: true
          },
          {
            type: "image",
            name: "heroImage",
            label: "Fotograf\xEDa Principal"
          },
          {
            type: "string",
            name: "heroCaption",
            label: "Pie de Foto y Cr\xE9dito"
          },
          {
            type: "string",
            name: "author",
            label: "Autor / Redactor",
            options: ["Evelyn Saldarreaga", "Abel Saldarreaga", "Miguel Rodr\xEDguez"]
          },
          {
            type: "datetime",
            name: "publishedAt",
            label: "Fecha de Publicaci\xF3n"
          },
          {
            type: "string",
            name: "readTime",
            label: "Tiempo de Lectura (ej. 5 min)"
          },
          {
            type: "string",
            name: "excerpt",
            label: "Extracto / Resumen",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            name: "quote",
            label: "Cita Destacada (Pull Quote)",
            fields: [
              { type: "string", name: "text", label: "Texto de la cita" },
              { type: "string", name: "author", label: "Autor de la cita" }
            ]
          },
          {
            type: "object",
            name: "videoEmbed",
            label: "Video Embebido (YouTube / Vimeo)",
            fields: [
              { type: "string", name: "provider", label: "Proveedor", options: ["youtube", "vimeo"] },
              { type: "string", name: "embedUrl", label: "URL de Embed" },
              { type: "string", name: "title", label: "T\xEDtulo del Video" }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Cuerpo de la Cr\xF3nica",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
