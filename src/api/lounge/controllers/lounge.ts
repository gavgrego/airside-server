"use strict";

/**
 * lounge controller
 */

import { factories } from "@strapi/strapi";
const { createCoreController } = factories;

export default createCoreController("api::lounge.lounge");
