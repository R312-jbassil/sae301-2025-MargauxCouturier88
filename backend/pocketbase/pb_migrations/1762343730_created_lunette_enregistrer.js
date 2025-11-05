/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number538872142",
        "max": null,
        "min": null,
        "name": "nombreLunettes",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_572355121",
    "indexes": [],
    "listRule": null,
    "name": "lunette_enregistrer",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  COUNT(l.id) as nombreLunettes\nFROM lunette l",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_572355121");

  return app.delete(collection);
})
