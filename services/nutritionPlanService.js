import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class NutritionPlanService {
  constructor() {
    this.config = new Configuration();
  }

  async getAllNutritions() {
    return axios.get(
      this.config.apiBaseUrl + "nutrtion-plan",
      await deviceStorage.loadToken()
    );
  }
  async getWeeklyNutritionPlan(id) {
    return axios.get(
      this.config.apiBaseUrl + `nutrtion-weekly-plan/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async getDailyNutrition(id) {
    return axios.get(
      this.config.apiBaseUrl + `nutrtion-daily-plan/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async addNewNutritionPlan(formData) {
    return axios.post(
      this.config.apiBaseUrl + "nutrtion-plan-store",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addNutritionMeal(formData) {
    return axios.post(
      this.config.apiBaseUrl + "nutrtion-add-meal",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async addNewWeekInNutritionPlan(id) {
    return axios.get(
      this.config.apiBaseUrl + `nutrition-week-add/${id}`,
      await deviceStorage.loadToken()
    );
  }
  async addFoodToMeal(formData) {
    return axios.post(
      this.config.apiBaseUrl + "nutrtion-add-food",
      formData,
      await deviceStorage.loadToken()
    );
  }
  async deleteFoodFromMeal(id, foodId) {
    return axios.delete(
      this.config.apiBaseUrl + `nutrtion-delete-food/${id}/${foodId}`,
      await deviceStorage.loadToken()
    );
  }
  async deleteMealCard(id) {
    return axios.delete(
      this.config.apiBaseUrl + `nutrtion-delete-meal/${id}`,
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
let nutritionPlanService = new NutritionPlanService();

export default nutritionPlanService;
