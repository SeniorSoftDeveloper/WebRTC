import axios from "axios";

const API_URL = "http://localhost:8000/api/auth/";

const register = (username, email, password, firstname,lastname) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    firstname,
    lastname,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};

// const initstate = {
// 	signup: false,
// }


// //action
// export const signupAction = (value) => {


// 	return {type:"signup", value};
// }

// //reducer

// const Sign = (state = initstate, action) => {
// 	switch(action.type){
// 		case "signup": return {...state, signup: action.value}
// 		default: return state;
// 	}
// }

// export default Sign