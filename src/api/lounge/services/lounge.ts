"use strict";

/**
 * lounge service
 */

import { factories } from "@strapi/strapi";
const { createCoreService } = factories;

export default createCoreService("api::lounge.lounge");
