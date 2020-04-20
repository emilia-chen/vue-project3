import request from "@/utils/request";

const user = {
  //登录
  login({ name, password }) {
    return request({
      url: "/login",
      method: "post",
      params: {
        name,
        password
      }
    });
  },
  //用户信息
  getInfo({ token }) {
    return request({
      url: "/userInfo",
      method: "post",
      params: {
        token
      }
    });
  },
  //登出
  logOut({ token }) {
    return request({
      url: "/userLogout",
      method: "post",
      params: {
        token
      }
    });
  },
  testMock(){
     return request({
      url: "http://localhost:8080/api/user.json",
      method: "get",
    });   
  }
};
export default user;
