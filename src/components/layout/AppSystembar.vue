<template>
  <v-system-bar app color="background" height="60px">
    <v-toolbar-title class="text-uppercase grey--text">
      <span class="font-weight-light">Referral</span>
      <span>Manager</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text color="error">
      <span>Sign Out</span>
      <v-icon right color="error">mdi-exit-to-app</v-icon>
    </v-btn>
  </v-system-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppSystembar",
  computed: {}
});
</script>
