import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class ExcerciseService {
  constructor() {
    this.config = new Configuration();

    console.log("COnstructor Called Login Service");
  }

  async getAllExcercises() {
    return axios.get(
      this.config.apiBaseUrl + "allExercise",
      await deviceStorage.loadToken()
    );
  }
  async addNewExcercie(formData) {
    return axios.post(
      this.config.apiBaseUrl + "storeExercise",
      formData,
      await deviceStorage.loadToken()
    );
  }
  //   async addWorkoutTemplate(formData) {
  //     return axios.post(
  //       this.config.apiBaseUrl + "storeWorkoutTemplate",
  //       formData,
  //       await deviceStorage.loadToken()
  //     );
  //   }

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
let excerciseService = new ExcerciseService();

export default excerciseService;
