"use strict";

/**
 * lounge router
 */

import { factories } from "@strapi/strapi";
const { createCoreRouter } = factories;

export default createCoreRouter("api::lounge.lounge");
