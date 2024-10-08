"use strict";

/**
 * terminal router
 */

import { factories } from "@strapi/strapi";
const { createCoreRouter } = factories;

export default createCoreRouter("api::terminal.terminal");
