import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class PlanTemplateService {
  constructor() {
    this.config = new Configuration();
  }

  async getAllPlanTemplates() {
    return axios.get(
      this.config.apiBaseUrl + "workout-plan",
      await deviceStorage.loadToken()
    );
  }
  async getWeeksInPlanTemplate(id) {
    return axios.get(
      this.config.apiBaseUrl + `workout-weekly-plan/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async getDailyWorkoutPlanTemplate(id) {
    return axios.get(
      this.config.apiBaseUrl + `workout-daily-plan/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async addNewWeekPlanInPlanTemplate(id) {
    return axios.get(
      this.config.apiBaseUrl + `workout-week-add/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async addPlanTemplate(formData) {
    return axios.post(
      this.config.apiBaseUrl + "workout-plan-add",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addExcerciseToPlanTemplate(formData) {
    return axios.post(
      this.config.apiBaseUrl + "add-exercise-plan",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addExcerciseToCircuitSuperset(formData) {
    return axios.post(
      this.config.apiBaseUrl + "add-exercise-superset-circuit-plan",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addSetsToCircuitSuperset(formData) {
    return axios.post(
      this.config.apiBaseUrl + "update-note-superset-circuit-plan",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addEmptySuperSet(formData) {
    return axios.post(
      this.config.apiBaseUrl + "add-superset-plan",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addEmptyCircuit(formData) {
    return axios.post(
      this.config.apiBaseUrl + "add-circuit-plan",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async setInfo(formData) {
    return axios.post(
      this.config.apiBaseUrl + "update-exercise-plan",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async copyTemplate(formData) {
    return axios.post(
      this.config.apiBaseUrl + "copy-template",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async deleteMainExcerciseCard(id) {
    return axios.delete(
      this.config.apiBaseUrl + `delete-superset-plan/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async deleteExcerciseFromSuperset(id, type_id) {
    return axios.delete(
      this.config.apiBaseUrl + `delete-exercise-plan/${id}/${type_id}`,
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
let planTemplateService = new PlanTemplateService();

export default planTemplateService;
