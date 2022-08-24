const PostModel = require("../models/post-module");

class NewsService {
    async getAllNews(){
        const response = await PostModel.find();
    }

    async postNews(){
        const response = await PostModel.find();
    }
}

module.exports = new NewsService();