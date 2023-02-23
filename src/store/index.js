import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'
import  img2 from '@/assets/2.png'
import  img3 from '@/assets/3.jpg'

Vue.use(Vuex)
const now = new Date();
const store = new Vuex.Store({
  state: {
    // 当前用户
    user: {
      name: 'coffce',
      img: 'dist/images/1.jpg'
    },
    // 会话列表
    sessions_list: [
      {
        id: 1,
        user: {
          name: '示例介绍',
          img: img2
        },
        messages: [
          {
            content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
            date: now
          }, {
            content: '项目地址: https://github.com/coffcer/vue-chat',
            date: now
          }
        ]
      },
      {
        id: 2,
        user: {
          name: 'webpack',
          img: img3
        },
        messages: []
      }
    ],
    // 当前选中的会话
    currentSessionId: 1,
    // 过滤出只包含这个key的会话
    filterKey: ''
  },
  modules: {
    app,
    user,
    permission
  },
  getters,
  actions: {
    INIT_DATA (state) {
      let data = localStorage.getItem('vue-chat-session');
      if (data) {
        state.sessions = JSON.parse(data);
      }
    },
    // 发送消息
    SEND_MESSAGE ({ sessions, currentSessionId }, content) {
      let session = sessions.find(item => item.id === currentSessionId);
      session.messages.push({
        content: content,
        date: new Date(),
        self: true
      });
    },
    // 选择会话
    SELECT_SESSION (state, id) {
      console.log("???????")
      console.log(id)
      console.log("!!!!")

      state.currentSessionId = id;
    } ,
    // 搜索
    SET_FILTER_KEY (state, value) {
      state.filterKey = value;
    }
  }
})

store.watch(
  (state) => state.sessions_list,
  (val) => {
    console.log('CHANGE: ', val);
    localStorage.setItem('vue-chat-session', JSON.stringify(val));
  },
  {
    deep: true
  }
);

export default store
export const actions = {
  initData: ({ dispatch }) => dispatch('INIT_DATA'),
  sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
  selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
  search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value),
};

