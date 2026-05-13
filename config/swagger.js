const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Restaurant Food Delivery API",
      version: "1.0.0",
      description:
        "API documentation for Restaurant Food Delivery Backend. Protected routes expect `Authorization: Bearer <token>` from login.",
    },
    servers: [
      {
        url: "/",
        description: "Same host and port as this app (works with any PORT)",
      },
    ],
    tags: [
      { name: "Test", description: "Smoke / test routes" },
      { name: "Auth", description: "Register and login" },
      { name: "User", description: "User profile (JWT)" },
      { name: "Restaurant", description: "Restaurants" },
      { name: "Category", description: "Categories" },
      { name: "Food", description: "Foods and orders" },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        ApiEnvelope: {
          type: "object",
          properties: {
            success: { type: "boolean" },
            message: { type: "string" },
          },
        },
      },
    },
  },
  apis: [
    path.join(__dirname, "swaggerPaths.js"),
    path.join(__dirname, "..", "routes", "*.js"),
    path.join(__dirname, "..", "models", "*.js"),
  ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
