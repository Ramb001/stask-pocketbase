/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrnm626rqa8ne56")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h0dasis6",
    "name": "tg_id",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sctifata",
    "name": "chat_id",
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
  const collection = dao.findCollectionByNameOrId("hrnm626rqa8ne56")

  // remove
  collection.schema.removeField("h0dasis6")

  // remove
  collection.schema.removeField("sctifata")

  return dao.saveCollection(collection)
})
