const getAlgoliaIndex = require("../../../../utils/algolia");

const index = getAlgoliaIndex("lounge");

module.exports = {
  async afterCreate(data) {
    const { id } = data.result;
    // Query lounge added to database

    const lounge = await strapi.entityService.findOne(
      "api::lounge.lounge",
      id,
      {
        populate: { airport: true },
      }
    );

    try {
      // Save the object to Algolia
      await index.saveObject({ objectID: id, ...lounge });
    } catch (error) {
      console.error("Error saving object to Algolia", error);
    }
  },
  async afterUpdate(data) {
    const { id } = data.result;
    // Query lounge added to database

    const lounge = await strapi.entityService.findOne(
      "api::lounge.lounge",
      id,
      {
        populate: { airport: true },
      }
    );

    try {
      // Save the object to Algolia
      await index.saveObject({ objectID: id, ...lounge });
    } catch (error) {
      console.error("Error saving object to Algolia", error);
    }
  },
  async afterDelete(data) {
    const { id } = data.result;

    try {
      // Save the object to Algolia
      await index.deleteObject(id);
    } catch (error) {
      console.error("Error saving object to Algolia", error);
    }
  },
};
