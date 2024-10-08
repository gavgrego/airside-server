"use strict";

/**
 * amenity controller
 */

import { factories } from "@strapi/strapi";
const { createCoreController } = factories;

export default createCoreController("api::amenity.amenity");
