/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hrnm626rqa8ne56",
    "created": "2024-03-05 10:31:34.588Z",
    "updated": "2024-03-05 10:31:34.588Z",
    "name": "usets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ejv1tvsz",
        "name": "username",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("hrnm626rqa8ne56");

  return dao.deleteCollection(collection);
})
