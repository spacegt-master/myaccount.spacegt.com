import axios from "@/axios/accounts-service";

export const AccountsApi = {
  info() {
    return axios({
      url: `/api/users/info`,
      method: "get",
    });
  },
};
