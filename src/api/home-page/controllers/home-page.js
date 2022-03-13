'use strict';

/**
 *  home-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home-page.home-page', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::home-page.home-page', {
            ...query,
            populate: {
                HomeHero: { populate: "*" },
                HomeIntro: {
                    populate: {
                        SectionHeading: { populate: "*" },
                        HomeIntroCard: { populate: "*" }
                    }
                },
                HomeProjects: {
                    populate: {
                        Projects: { populate: "*" },
                    }
                },
                HomeTeam: { populate: "*" },
                HomeCallToAction: { populate: "*" },
            }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
