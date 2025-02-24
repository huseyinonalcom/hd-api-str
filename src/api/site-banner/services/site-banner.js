'use strict';

/**
 * site-banner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-banner.site-banner');
