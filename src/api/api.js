/**
 *  Api Document url http://cnodejs.org/api
 *
 */

import axios from 'axios';
import router from '@/router';

const URL = 'https://cnodejs.org/api/v1/';

axios.interceptors.response.use( //拦截器
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:  
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

const axiosType = (type, path, data) => {
    if(type === 'get'){
      return axios({
          method: type,
          url: URL + path,
          params: data
        })
    }else if(type ==='post'){
      return axios({
          method: type,
          url: URL + path,
          data: data
        })
    }
}

const http = (type, path, data) => {
  return axiosType(type, path, data)
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
export const getTopicDetails = (data) => http('get', 'topic/' + data.id, data.token);

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

/**
 * 得到用户消息
 * 
 * @param {any} data 
 */
export const getMsgData = (data) => http('get','messages', data);

/**
 * 新建主题
 * 
 * @param {any} data 
 */
export const createTopic = (data) => http('post','topics', data);


/**
 * 评论
 * 
 * @param {any} topic_id 主题id号
 * @param {any} data 评论数据等
 */ 
export const postReplies = (topic_id,data) => http('post','topic/'+topic_id+'/replies',data);

/**
 * 收藏主题
 * 
 * @param {any} data 
 */
export const topicCollect = (data) => http('post','topic_collect/collect',data);

/**
 * 取消收藏主题
 * 
 * @param {any} data 
 */
export const topicDeCollect = (data) => http('post','topic_collect/de_collect',data);