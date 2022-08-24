const Router = require("express");
const NewsController = require("../controllets/news-controller");

const postRouter = new Router();

postRouter.get("/", NewsController.getNews);
postRouter.post("/", NewsController.createNews);

module.exports = postRouter;