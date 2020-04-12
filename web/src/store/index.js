import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// vuex 的状态 类似组件的data
const state = {
    user: {}, // 用户基本信息

}
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
const mutations = {
    // 更新用户基本信息
    updateUser(state, user) {
        console.log('storeUser', user)
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
    // updateSocket(state, socket) {
    //     state.socket = socket
    // },



}

const getters = {

}

// Action 类似于 mutation，不同在于：
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作
const actions = {
    // 添加 socket.id 和 userId 的映射
    async SOCKET_connect({ state }) {
        console.log('socketId', Vue.prototype.$socket.id)
        let socket = {}
        socket.userId = state.user._id
        socket.socketId = Vue.prototype.$socket.id
        await Vue.prototype.$http.put(`/rest/sockets`, socket)

    },
    SOCKET_addFriend() {
        Vue.prototype.$notify({ type: 'success', message: '有新好友请求' });
    },
    // 更新 User
    async updateUser({commit, state}) {
        console.log('storeActionsUser')
        const user =await Vue.prototype.$http.get(`/rest/users/${state.user._id}`)
        commit('updateUser', user)
    },
    // 断开 socket 连接
    disconnectSocket({state}) {
        state.user = {}
        Vue.prototype.$socket.disconnect()

    }
}

// 创建一个 store
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

// 导出 store
export default store;