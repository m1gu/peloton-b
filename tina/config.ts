import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Tina Cloud credentials
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Noticias y Crónicas",
        path: "content/posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titular",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtítulo / Bajada",
          },
          {
            type: "string",
            name: "category",
            label: "Categoría Principal",
            options: ["Softball", "Baseball", "Noticias"],
            required: true,
          },
          {
            type: "string",
            name: "subCategory",
            label: "Subcategoría / Etiqueta",
            required: true,
          },
          {
            type: "image",
            name: "heroImage",
            label: "Fotografía Principal",
          },
          {
            type: "string",
            name: "heroCaption",
            label: "Pie de Foto y Crédito",
          },
          {
            type: "string",
            name: "author",
            label: "Autor / Redactor",
            options: ["Evelyn Saldarreaga", "Abel Saldarreaga", "Miguel Rodríguez"],
          },
          {
            type: "datetime",
            name: "publishedAt",
            label: "Fecha de Publicación",
          },
          {
            type: "string",
            name: "readTime",
            label: "Tiempo de Lectura (ej. 5 min)",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Extracto / Resumen",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "quote",
            label: "Cita Destacada (Pull Quote)",
            fields: [
              { type: "string", name: "text", label: "Texto de la cita" },
              { type: "string", name: "author", label: "Autor de la cita" },
            ],
          },
          {
            type: "object",
            name: "videoEmbed",
            label: "Video Embebido (YouTube / Vimeo)",
            fields: [
              { type: "string", name: "provider", label: "Proveedor", options: ["youtube", "vimeo"] },
              { type: "string", name: "embedUrl", label: "URL de Embed" },
              { type: "string", name: "title", label: "Título del Video" },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Cuerpo de la Crónica",
            isBody: true,
          },
        ],
      },
    ],
  },
});
