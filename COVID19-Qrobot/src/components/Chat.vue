<template>
  <div class="v-container" ref="chatContent">
    <div class="top">
      <Toolbar @help="introduce"></Toolbar>
    </div>
    <div
      class="list"
      id="list"
      ref="list"
      style="margin-bottom: 0px; margin-bottom: 30px;"
    >
      <ul>
        <li v-for="(item, index) in msglist" :key="index">
          <RightItem
            :id="item.id"
            :type="item.type"
            :content="item.content"
            v-if="item.me"
          ></RightItem>
          <LeftItem
            :id="item.id"
            :type="item.type"
            :content="item.content"
            v-else
          ></LeftItem>
          <div v-scroll style="height: 0"></div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class="line"></div>
      <div class="input-send">
        <van-field
          v-model="text"
          placeholder="请输入聊天内容..."
          class="input"
          @keyup.enter="send"
        />
        <van-button plain type="info" class="send" @click="send"
          >发送</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import { getChatResponse2 } from '@/api/ApiChat'
import { getChatResponse1 } from '@/api/ApiChat'
import LeftItem from '@/components/LeftItem'
import RightItem from '@/components/RightItem'
import Toolbar from '@/components/Toolbar.vue'
// Vue.use(Vuex);
Vue.use(Vuetify)
Vue.directive('scroll', {
  inserted(el) {
    el.scrollIntoView()
  },
})

export default {
  name: 'Chat',
  components: { Toolbar, LeftItem, RightItem },
  data: () => {
    return {
      text: '',
      msglist: [
        {
          id: 1,
          type: 1,
          content: '欢迎你！',
          me: false,
        },
      ],
    }
  },

  updated() {
    this.scrollToBottom()
  },
  methods: {
    introduce() {
      this.msglist.push({
        id: this.msglist[this.msglist.length - 1].id + 1,
        type: 1,
        content: '我是COVID-19智能机器人，关于新冠病毒有什么问题都可以问我！',
        me: false,
      })
    },

    send() {
      if (this.text) {
        this.msglist.push({
          id: this.msglist[this.msglist.length - 1].id + 1,
          type: 1,
          content: this.text,
          me: true,
        })

        this.getResponse(this.text)
        this.text = ''
      }
    },
    getResponse(text) {
      // getChatResponse2(text).then((res) => {
      //   console.log(res)
      //   this.msglist.push({
      //     id: this.msglist[this.msglist.length - 1].id + 1,
      //     type: 1,
      //     content: res.data.answer,
      //     me: false,
      //   })
      // })
      getChatResponse1(text).then((res) => {
        if (res.msg == 'ok') {
          console.log('first')
          this.msglist.push({
            id: this.msglist[this.msglist.length - 1].id + 1,
            type: 1,
            content: res.data.answer,
            me: false,
          })

          // return new Promise((resolve, reject) => {
          //   resolve()
          // })
        } else {
          getChatResponse2(text).then((resu) => {
            console.log('second')
            this.msglist.push({
              id: this.msglist[this.msglist.length - 1].id + 1,
              type: 1,
              content: resu.data.answer,
              me: false,
            })
          })
        }
      })
    },
    scrollToBottom() {
      this.$nextTick(() => {
        window.scrollTo(0, 0x3f3f3f3f)
      })
    },
  },
}
</script>

<style scoped lang="scss">
.v-container {
  padding-left: 0;
  ul {
    padding: 10;
    margin: 10;
  }

  li {
    list-style: none;
  }

  .list {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }

  .bottom {
    width: 100%;
    position: fixed;
    bottom: 0;

    .line {
      width: 100%;
      height: 1px;
      background-color: #ddd;
    }

    .input-send {
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      width: 100%;

      .input {
        padding-left: 15px;
      }

      .send {
        width: 90px;
        height: 30px;
        margin-top: 7px;
        margin-right: 10px;
      }
    }
  }
}
</style>
