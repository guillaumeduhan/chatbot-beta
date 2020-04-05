/* eslint-disable import/prefer-default-export */
/*
  * Api
  */

const axios = require('axios')

const baseUrl = process.env === 'production' ? 'https://api.mychatbot.me/' : 'http://localhost:3000/'

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getUrlMeta = async (url) => {
  return axiosInstance.post(`get-url-meta`, {
    url,
  })
  .then((results) => {
    return results.data
  })
  .catch((err) => {
    console.log(err)
  })
}
