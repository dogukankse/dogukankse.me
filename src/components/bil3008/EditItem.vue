<template>
  <!-- child to parent için bak https://forum.vuejs.org/t/passing-data-back-to-parent/1201/2 -->
  <div>
    {{this.item}}
    <v-layout justify-center>
      <v-flex xs12 sm10 md8 lg6>
        <v-card ref="form" class="input-card">
          <v-card-text>
            <v-img :src="item.imgUrl" v-if="!newImg"/>
            <InputImage v-on:childToParent="onChildClick"/>
            <v-text-field
              ref="itemName"
              v-model="item.itemName"
              :rules="nameRules"
              :counter="nameCounter"
              label="Item Name"
              required
            />
            <v-text-field
              ref="itemCost"
              v-model="item.itemCost"
              :rules="costRules"
              label="Item Cost"
              required
            />
          </v-card-text>
          <v-divider class="mt-1"/>
          <v-card-actions>
            <v-btn flat>Cancel</v-btn>
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
  name: 'edit-item',
  components: {
    InputImage,
  },
  data() {
    return {
      item: null,
      itemName: null,
      itemCost: null,
      imgUrl: null,
      formHasError: false,
      newImg: false,
      nameCounter: 20,
      v: null,
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
      this.newImg = true;
      console.log(this.imgFile);
    },
    submit() {
      if (this.newImg) {
        const ref = `images/${this.imgFile.name}`;
        const storageUrl = '';
        const storageRef = storage.ref();
        const imgRef = storageRef.child(ref);
        imgRef.put(this.imgFile).then((snapshot) => {
          console.log('snapshot ', snapshot);
          storage.ref(ref).getDownloadURL().then((url) => {
            db.collection('items').doc(this.$route.params.item_id).set({

              imgUrl: url, // datastore linki gelecek buraya
              itemCost: this.form.itemCost || item.itemCost,
              itemName: this.form.itemName || item.itemName,
            }).then(this.goBack())
              .catch((err) => {
                console.error('err: ', err);
              });
          });
        });
      } else {
        db.collection('items').doc(this.$route.params.item_id).set({
          itemCost: this.form.itemCost || this.item.itemCost,
          itemName: this.form.itemName || this.item.itemName,
          imgUrl: this.item.imgUrl
        }).then(this.goBack())
          .catch((err) => {
            console.error('err: ', err);
          });
      }
    },
  },
  created() {
    {
      const itemId = this.$route.params.item_id;
      if (itemId != null) {
        db.collection('items').doc(itemId).get()
          .then((doc) => {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              this.item = doc.data();
            }
          })
          .catch((err) => {
            console.log('Error getting document', err);
          });
      }
    }
  },
};
</script>
