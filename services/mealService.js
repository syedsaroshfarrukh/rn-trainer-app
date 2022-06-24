import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class MealService {
  constructor() {
    this.config = new Configuration();

    console.log("COnstructor Called Login Service");
  }

  async getAllMeals() {
    return axios.get(
      this.config.apiBaseUrl + "allMeal",
      await deviceStorage.loadToken()
    );
  }

  async addNewMeal(formData) {
    return axios.post(
      this.config.apiBaseUrl + "storeMeal",
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
let mealService = new MealService();

export default mealService;
