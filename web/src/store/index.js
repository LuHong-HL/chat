import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// vuex 的状态 类似组件的data
const state = {
    user:{}, // 用户基本信息
}
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
const mutations = {
    // 更新用户基本信息
    updateUser(state, user) {
        state.user = user
    }
}

// 创建一个 store
const store = new Vuex.Store({
    state,
    mutations
});
 
// 导出 store
export default store;