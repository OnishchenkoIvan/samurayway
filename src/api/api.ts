import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "408740c5-1e6b-42b6-a275-abc2b7556ad3" },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollow(id: string) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  follow(id: string) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
};
