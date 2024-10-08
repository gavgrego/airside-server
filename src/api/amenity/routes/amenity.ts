"use strict";

/**
 * amenity router
 */

import { factories } from "@strapi/strapi";
const { createCoreRouter } = factories;

export default createCoreRouter("api::amenity.amenity");
