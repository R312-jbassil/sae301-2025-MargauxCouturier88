/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3621540963")

  // remove field
  collection.fields.removeById("select1984990008")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1094973046",
    "hidden": false,
    "id": "relation1984990008",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "taille",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3621540963")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select1984990008",
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
  }))

  // remove field
  collection.fields.removeById("relation1984990008")

  return app.save(collection)
})
