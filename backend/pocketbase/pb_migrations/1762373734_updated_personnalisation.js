/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3621540963")

  // remove field
  collection.fields.removeById("text1651110324")

  // remove field
  collection.fields.removeById("text1041995051")

  // remove field
  collection.fields.removeById("text3421296606")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1486587212",
    "hidden": false,
    "id": "relation1651110324",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "branche",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2060525796",
    "hidden": false,
    "id": "relation1041995051",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_850666665",
    "hidden": false,
    "id": "relation3421296606",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "verre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3621540963")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1651110324",
    "max": 0,
    "min": 0,
    "name": "branche",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1041995051",
    "max": 0,
    "min": 0,
    "name": "monture",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3421296606",
    "max": 0,
    "min": 0,
    "name": "verre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("relation1651110324")

  // remove field
  collection.fields.removeById("relation1041995051")

  // remove field
  collection.fields.removeById("relation3421296606")

  return app.save(collection)
})
