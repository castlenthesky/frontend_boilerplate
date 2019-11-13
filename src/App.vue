<template>
  <v-app id="inspire">
    <v-system-bar app height="50px">
      This is the app bar.
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
    <v-subheader class="pt-4">Navigation</v-subheader>
      <v-list dense flat>
        <v-list-item link v-for="(item, i) in navLinks" :key="i" router :to="item.route" color="primary">
          <v-list-item-action>
            <v-icon class="group">{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="px-4">
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app inset>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<style>
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
</style>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    item: 1,
    navLinks: [
      {
        icon: 'mdi-home',
        text: 'Dashboard',
        route: '/',
      },
      {
        icon: 'mdi-information-outline',
        text: 'About',
        route: 'about',
      },
      {
        icon: 'mdi-check-bold',
        text: 'Tasks',
        route: 'tasks',
      },
    ],
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
