'use strict';

/**
 * lounge service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lounge.lounge');
