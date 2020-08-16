<template>
  <div class="container">
    <img class="head" src="@/assets/user.png" />
    <div class="content">
      <div class="text" v-if="type === 1" style="word-break: break-all;">
        {{ content }}
      </div>
      <img class="img" :src="content" v-else-if="type === 2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightItem',
  props: ['id', 'type', 'content'],
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  padding: 0px 30px;
  margin-right: 0px;
  flex-direction: row-reverse;

  .head {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #eee;
  }

  .content {
    margin-right: 10px;
    margin-top: 10px;

    .text {
      background-color: rgb(107, 175, 238);
      border-bottom-left-radius: 10px;
      padding: 5px 5px;
      font-size: 14px;
      color: rgb(255, 255, 255);
    }

    .img {
      width: 100px;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
}
</style>
