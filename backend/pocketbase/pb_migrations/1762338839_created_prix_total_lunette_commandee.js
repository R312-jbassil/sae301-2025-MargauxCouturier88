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
        "id": "json3293380171",
        "maxSize": 1,
        "name": "prixTotal",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      }
    ],
    "id": "pbc_2228314816",
    "indexes": [],
    "listRule": null,
    "name": "prix_total_lunette_commandee",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  SUM(c.prix) as prixTotal\nFROM commande c\nWHERE c.prix IS NOT NULL",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2228314816");

  return app.delete(collection);
})
