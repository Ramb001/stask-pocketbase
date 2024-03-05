/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7bq0hdo44hzfy3w")

  collection.name = "organizations"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7bq0hdo44hzfy3w")

  collection.name = "organization"

  return dao.saveCollection(collection)
})
