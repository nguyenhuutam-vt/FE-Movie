import axios from "axios";
export const auth = {
  state: {
    isAuthenticated: false,
  },
  reducers: {
    setAuth(state, isAuthenticated) {
      return {
        ...state,
        isAuthenticated,
      };
    },
    // setListUser(state, listUser) {
    //   return {
    //     ...state,
    //     listUser,
    //   };
    // },
    // setCount(state, payload) {
    //   return state + payload;
    // },
  },
  effects: (dispatch) => ({
    async login(payload) {
      const { username, password } = payload;
      return axios({
        method: "post",
        url: process.env.REACT_APP_LOGIN_URL,
        data: {
          username: username,
          password: password,
        },
      });
      // }).then((res) => {
      //   console.log(res)
      //   localStorage.setItem("access_token", res.data.access_token);
      //   this.setAuth(true);
      // }).catch((error) => {
      //   console.log(error);
      // });
    },
    // async logout(){
    //     localStorage.removeItem("token")
    //     this.setAuth(false);
    // },
    // async refreshToken(){
    //     localStorage.setItem("token","token")
    //     const data = await axios.post();
    // }
    // async fetchUsers(payload, rootState) {
    //   const data = await fetch(
    //     "https://jsonplaceholder.typicode.com/users"
    //   ).then((response) => response.json());
    //   console.log(data);
    //   this.setListUser(data);
    // },
  }),
};
