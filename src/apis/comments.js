import api from "./instance";

export const getComments = async (postId) => {
  const response = await api.get(`/comments/${postId}`);

  return response.data;
};

export const createComment = async ({ postId, form }) => {
  const response = await api.post(`/comments/${postId}`, form);

  return response.data;
};

export const updateComment = async ({ postId, commentId, form }) => {
  const response = await api.put(`/comments/${postId}/${commentId}`, form);

  return response.data;
};

export const deleteComment = async ({ postId, commentId }) => {
  const response = await api.delete(`/comments/${postId}/${commentId}`);

  return response.data;
};
