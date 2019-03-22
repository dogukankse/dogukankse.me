<script>
import butter from '@/middleware/butter';

export default {
  name: 'blog-post',
  data() {
    return {
      post: {},
    };
  },
  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug)
        .then((res) => {
          this.post = res.data;
        }).catch((res) => {
          console.log(res);
        });
    },
  },
  created() {
    this.getPost();
  },
};
</script>

<template>
  <div id="blog-post">
    <div class="post-title">{{ post.data.title }}</div>
    <v-subheader class="writer">
      {{ post.data.author.first_name }}
      {{ post.data.author.last_name }}
    </v-subheader>
    <v-divider/>

    <div class="post-body" v-html="post.data.body"></div>

    <router-link
      v-if="post.meta.previous_post"
      :to="/blog/ + post.meta.previous_post.slug"
      class="button"
    >{{ post.meta.previous_post.title }}</router-link>
    <router-link
      v-if="post.meta.next_post"
      :to="/blog/ + post.meta.next_post.slug"
      class="button"
    >{{ post.meta.next_post.title }}</router-link>
  </div>
</template>

<style scoped>
.post-body {
  margin: 16px;
}
h4 {
  margin: 8px;
}
.post-title {
  margin-top: 2rem;
  margin-left: 2rem;
  font-size: 36px;
}
.writer {
  margin-left: 1rem;
}
</style>
