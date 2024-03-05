/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7bq0hdo44hzfy3w",
    "created": "2024-03-05 10:35:33.222Z",
    "updated": "2024-03-05 10:35:33.222Z",
    "name": "organization",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9rkpxiff",
        "name": "owner",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "hrnm626rqa8ne56",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "dawsdnyv",
        "name": "workers",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "hrnm626rqa8ne56",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7bq0hdo44hzfy3w");

  return dao.deleteCollection(collection);
})
