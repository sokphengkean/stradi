'use strict';

/**
 *  setting controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::setting.setting', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::setting.setting', {
            ...query,
            populate: {
                Logo: {
                    populate: "*"
                },
                Favicon: {
                    populate: "*"
                },
                Menus: {
                    populate: "*"
                },
                Footer: {
                    populate: "*"
                }
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));