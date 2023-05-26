import axios from "axios";

const newRequest = axios.create({
  // baseURL: "http://localhost:3004/",     //DEVLOPMENT ENV (Working)
  baseURL: "http://localhost:3004/api",     //PROD ENV (Test)
});

export default newRequest;
