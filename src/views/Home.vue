<template>
  <div class="home">
    <h1>Homepage</h1>
    <div>
      <v-btn class="primary">Primary</v-btn>
      <v-btn class="secondary">Secondary</v-btn>
      <v-btn class="accent">Accent</v-btn>
      <v-btn class="info">Info</v-btn>
      <v-btn class="success">Success</v-btn>
      <v-btn class="warning">Warning</v-btn>
      <v-btn class="error">Error</v-btn>
    </div>
    <div>
      <v-btn text color="primary">Primary</v-btn>
      <v-btn text color="secondary">Secondary</v-btn>
      <v-btn text color="accent">Accent</v-btn>
      <v-btn text color="info">Info</v-btn>
      <v-btn text color="success">Success</v-btn>
      <v-btn text color="warning">Warning</v-btn>
      <v-btn text color="error">Error</v-btn>
    </div>
    <div>
      <v-btn depressed class="primary">
        <v-icon left>mdi-email</v-icon>
        <span>EMAIL ME</span>
      </v-btn>
      <v-btn small depressed class="secondary">
        <v-icon small left>mdi-email</v-icon>
        <span>EMAIL ME</span>
      </v-btn>
      <v-btn large depressed class="accent">
        <span large>EMAIL ME</span>
        <v-icon large right>mdi-email</v-icon>
      </v-btn>
      <v-btn small fab depressed color="purple">
        <v-icon small>mdi-star</v-icon>
      </v-btn>
      <v-btn depressed class="success">
        <v-icon left>mdi-email</v-icon>
        <span>EMAIL ME</span>
      </v-btn>
      <v-btn depressed class="warning">
        <v-icon left>mdi-email</v-icon>
        <span>EMAIL ME</span>
      </v-btn>
      <v-btn depressed class="error">
        <v-icon left>mdi-email</v-icon>
        <span>EMAIL ME</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
