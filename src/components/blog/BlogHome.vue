<script>
import butter from '@/middleware/butter';
import Footer from '../Footer.vue';

export default {
  name: 'blog-home',
  components: {
    Footer,
  },
  data() {
    return {
      page_title: 'Blog',
      posts: [],
    };
  },
  methods: {
    getPosts() {
      butter.post.list({
        page: 1,
        page_size: 10,
      }).then((res) => {
        this.posts = res.data.data;
      });
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<template>
  <div id="blog-home">
    <v-layout>
      <v-flex xs12 sm4>
        <div class="card-container" v-for="(post,index) in posts" :key="post.slug + '_' + index">
          <router-link :to="'/blog/' + post.slug">
            <v-card>
              <v-img :src="post.featured_image" aspect-ratio="2"></v-img>
              <v-card-title primary-title>
                <div>
                  <div class="headline mb-4 card-title">{{post.title}}</div>
                  <div class="summary">{{ post.summary }}</div>
                </div>
              </v-card-title>
            </v-card>
          </router-link>
        </div>
      </v-flex>
    </v-layout>

    <Footer/>
  </div>
</template>


<style scoped>
.headline:hover {
  text-decoration: underline;
}
a:-webkit-any-link {
  text-decoration: none !important;
}
div.card-container {
  margin: 16px;
}
</style>
