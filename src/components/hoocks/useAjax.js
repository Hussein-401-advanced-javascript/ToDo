import axios from "axios";

export default () => {

    const axiosApi = (url, method, body) => {
      return axios({
        url: url,
        method: method,
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        data: body
      })
    }

    return [axiosApi];
}