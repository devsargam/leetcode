import axios from "axios";

export const axiosBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JUDGE0_ENDPOINT,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
