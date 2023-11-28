import api from "./instance";

export const getUser = async () => {
  const response = await api.get("/users/userProfile");

  return response.data;
};

export const getUsers = async () => {
  const response = await api.get("/users/userList");

  return response.data;
};

export const getfollowing = async (nickname) => {
  const response = await api.get(`/users/following/${nickname}`);

  return response.data;
};
