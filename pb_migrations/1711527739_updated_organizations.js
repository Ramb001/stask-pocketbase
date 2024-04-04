/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7bq0hdo44hzfy3w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "voepm3um",
    "name": "suborganizations",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8a8gcj6b85sqz63",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7bq0hdo44hzfy3w")

  // remove
  collection.schema.removeField("voepm3um")

  return dao.saveCollection(collection)
})
