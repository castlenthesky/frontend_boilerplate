<template>
  <v-app
    id="mainApp"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <AppSystembar />

    <v-app-bar app color="#171717" height="50px">
      <v-app-bar-nav-icon
        color="primary"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        Dashboard /
        <v-icon>mdi-home</v-icon>
      </span>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Navigation
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app inset>&copy; 2020 [Company Name Here]</v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import router from "@/router";
import AppSystembar from "@/components/layout/AppSystembar.vue";

export default Vue.extend({
  name: "App",
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },

  components: {
    AppSystembar
  },

  data: () => ({
    drawer: null,
    mini: null,
    links: [
      { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
      { title: "Story Manager", icon: "mdi-script-text", route: "/plot" },
      { title: "Locations", icon: "mdi-map", route: "/locations" },
      {
        title: "Characters",
        icon: "mdi-account-supervisor",
        route: "/characters"
      }
    ]
  })
});
</script>
