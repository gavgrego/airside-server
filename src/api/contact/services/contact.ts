"use strict";

/**
 * contact service
 */

import { factories } from "@strapi/strapi";
const { createCoreService } = factories;

export default createCoreService("api::contact.contact");