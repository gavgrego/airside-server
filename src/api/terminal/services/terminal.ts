"use strict";

/**
 * terminal service
 */

import { factories } from "@strapi/strapi";
const { createCoreService } = factories;

export default createCoreService("api::terminal.terminal");
