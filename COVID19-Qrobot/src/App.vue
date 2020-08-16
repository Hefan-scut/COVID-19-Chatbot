<template>
    <v-app id="lex-web">
        <Chat></Chat>
    </v-app>
</template>

<script>

import Chat from '@/components/Chat.vue';

export default {
  name: 'App',

  components: {
      Chat
  },

  data: () => ({
    //
  }),
};
</script>
<style>
@import '../node_modules/material-design-icons/iconfont/material-icons.css';
@import '../node_modules/vuetify/dist/vuetify.min.css';
</style>
