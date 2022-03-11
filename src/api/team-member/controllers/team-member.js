'use strict';

/**
 *  team-member controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::team-member.team-member', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::team-member.team-member', {
            ...query,
            populate: "*"
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    },
    async findOne(ctx) {
        const { params } = ctx;

        console.log("Params: ", params);

        const entity = await strapi.entityService.findOne('api::team-member.team-member', params.id, {
            populate: "*"
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
