/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w4quo4ms2bqqswv")

  // remove
  collection.schema.removeField("9e16lsxu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z25yn561",
    "name": "deadline",
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
  const collection = dao.findCollectionByNameOrId("w4quo4ms2bqqswv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9e16lsxu",
    "name": "deadline",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("z25yn561")

  return dao.saveCollection(collection)
})
