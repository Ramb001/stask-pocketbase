/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pbvmayxegprgo17")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dcpscmbz",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "task",
        "ref"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pbvmayxegprgo17")

  // remove
  collection.schema.removeField("dcpscmbz")

  return dao.saveCollection(collection)
})
