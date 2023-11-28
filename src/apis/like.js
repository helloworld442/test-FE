import api from "./instance";

export const getLikes = async (postId) => {
  const response = await api.get(`/likes/${postId}`);

  return response.data;
};

export const createLikes = async (postId) => {
  const response = await api.post(`/likes/${postId}`);

  return response.data;
};
