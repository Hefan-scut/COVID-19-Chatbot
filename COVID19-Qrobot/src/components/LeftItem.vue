<template>
  <div class="container">
    <img class="head" src="@/assets/robot.png" />
    <div class="content">
      <div class="text" v-if="type === 1">
        {{ content }}
      </div>
      <img
        class="img"
        :src="content"
        v-else-if="type === 2"
        @click="preview(content)"
      />
    </div>
  </div>
</template>

<script>
import ImagePreview from 'vant/lib/image-preview'

export default {
  name: 'LeftItem',
  props: ['id', 'type', 'content'],
  methods: {
    preview(url) {
      ImagePreview([url])
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  // width: 100%;
  margin-left: 0px;
  margin-right: 0px;

  display: flex;
  padding: 60px 0px;
  color: rgb(235, 85, 85);

  .head {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px rgb(190, 3, 3) (192, 61, 61);
  }

  .content {
    margin-left: 10px;
    margin-top: 10px;

    .text {
      background-color: rgb(216, 216, 216);
      border-bottom-right-radius: 10px;
      padding: 5px 5px;
      font-size: 14px;
      color: rgb(0, 0, 0);
    }

    .img {
      // width: 500px;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
  .good {
    margin-top: 8px;
    margin-left: 5px;
    color: red;
  }
  .bad {
    margin-top: 8px;
    margin-left: 5px;
    color: green;
  }
}
</style>
