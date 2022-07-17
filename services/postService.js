import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class PostService {
  constructor() {
    this.config = new Configuration();
  }

  async getPost() {
    return axios.get(
      this.config.apiBaseUrl + "news",
      await deviceStorage.loadToken()
    );
  }
  async getComments(id) {
    return axios.get(
      this.config.apiBaseUrl + `news-comment/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async addComment(formData) {
    return axios.post(
      this.config.apiBaseUrl + `news-comment-store`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addLike(formData) {
    return axios.post(
      this.config.apiBaseUrl + `news-like-store`,
      formData,
      await deviceStorage.loadToken()
    );
  }

  async addPost(formData) {
    return axios.post(
      this.config.apiBaseUrl + `post-store`,
      formData,
      await deviceStorage.loadToken1()
    );
  }
  async addNewPost(formData) {
    return axios.post(
      this.config.apiBaseUrl + `post-store`,
      formData,
      await deviceStorage.loadToken()
    );
  }

  handleMessage(type) {
    if (type === "add") toast("Successfully Registered!");
    else if (type === "update") toast("Successfully updated User");
    else if (type === "delete") toast("Successfully deleted User");
  }
  handleCustomMessage(message) {
    toast(message.toString());
  }
  handleError() {
    toast("Something went wrong!");
  }
}
let postService = new PostService();

export default postService;
