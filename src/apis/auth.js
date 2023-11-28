import api from "./instance";

const loginUser = (req) => {
  const response = api.post("/signin", req);

  return response;
};

const registerUser = (req) => {
  const response = api.post("/signup", req);

  return response;
};

export { loginUser, registerUser };
