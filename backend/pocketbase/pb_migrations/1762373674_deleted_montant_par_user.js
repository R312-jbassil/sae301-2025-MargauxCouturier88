/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2678708557");

  return app.delete(collection);
}, (app) => {
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
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "_clone_hMn9",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "utilisateur",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "exceptDomains": null,
        "hidden": false,
        "id": "_clone_CBQb",
        "name": "emailUtilisateur",
        "onlyDomains": null,
        "presentable": false,
        "required": true,
        "system": true,
        "type": "email"
      },
      {
        "hidden": false,
        "id": "json4275211872",
        "maxSize": 1,
        "name": "montantTotal",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
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
    "id": "pbc_2678708557",
    "indexes": [],
    "listRule": null,
    "name": "montant_par_user",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  c.id_utilisateur as utilisateur,\n  u.email as emailUtilisateur,\n  SUM(p.prix) as montantTotal,\n  COUNT(p.id) as nombreLunettes\nFROM commande c\nINNER JOIN users u ON c.id_utilisateur = u.id\nLEFT JOIN personnalisation p ON p.id = c.id\nWHERE c.id IS NOT NULL\nGROUP BY c.id_utilisateur, u.email",
    "viewRule": null
  });

  return app.save(collection);
})
