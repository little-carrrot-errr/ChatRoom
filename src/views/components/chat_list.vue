<script>

import { mapGetters } from 'vuex';

export default {
  computed: {
    // 映射 getters 到计算属性中
    ...mapGetters(['sessions_list', 'currentSessionId','filterKey']),
    getSessionList:({ sessions_list, filterKey }) => {
      console.log(sessions_list)
      let result = sessions_list.filter(session => session.user.name.includes(filterKey));
      return result;
    },
  },
  methods: {
    selectSession(id) {
      console.log("CILICK")
      console.log(id)
      this.$store.dispatch('SELECT_SESSION', id).then(() => {
          this.$store.state.currentSessionId=id
      })
        .catch(error => {
          console.error('Failed to load posts', error);
        });
    }
  },

};

</script>

<template>
<div class="list">
    <ul>
        <li v-for="item in getSessionList" :class="{ active: item.id === currentSessionId }" @click="selectSession(item.id)">
            <img class="avatar"  width="30" height="30" :alt="item.user.name" :src="item.user.img">
            <p class="name">{{item.user.name}}</p>
        </li>
    </ul>
</div>
</template>

<style scoped lang="less">
.list {
    li {
        padding: 12px 15px;
        border-bottom: 1px solid #292C33;
        cursor: pointer;
        transition: background-color .1s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.03);
        }
        &.active {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
    .avatar, .name {
        vertical-align: middle;
    }
    .avatar {
        border-radius: 2px;
    }
    .name {
        display: inline-block;
        margin: 0 0 0 15px;
    }
}
</style>
