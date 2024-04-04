/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w4quo4ms2bqqswv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdsgiwmf",
    "name": "suborganization",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8a8gcj6b85sqz63",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w4quo4ms2bqqswv")

  // remove
  collection.schema.removeField("mdsgiwmf")

  return dao.saveCollection(collection)
})
