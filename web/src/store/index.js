import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// vuex 的状态 类似组件的data
const state = {
    user:{}, // 用户基本信息
    socket:{}, //用户socket信息
    isConnectSocket:false, //是否连接 socket
}
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
const mutations = {
    // 更新用户基本信息
    updateUser(state, user) {
        state.user = user
    },
    // 更新用户名
    updateUsername(state, username) {
        state.user.username = username
    },
    // 更新头像
    updateAvatar(state, url) {
        state.user.avatar = url
    },
    // 更新用户 socket
    updateSocket(state, socket) {
        state.socket = socket
    },

    // 创建socket
    createSocket(state) {
        // 指定命名空间 创建 socket
        const socket = Vue.prototype.$io.connect("http://localhost:3000/chat");
        state.isConnectSocket = true
        state.socket = socket
        console.log(socket)
    },
    // 断开socket 连接
    disconnectSocket(state){
        state.socket.disconnect();
    }
}

// Action 类似于 mutation，不同在于：
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作
const actions = {
    // 创建socket
    createSocket({commit}){
        commit('createSocket')
    },
    //断开 socket 连接
    disconnectSocket({commit}){
        commit('disconnectSocket')
    }
}

// 创建一个 store
const store = new Vuex.Store({
    state,
    mutations,
    actions
});
 
// 导出 store
export default store;