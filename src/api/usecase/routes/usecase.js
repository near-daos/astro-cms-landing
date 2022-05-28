'use strict';

/**
 * usecase router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::usecase.usecase');
