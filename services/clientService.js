import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class ClientService {
  constructor() {
    this.config = new Configuration();
  }

  async getAllClient() {
    return axios.get(
      this.config.apiBaseUrl + "allClients",
      await deviceStorage.loadToken()
    );
  }

  async getClientInvite(id) {
    return axios.get(
      this.config.apiBaseUrl + `client-invite/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async getSingleClient(id) {
    return axios.get(
      this.config.apiBaseUrl + `client-setting/${id}`,
      await deviceStorage.loadToken()
    );
  }

  async getClientAssessments(id) {
    return axios.get(
      this.config.apiBaseUrl + `assessment-type/${id}`,
      await deviceStorage.loadToken()
    );
  }

  async getAssessmentDetails(id, type_id) {
    return axios.get(
      this.config.apiBaseUrl + `assessment/${id}/${type_id}`,
      await deviceStorage.loadToken()
    );
  }
  async getNextDueWorkout() {
    return axios.get(
      this.config.apiBaseUrl + `next-workout`,
      await deviceStorage.loadToken()
    );
  }
  async getDueWorkout() {
    return axios.get(
      this.config.apiBaseUrl + `due-workout`,
      await deviceStorage.loadToken()
    );
  }
  async getDueNutrition() {
    return axios.get(
      this.config.apiBaseUrl + `due-nutrition-plan`,
      await deviceStorage.loadToken()
    );
  }

  async addNewClient(formData) {
    return axios.post(
      this.config.apiBaseUrl + `addClient`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async clientUpdateSetting(formData) {
    return axios.post(
      this.config.apiBaseUrl + `client-setting-update`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async registerClient(formData) {
    return axios.post(this.config.apiBaseUrl + `register`, formData);
  }

  async addNewAssessment(formData) {
    return axios.post(
      this.config.apiBaseUrl + `assessment-add`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async assignNutrition(formData) {
    return axios.post(
      this.config.apiBaseUrl + `assign-nutrition`,
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
let clientService = new ClientService();

export default clientService;
