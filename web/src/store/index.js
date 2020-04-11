import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// vuex 的状态 类似组件的data
const state = {
    user: {}, // 用户基本信息
    socket: {}, //用户socket信息
    sockeId: '', //用户 socket.id 信息
    isConnectSocket: false, //是否连接 socket
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
    // updateSocket(state, socket) {
    //     state.socket = socket
    // },

    // 创建socket
    createSocket(state, socket) {
        console.log('mutationSocket', socket, socket.id)
        // 指定命名空间 创建 socket
        state.socketId = socket.id
        state.isConnectSocket = true
        state.socket = socket
    },
    // 清除 socket
    clearSocket(state) {
        state.socket = {}
        state.isConnectSocket = false
    }
}

const getters = {
    
}

// Action 类似于 mutation，不同在于：
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作
const actions = {
    // 创建socket
    createSocket({ commit, dispatch }) {
        // 指定命名空间 创建 socket
        const socket = Vue.prototype.$io.connect("http://localhost:3000/chat");
        socket.on('connect', async () => {
            commit('createSocket', socket)
            await dispatch('addSocketMap')
        })
    },
    //断开 socket 连接
    disconnectSocket({ state, commit }) {
        state.socket.disconnect();
        commit('clearSocket')
    },
    // 添加 socket.id 和 userId 的映射
    addSocketMap({ state }) {
        let socket = {}
        socket.userId = state.user._id
        socket.socketId = state.socket.id
        Vue.prototype.$http.put(`/rest/sockets`, socket)
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