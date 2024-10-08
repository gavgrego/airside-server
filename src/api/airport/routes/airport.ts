"use strict";

/**
 * airport router
 */

import { factories } from "@strapi/strapi";
const { createCoreRouter } = factories;

export default createCoreRouter("api::airport.airport");
