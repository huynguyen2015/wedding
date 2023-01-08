import AppConsts from '../lib/appconst'
// import { LError } from '../lib/abpUtility'
import { Modal } from 'antd'
import axios from 'axios'

declare const abp: any

const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  timeout: 30000
})

http.interceptors.request.use(
  function (config) {
    if (config && config.headers) {
      if (abp?.auth?.getToken()) {
        config.headers['Authorization'] = 'Bearer ' + abp.auth.getToken()
      }
      config.headers['X-Email'] =
        abp.currentLogin?.user?.email || process.env.REACT_APP_DEVELOPER_EMAIL
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log(error)
    if (
      error.response?.data?.error?.message &&
      error.response?.data?.error?.details
    ) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      Modal.error({
        title: error.response.data.error.message,
        content: error.response.data.error.details
      })
    } else if (error.request?.response) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // const errorDetails = ['Response error']
      // Modal.error({
      //   title: LError('ERROR'),
      //   content: (
      //     <>
      //       {errorDetails.map((item, index) => {
      //         return <div key={index}>{LError(item)}</div>
      //       })}
      //     </>
      //   )
      // })
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }

    return Promise.reject(error)
  }
)

class HttpClient {
  async get(url, params?) {
    const res = await http.get(url, { params })
    return res.data
  }

  async post(url, body?, params?) {
    const res = await http.post(url, body, { params })
    return res.data
  }

  async put(url, body?, params?) {
    const res = await http.put(url, body, { params })
    return res.data
  }

  async delete(url, params?) {
    const res = await http.delete(url, { params })
    return res.data
  }
}

export default new HttpClient()
