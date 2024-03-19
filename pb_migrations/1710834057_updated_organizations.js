/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7bq0hdo44hzfy3w")

  // remove
  collection.schema.removeField("3uxdumdm")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7bq0hdo44hzfy3w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3uxdumdm",
    "name": "tasks",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "w4quo4ms2bqqswv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
