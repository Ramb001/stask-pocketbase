/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w4quo4ms2bqqswv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bhmkqjqs",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "not started",
        "in progress",
        "done"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w4quo4ms2bqqswv")

  // remove
  collection.schema.removeField("bhmkqjqs")

  return dao.saveCollection(collection)
})
