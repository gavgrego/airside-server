"use strict";

/**
 * card service
 */

import { factories } from "@strapi/strapi";
const { createCoreService } = factories;

export default createCoreService("api::card.card");
