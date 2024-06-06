'use strict';

/**
 * lounge router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lounge.lounge');
