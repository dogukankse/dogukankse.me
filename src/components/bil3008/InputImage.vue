<template>
  <div>
    <v-content>
      <v-container fluid>
        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
          <img :src="imgUrl" height="150" v-if="propImgUrl || imgUrl">
          <br>
          <v-btn color="blue-grey" class="white--text" @click="pickFile">
            <v-icon dark>attach_file</v-icon>Select Image
          </v-btn>
          <input
            type="file"
            style="display: none"
            ref="image"
            accept="image/*"
            @change="onFilePicked"
          >
        </v-flex>
      </v-container>
    </v-content>
  </div>
</template>


<script>
export default {
  data: () => ({
    title: 'Image Upload',
    dialog: false,
    imgName: '',
    imgUrl: '',
    imgFile: '',
  }),
  props: {
    propImgUrl: String,
  },
  methods: {
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const { files } = e.target;
      if (files[0] !== undefined) {
        this.imgName = files[0].name;
        if (this.imgName.lastIndexOf('.') <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener('load', () => {
          this.imgUrl = fr.result;
          // eslint-disable-next-line
          this.imgFile = files[0];
          // this is an image file that can be sent to server...
          this.$emit('childToParent', this.imgFile);
        });
      } else {
        this.imgName = '';
        this.imgFile = '';
        this.imgUrl = '';
      }
    },
    uploadServer() {

    },
  },
};
</script>
