'use strict';

/**
 *  project controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::project.project', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::project.project', {
            ...query,
            populate: "*"
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    },
    async findOne(ctx) {
        const { params } = ctx;

        console.log("Params: ", params);

        const entity = await strapi.entityService.findOne('api::project.project', params.id, {
            populate: "*"
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
