/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrnm626rqa8ne56")

  // remove
  collection.schema.removeField("zrqvr67b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mu6yfhvh",
    "name": "organizations",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7bq0hdo44hzfy3w",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrnm626rqa8ne56")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrqvr67b",
    "name": "organizations",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7bq0hdo44hzfy3w",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("mu6yfhvh")

  return dao.saveCollection(collection)
})
