import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// vuex 的状态 类似组件的data
const state = {
    user: {}, // 用户基本信息 {}
    chatMessage: {}, //聊天信息 {[{},{}],[]}
    worldMessage:[], //世界聊天信息 [{}, {}]
}
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
const mutations = {
    // 更新用户基本信息
    updateUser(state, user) {
        console.log('storeUser', user)
        state.user = user
        sessionStorage.user = JSON.stringify(state.user)
    },
    // 更新用户名
    updateUsername(state, username) {
        state.user.username = username
        let user = JSON.parse(sessionStorage.user)
        user.username = username
        sessionStorage.user = JSON.stringify(user)
    },
    // 更新头像
    updateAvatar(state, url) {
        state.user.avatar = url
        let user = JSON.parse(sessionStorage.user)
        user.avatar = url
        sessionStorage.user = JSON.stringify(user)
    },
    // 更新用户 socket
    // updateSocket(state, socket) {
    //     state.socket = socket
    // },

    // 更新 chatMessage 
    privateChat(state, res) {
        console.log('chatMessage', res)

        if (state.chatMessage[res.fromId] === undefined) {
            Vue.prototype.$set(state.chatMessage, res.fromId, [])
        }
        state.chatMessage[res.fromId].push(res)

        console.log('chatMessage2', state.chatMessage)
    },
    // 更新自己发送的 chatMessage
    privateChatSelf(state, data) {
        if (state.chatMessage[data.toId] === undefined) {
            Vue.prototype.$set(state.chatMessage, data.toId, [])
        }
        state.chatMessage[data.toId].push(data)
    },
    // 更新自己发送的 worldMessage
    updateWorldMessageSendBySelf(state, data) {
        state.worldMessage.push(data)
    }


}

const getters = {
    // chatMessage: (state) => {
    //     return state.chatMessage[this.friend._id]
    // }
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
    // socket 监听 添加好友请求
    SOCKET_addFriend() {

        Vue.prototype.$notify({ type: 'success', message: '有新好友请求' });
    },
    // socket 监听 私聊事件
    SOCKET_privateChat({commit}, res) {
            // console.log('storeSocket1', res)
            commit('privateChat', res)

    },
    // socket 监听 world 事件
    SOCKET_worldMessage({commit}, res){
        //更新 worldMessage
        console.log('res...', res)
        commit('updateWorldMessageSendBySelf', res)
    },
    SOCKET_updateFriends({dispatch}){
        // 更新好友列表，提示好友添加成功
        Vue.prototype.$notify({ type: 'success', message: '有新朋友添加成功' });
        dispatch('updateUser')
    },

    // 更新 chatMessage 
    updateChatMessage({commit}, data) {
        commit('privateChat', data)
    },

    // 更新 User
    async updateUser({ commit, state }) {
        console.log('storeActionsUser')
        const res = await Vue.prototype.$http.get(`/rest/users/detail/${state.user._id}`)
        commit('updateUser', res.data)
    },
    // 断开 socket 连接
    disconnectSocket({ state }) {
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