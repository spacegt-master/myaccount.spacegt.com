import { accountsService as axios } from "spacegt";

export const AccountsApi = {
  info() {
    return axios({
      url: `/api/users/info`,
      method: "get",
    });
  },
  changeAvatar(url: string | null) {
    return axios({
      url: `/api/users/change-avatar`,
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {
        url,
      },
    });
  },
  changeNickname(nickname: string | null) {
    return axios({
      url: `/api/users/change-nickname`,
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {
        nickname,
      },
    });
  },
  changeEmail(email: string | null) {
    return axios({
      url: `/api/users/change-email`,
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {
        email,
      },
    });
  },
  changePhone(phone: string | null) {
    return axios({
      url: `/api/users/change-phone`,
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {
        phone,
      },
    });
  },
  changePwd(oldPwd: string, newPwd: string) {
    return axios({
      url: `/api/users/changePwd`,
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {
        oldPwd,
        newPwd,
      },
    });
  },
};
