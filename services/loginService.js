import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class LoginService {
  constructor() {
    this.config = new Configuration();

    console.log("COnstructor Called Login Service");
  }

  loginTrainer(formData) {
    return axios.post(this.config.apiBaseUrl + "login-trainer", formData);
  }
  loginClient(formData) {
    return axios.post(this.config.apiBaseUrl + "login-client", formData);
  }
  async getTrainerProfile() {
    return axios.get(
      this.config.apiBaseUrl + "edit-profile",
      await deviceStorage.loadToken()
    );
  }
  async updateTrainerProfile(formData) {
    return axios.post(
      this.config.apiBaseUrl + "update-profile",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async getNotification() {
    return axios.get(
      this.config.apiBaseUrl + "get-notification",
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
let loginService = new LoginService();

export default loginService;
