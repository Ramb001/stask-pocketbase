/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7bq0hdo44hzfy3w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "affk2wjm",
    "name": "ref",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7bq0hdo44hzfy3w")

  // remove
  collection.schema.removeField("affk2wjm")

  return dao.saveCollection(collection)
})
