/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrnm626rqa8ne56")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "inktac8i",
    "name": "name",
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
  collection.schema.removeField("inktac8i")

  return dao.saveCollection(collection)
})
