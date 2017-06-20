import * as types from '../types';

const state = {
    userInfo:{},
    rightPanelName:''
}

const mutations = {
    [types.COM_SET_USERINFO](state,obj){
        state.userInfo = obj;
    },
    [types.COM_SET_RIGHTUSERNAME](state,str){
        state.rightPanelName = str;
    }
}

const getters = {
    getUserInfo : state => state.userInfo,
    getRightName: state => state.rightPanelName,
}

const actions = {

}

export default {
    state,
    actions,
    getters,
    mutations
}