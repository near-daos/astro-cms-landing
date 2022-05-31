'use strict';

/**
 * presskit service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::presskit.presskit');
