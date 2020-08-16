<template>
  <v-app-bar app color="indigo darken-0" dark dense fixed>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.png"
        transition="scale-transition"
        width="40"
      />

      <v-toolbar-title> COVID-19 聊天机器人</v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-btn text @click.prevent="func">
      <span class="mr-2">帮助</span>
      <v-icon>help_outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    func() {
      this.$emit('help')
    },
  },
}
</script>
