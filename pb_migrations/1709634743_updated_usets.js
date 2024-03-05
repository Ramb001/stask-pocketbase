/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrnm626rqa8ne56")

  collection.name = "users"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrnm626rqa8ne56")

  collection.name = "usets"

  return dao.saveCollection(collection)
})
