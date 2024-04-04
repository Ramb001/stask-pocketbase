/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8a8gcj6b85sqz63")

  // remove
  collection.schema.removeField("8zufupj5")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8a8gcj6b85sqz63")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8zufupj5",
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
