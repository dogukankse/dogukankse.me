<template>
  <div>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-card ref="form" class="input-card">
          <InputImage/>
          <!-- child to parent için bak https://forum.vuejs.org/t/passing-data-back-to-parent/1201/2 -->
          <v-card-text>
            <v-text-field
              ref="itemName"
              v-model="itemName"
              :rules="nameRules"
              :counter="nameCounter"
              label="Item Name"
              required
            ></v-text-field>
            <v-text-field
              ref="itemCost"
              v-model="itemCost"
              :rules="costRules"
              label="Item Cost"
              required
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-1"></v-divider>
          <v-card-actions>
            <v-btn flat>Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on }">
                  <v-btn icon class="my-0" @click="resetForm" v-on="on">
                    <v-icon>refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" flat @click="submit">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import InputImage from './InputImage.vue';

export default {
  name: 'new-item',
  components: {
    InputImage,
  },
  computed: {
    form() {
      return {
        itemCost: this.itemCost,
        itemName: this.itemName,
      };
    },
  },
  methods: {
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
  },
  data() {
    return {
      nameCounter: 20,
      formHasErrors: false,
      nameRules: [
        (v) => {
          if (v == null) {
            this.formHasErrors = true;
            return 'Name is required';
          }
          this.formHasErrors = false;
          return false;
        },
        (v) => {
          if (v.length >= this.nameCounter) {
            this.formHasErrors = true;
            return `Name must be less than ${this.nameCounter} characters`;
          }
          this.formHasErrors = false;
          return false;
        },
      ],
      costRules: [
        v => /^-?\d*[.,]?\d{0,2}$/.test(v) || 'Cost must be valid',

      ],
    };
  },
};
</script>

<style scoped>
.input-card {
  margin-top: 16px;
}
</style>
