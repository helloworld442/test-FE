import api from "./instance";

export const getFollow = async () => {
  const response = await api.get("/follow");

  return response.data;
};

export const createFollow = async ({ followingName, followingId }) => {
  const response = await api.post(`/follow/${followingName}/${followingId}`);

  return response.data;
};
