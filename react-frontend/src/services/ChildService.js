import axios from "axios";

const CHILD_API_BASE_URL = "http://localhost:8081/api";
class ChildService {
  getChildren() {
    return axios.get(CHILD_API_BASE_URL + "/allchildren");
  }

  createChild(child) {
    return axios.post(CHILD_API_BASE_URL + "/addchild", child);
  }

  getChildById(id) {
    return axios.get(CHILD_API_BASE_URL + "/child/" + id);
  }

  updateChild(child, id) {
    return axios.put(CHILD_API_BASE_URL + "/child/" + id, child);
  }

  deleteChild(id) {
    return axios.delete(CHILD_API_BASE_URL + "/child/" + id);
  }
}

export default new ChildService();
