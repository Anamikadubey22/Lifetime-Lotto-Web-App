import axios from "axios";
import { config } from "../config";
const path = {
    baseUrl: config.mainUrl, 
    assetsUrl: config.assetsUrl,
    apiUrl: config.apiUrl
};

export const getScratchCards = async (headers) => {
  const response = await axios
    .get(`${path.apiUrl}/api/scratchcard`, headers)
    .then((res) => {
      return res.data.data.rows;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

export const getLotteryTickets = async (headers) => {
  const response = await axios
    .get(`${path.apiUrl}/api/gameinfo`, headers)
    .then((res) => {
      return res.data.data.rows;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export const getLotteryTicketsDetail = async (headers, id) => {
  const response = await axios
    .get(`${path.apiUrl}/api/gameinfo/${id}`, headers)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export const userLogin = async (body, headers) => {
    const response = await axios
      .post(`${path.apiUrl}/api/user/authenticate`, body, headers)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  
    return response;
  };

export const userRegisteration = async (body, headers) => {
  const response = await axios
    .post(`${path.apiUrl}/api/user/register`, body, headers)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export const getCountries = async (headers) => {
  const response = await axios
    .get(`https://laravel-world.com/api/countries`)
    .then((response) => {
      return response.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};
