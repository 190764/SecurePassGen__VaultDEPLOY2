import axios from "axios";

export const api = axios.create({
  baseURL: `${window.location.origin}.host:3000/password-api`,
});
