'use strict';

/**
 * usecase service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::usecase.usecase');
