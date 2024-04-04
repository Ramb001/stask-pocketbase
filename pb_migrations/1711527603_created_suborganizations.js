/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8a8gcj6b85sqz63",
    "created": "2024-03-27 08:20:03.454Z",
    "updated": "2024-03-27 08:20:03.454Z",
    "name": "suborganizations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8zufupj5",
        "name": "tasks",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "w4quo4ms2bqqswv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "dxsb0ufc",
        "name": "workers",
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
  const collection = dao.findCollectionByNameOrId("8a8gcj6b85sqz63");

  return dao.deleteCollection(collection);
})
