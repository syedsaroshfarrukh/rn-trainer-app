import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class LoginService {
  constructor() {
    this.config = new Configuration();
    this.componentDidMount();
    console.log("COnstructor Called Login Service");
  }

  async componentDidMount() {
    this.token = await deviceStorage.loadToken();
    console.log("tokennnnn", this.token);
    this.tokenConfig = {
      headers: {
        Authorization: "Bearer " + this.token,
      },
    };
  }

  login(formData) {
    return axios.post(this.config.apiBaseUrl + "login", formData);
  }
  getTrainerProfile() {
    return axios.get(this.config.apiBaseUrl + "edit-profile", this.tokenConfig);
  }
  updateTrainerProfile(formData) {
    return axios.post(
      this.config.apiBaseUrl + "update-profile",
      formData,
      this.tokenConfig
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
