"use strict";

/**
 * terminal controller
 */

import { factories } from "@strapi/strapi";
const { createCoreController } = factories;

export default createCoreController("api::terminal.terminal");
