<template>
  <div class="audits">
    <v-card class="mx-auto">
      <v-data-table
    :headers="headers"
    :items="projects"
    :search="search"
    sort-by="number"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My Audits</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          right
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.number" label="Audit Number"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.title" label="Description"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.market" label="Market"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.lead" label="Lead"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.status" label="Status"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="green darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
    </v-card>
  </div>
</template>

<style></style>

<script>
import db from '@/fb';

export default {
  data: () => ({
    dialog: false,
    search: '',
    headers: [
      {
        text: 'Audit Number',
        align: 'left',
        value: 'number',
      },
      { text: 'Description', value: 'title' },
      { text: 'Market', value: 'market' },
      { text: 'Lead', value: 'lead' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'action', sortable: false },
    ],
    projects: [],
    editedIndex: -1,
    editedItem: {
      number: null,
      title: null,
      market: null,
      lead: null,
      status: null,
    },
    defaultItem: {
      number: null,
      title: null,
      market: null,
      lead: null,
      status: null,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    db.collection('audits').onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        // console.log(change);
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.projects.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      // console.log(this);
    },

    deleteItem(item) {
      const index = this.projects.indexOf(item);
      confirm('Are you sure you want to delete this item?');
      this.projects.splice(index, 1);
      db.collection('audits').doc(item.id).delete();
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        // console.log(this.editedIndex);
        // console.log(this.projects[this.editedIndex].id);
        db.collection('audits').doc(this.projects[this.editedIndex].id).set(
          {
            number: this.editedItem.number,
            title: this.editedItem.title,
            market: this.editedItem.market,
            lead: this.editedItem.lead,
            status: this.editedItem.status,
          },
          {
            merge: true,
          },
        );
        Object.assign(this.projects[this.editedIndex], this.editedItem);
      } else {
        db.collection('audits').add(this.editedItem).then(() => {
          // console.log('New Audit added to DB.');
        });
      }
      this.close();
    },
  },
};
</script>
