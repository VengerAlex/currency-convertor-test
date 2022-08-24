const NewsService = require("../service/news-service");

class NewsController {
    async getNews(req, res) {
        try {
            const response = await NewsService.getAllNews();

            return response
        } catch (error) {
            res.status(500).json({
                message: "Не удалось зарегистрироваться",
            });
        }
    }

    async createNews(req, res) {
        try {
            const response = await NewsService.postNews();

            return response
        } catch (error) {
            res.status(500).json({
                message: "Не удалось зарегистрироваться",
            });
        }
    }
}

module.exports = new NewsController();