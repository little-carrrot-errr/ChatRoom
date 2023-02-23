<template>
<div id="chatroom">
    <div class="sidebar">
      <chat_card></chat_card>
      <chat_list></chat_list>
    </div>
    <div class="main">
      <chat_message></chat_message>
      <chat_text></chat_text>
    </div>
</div>

</template>

<script>

import chat_card from './components/chat_card'
import chat_list from './components/chat_list'
import chat_text from './components/chat_text'
import chat_message from './components/chat_message'
import {getCookie, setCookie} from '@/utils/support'
import {actions} from '../store'

export default {
  components: { chat_card, chat_list, chat_text, chat_message },
  name: 'chatRoom',
  vuex: {
    actions: actions
  },
  methods:{
    gfriend(){
      console.log(this.$store)
      console.log("cooooookie!")
      console.log(getCookie("id"))
    }
  },
  created () {
    this.gfriend();
    actions.initData();
  }
}
</script>

<style lang="less" scoped>
#chatroom {
  margin: 20px auto;
  width: 800px;
  height: 600px;

  overflow: hidden;
  border-radius: 3px;

  .sidebar, .main {
    height: 100%;
  }
  .sidebar {
    float: left;
    width: 200px;
    color: #f4f4f4;
    background-color: #2e3238;
  }
  .main {
    position: relative;
    overflow: hidden;
    background-color: #eee;
  }
  .text {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .message {
    height: ~'calc(100% - 160px)';
  }
}

.app-container {
  width: 80%;
  margin: 120px auto;
}

.img-style {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
