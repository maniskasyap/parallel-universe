module.exports = app => {
  const cats = require("../controllers/cool-cat.controller.js");

  app.post("/cats", cats.create);

  app.get("/cats", cats.getAll);

  app.get("/cats/:catId", cats.getOne);

  app.put("/cats/:catId", cats.update);

  app.delete("/cats/:catId", cats.remove);
};
