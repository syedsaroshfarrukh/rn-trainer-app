import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class ClientService {
  constructor() {
    this.config = new Configuration();
    this.componentDidMount();
    console.log("COnstructor Called");
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

  getAllClient() {
    return axios.get(this.config.apiBaseUrl + "allClients", this.tokenConfig);
  }

  getClientInvite(id) {
    return axios.get(
      this.config.apiBaseUrl + `client-invite/${id}`,
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
let clientService = new ClientService();

export default clientService;
