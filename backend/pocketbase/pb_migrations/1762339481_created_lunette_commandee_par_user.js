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
        "id": "_clone_yCw7",
        "maxSelect": 1,
        "name": "taille",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "medium",
          "large"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_ljzV",
        "max": 0,
        "min": 0,
        "name": "branche",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "_clone_M3GH",
        "max": null,
        "min": null,
        "name": "prix",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "_clone_Dgmy",
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
        "id": "_clone_Q4ld",
        "name": "emailUtilisateur",
        "onlyDomains": null,
        "presentable": false,
        "required": true,
        "system": true,
        "type": "email"
      },
      {
        "hidden": false,
        "id": "_clone_tzhi",
        "name": "dateCommande",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_3136894163",
    "indexes": [],
    "listRule": null,
    "name": "lunette_commandee_par_user",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n  (ROW_NUMBER() OVER()) as id,\n  p.taille,\n  p.branche,\n  p.prix,\n  c.id_utilisateur as utilisateur,\n  u.email as emailUtilisateur,\n  c.created as dateCommande\nFROM commande c\nINNER JOIN users u ON c.id_utilisateur = u.id\nINNER JOIN personnalisation p ON p.id = c.id\nWHERE c.id IS NOT NULL\nORDER BY u.email, c.created DESC",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3136894163");

  return app.delete(collection);
})
