<template>
  <div>
    <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-card ref="form" class="input-card">
          <v-card-text>
            <InputImage v-on:childToParent="onChildClick"/>
            <v-text-field
              ref="itemName"
              v-model="form.itemName"
              :rules="nameRules"
              :counter="nameCounter"
              label="Item Name"
              required
            />
            <v-text-field
              ref="itemCost"
              v-model="form.itemCost"
              :rules="costRules"
              label="Item Cost"
              required
            />
          </v-card-text>
          <v-divider class="mt-1"/>
          <v-card-actions>
            <v-btn @click="goBack" flat>Cancel</v-btn>
            <v-spacer/>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasError" left>
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
import { db, storage } from '@/middleware/firebaseInit';
import InputImage from './InputImage.vue';

export default {
  name: 'new-item',
  components: {
    InputImage,
  },
  data() {
    return {
      item: null,
      formHasError: false,
      nameCounter: 20,
      v: null,
      itemName: null,
      itemCost: null,
      imgFile: null,
      nameRules: [
        (v) => {
          if (v == null) {
            this.formHasError = true;
            return 'Name is required';
          }
          this.formHasError = false;
          return false;
        },
        (v) => {
          if (v != null && v.length >= this.nameCounter) {
            this.formHasError = true;
            return `Name must be less than ${this.nameCounter}`;
          }
          this.formHasError = false;
          return false;
        },
      ],
      costRules: [
        v => /^-?\d*[.,]?\d{0,2}$/.test(v) || 'Cost must be valid',

      ],
    };
  },
  computed: {
    form() {
      return {
        itemCost: this.itemCost,
        itemName: this.itemName,
        imgFile: this.imgFile,
      };
    },
  },
  methods: {
    goBack() {
      console.log('geri');
      this.$router.push('/bil3008');
    },
    onChildClick(value) {
      this.imgFile = value;
      console.log(this.imgFile);
    },
    submit() {
      if (!this.formHasError) {
        const ref = `images/${this.imgFile.name}`;
        const storageRef = storage.ref();
        const imgRef = storageRef.child(ref);

        imgRef.put(this.imgFile).then((snapshot) => {
          console.log('snapshot ', snapshot);
          storage.ref(ref).getDownloadURL().then((url) => {
            db.collection('items').add({
              imgUrl: url, // datastore linki gelecek buraya
              itemCost: this.form.itemCost,
              itemName: this.form.itemName,
            }).then(this.$router.push({ path: '/bil3008' })).catch((err) => {
              console.error('err: ', err);
            });
          });
        });
      }
    },
    resetForm() {
      this.formHasError = false;
      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
  },

};
</script>
