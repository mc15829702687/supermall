import axios from 'axios'

// 1. 创建axios对象
export function getApi(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000
  });

  return instance(config);
}