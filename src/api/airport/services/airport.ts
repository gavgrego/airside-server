"use strict";

/**
 * airport service
 */

import { factories } from "@strapi/strapi";
const { createCoreService } = factories;

export default createCoreService("api::airport.airport");
