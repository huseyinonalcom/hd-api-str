"use strict";

/**
 * delivery controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::delivery.delivery",
  ({ strapi }) => ({
    async find(ctx) {
      const { filters } = ctx.query;
      var userWithRole;
      if (ctx.state.auth.strategy.name == "users-permissions") {
        userWithRole = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          ctx.state.user.id,
          {
            populate: { role: true, client_info: true, user_info: true },
          }
        );
      }

      if (
        userWithRole &&
        userWithRole.role &&
        userWithRole.role.name === "Client"
      ) {
        const clientID = userWithRole.client_info.id;
        const documents = await strapi.db
          .query("api::document.document")
          .findMany({
            select: ["id"],
            where: { client: clientID },
            populate: false,
          });
        const documentIDs = documents.map((doc) => doc.id);
        // Modify query to filter deliveries based on document IDs
        ctx.query = {
          ...ctx.query,
          filters: {
            ...filters,
            document_products: {
              document: {
                id: {
                  $in: documentIDs,
                },
              },
            },
          },
        };
      }

      const { data, meta } = await super.find(ctx);
      if (!data) {
        return ctx.notFound("No deliveries found");
      }

      return { data, meta };
    },
    async findOne(ctx) {
      var userWithRole;
      if (ctx.state.auth.strategy.name == "users-permissions") {
        userWithRole = await strapi.entityService.findOne(
          "plugin::users-permissions.user",
          ctx.state.user.id,
          {
            populate: { role: true, client_info: true, user_info: true },
          }
        );
      }

      const { data, meta } = await super.findOne(ctx);

      if (
        userWithRole &&
        userWithRole.role &&
        userWithRole.role.name === "Client"
      ) {
        const clientID = userWithRole.client_info.id;
        const documents = await strapi.db
          .query("api::document.document")
          .findMany({
            select: ["id"],
            where: { client: clientID },
            populate: false,
          });
        const documentIDs = documents.map((doc) => doc.id);
        const hasClientDocument = data.attributes.document_products.data.some(
          (docProduct) =>
            documentIDs.includes(docProduct.attributes.document.data.id)
        );
        if (!hasClientDocument) {
          return ctx.notFound("Delivery not found");
        }
      }

      return { data, meta };
    },
  })
);
