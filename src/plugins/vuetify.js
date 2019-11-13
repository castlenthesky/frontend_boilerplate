import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: 'dark',
  icons: {
    iconfont: 'fa',
    values: {
      cancel: 'fas fa-ban',
      dashboard: 'fas fa-ellipsis-v',
    },
  },
});
