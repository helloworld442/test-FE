import api from "./instance";

export const getPost = async (postId) => {
  const response = await api.get(`/posts/${postId}`);

  return response.data;
};

export const getPosts = async () => {
  const response = await api.get("/posts");

  return response.data;
};

export const createPost = async (req) => {
  const response = await api.post("/posts", req);

  return response.data;
};

export const updatePost = async (postId, req) => {
  const response = await api.put(`/posts/${postId}`, req);

  return response.data;
};

export const deletePost = async (postId, req) => {
  const response = await api.delete(`/posts/${postId}`, req);

  return response.data;
};
