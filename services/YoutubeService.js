import axios from "axios";
import Configuration from "../configurations/config";
import deviceStorage from "../configurations/deviceStorage";

class WorkoutService {
  constructor() {
    this.config = new Configuration();

    console.log("COnstructor Called Login Service");
  }

  getYoutubeVideos(query) {
    return axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&videoType=any&key=AIzaSyChZtV35Pq5NbNmL2VQBRKZG5as_d3gO7o`
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
