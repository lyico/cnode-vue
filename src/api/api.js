/**
 *  Api Document url http://cnodejs.org/api
 *
 */

import axios from 'axios';

const URL = 'http://cnodejs.org/api/v1/';

const http = (type, path, data) => {
  return axios({
      method: type,
      url: URL + path,
      params: data
    })
    .then(res => {
      if (res.status == 200) {
        return res.data;
      }
    })
    .catch(res => {
      return {
        success: false
      }
    });
}

/**
 * 得到 列表数据
 *
 * @param {any} data
 */
export const getTopicsList = (data) => http('get', 'topics', data);

/**
 *
 * 得到 主题详情
 * @param {any} data
 */
export const getTopicDetails = (data) => http('get', 'topic/' + data);

/**
 * 通过token登录，并获取登录信息
 *
 * @param {any} data
 */
export const loginToken = (data) => http('post', 'accesstoken', data);

/**
 * 得到用户信息
 * 
 * @param {any} data 
 */
export const getRightUserInfo = (data) => http('get', 'user/' + data);
