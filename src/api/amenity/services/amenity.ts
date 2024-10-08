"use strict";

/**
 * amenity service
 */

import { factories } from "@strapi/strapi";
const { createCoreService } = factories;

export default createCoreService("api::amenity.amenity");
