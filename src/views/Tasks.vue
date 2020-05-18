<template>
  <div class="tasks">
    <h1>Tasks</h1>
    <v-container>
      <v-card class="mx-auto" color="secondary">
        <v-flex>
          <div class="caption">Project Title</div>
        </v-flex>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  components: {},
  data() {
    return {
      tasks: [
        {
          title: "Task 0",
          person: "Brian",
          due: "1/1/2021",
          status: "incomplete",
          content: {
            text: "Task description here."
          }
        },
        {
          title: "Task 1",
          person: "Lin",
          due: "1/1/2021",
          status: "complete",
          content: {
            text: "Task description here."
          }
        },
        {
          title: "Task 2",
          person: "Brian",
          due: "1/1/2021",
          status: "complete",
          content: {
            text: "Task description here."
          }
        },
        {
          title: "Task 3",
          person: "Brian",
          due: "1/1/2021",
          status: "complete",
          content: {
            text: "Task description here."
          }
        }
      ]
    };
  }
};
</script>
