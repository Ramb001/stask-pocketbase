/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w4quo4ms2bqqswv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iq6h2vcw",
    "name": "verified",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w4quo4ms2bqqswv")

  // remove
  collection.schema.removeField("iq6h2vcw")

  return dao.saveCollection(collection)
})
