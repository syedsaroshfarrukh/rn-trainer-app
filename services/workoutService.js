import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class WorkoutService {
  constructor() {
    this.config = new Configuration();

    console.log("COnstructor Called Login Service");
  }

  async getAllWorkoutTemplate() {
    return axios.get(
      this.config.apiBaseUrl + "allWorkoutTemplate",
      await deviceStorage.loadToken()
    );
  }
  async addWorkoutTemplate(formData) {
    return axios.post(
      this.config.apiBaseUrl + "storeWorkoutTemplate",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addExcerciseToWorkout(formData) {
    return axios.post(
      this.config.apiBaseUrl + `add-exercise`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addExcerciseToSuperset(formData) {
    return axios.post(
      this.config.apiBaseUrl + `add-exercise-superset`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addExcerciseToCircuit(formData) {
    return axios.post(
      this.config.apiBaseUrl + `add-exercise-circuit`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addEmptySuperSet(formData) {
    return axios.post(
      this.config.apiBaseUrl + `add-superset`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addEmptyCircuit(formData) {
    return axios.post(
      this.config.apiBaseUrl + `add-circuit`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async getSingleWorkoutTemplate(id) {
    return axios.get(
      this.config.apiBaseUrl + `workout/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async addSupersetSets(formData) {
    return axios.post(
      this.config.apiBaseUrl + `update-note-superset`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addCircuitSets(formData) {
    return axios.post(
      this.config.apiBaseUrl + `update-note-circuit`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async updateExcercise(formData) {
    return axios.post(
      this.config.apiBaseUrl + `update-exercise`,
      formData,
      await deviceStorage.loadToken()
    );
  }
  async deleteExcerciseFromSuperSet(id, typeId) {
    return axios.delete(
      this.config.apiBaseUrl + `delete-exercise/${id}/${typeId}`,
      await deviceStorage.loadToken()
    );
  }
  async deleteExcerciseMainCard(id) {
    return axios.delete(
      this.config.apiBaseUrl + `delete-circuit/${id}`,
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
let workoutService = new WorkoutService();

export default workoutService;
