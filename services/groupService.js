import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class GroupService {
  constructor() {
    this.config = new Configuration();

    console.log("COnstructor Called Login Service");
  }

  async getAllGroups() {
    return axios.get(
      this.config.apiBaseUrl + "group",
      await deviceStorage.loadToken()
    );
  }
  async getAllGroupMembers(id) {
    return axios.get(
      this.config.apiBaseUrl + `group-members/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async addGroup(formData) {
    return axios.post(
      this.config.apiBaseUrl + "add-group",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async updateGroup(formData) {
    return axios.post(
      this.config.apiBaseUrl + "group-update",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async deleteGroup(id) {
    return axios.delete(
      this.config.apiBaseUrl + `group-delete/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async addGroupMember(formData) {
    return axios.post(
      this.config.apiBaseUrl + "add-members",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async assignPlanTemplateToGroup(formData) {
    return axios.post(
      this.config.apiBaseUrl + "assign-workout-group",
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
let groupService = new GroupService();

export default groupService;
