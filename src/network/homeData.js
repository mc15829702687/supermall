import {getApi} from './request'

// 1. 首页大图轮播数据
export function getSwipperData() {
  const url = 'json/home/swipper.json';

  return getApi({
    url,
    method: "get"
  })
}