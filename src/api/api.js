/**
 *  Api Document url http://cnodejs.org/api
 * 
 */

import axios from 'axios';

const url = 'http://cnodejs.org/api/v1/';

const getData = (path, data) => {
    return axios.get(url + path, {
            params: data
        })
        .then(function(res) {
            if (res.status == 200) {
                return res.data;
            }
        })
}

/**
 * 得到 列表数据
 * 
 * @param {any} data 
 */
export const getTopicsList = (data) => getData('topics', data);

/**
 * 
 * 得到 主题详情
 * @param {any} data 
 */
export const getTopicDetails = (data) => getData('topics/' + data);