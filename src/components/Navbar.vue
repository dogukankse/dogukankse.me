<template>
  <div class="navbar-container">
    <v-toolbar dark color="cyan">
      <v-toolbar-items>
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/blog">Blog</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-menu :nudge-width="100" data-app>
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on">
            <span>Projects</span>
            <v-icon dark>arrow_drop_down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-btn flat to="/bil3008">Bil 3008</v-btn>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.right {
  right: 0;
  position: fixed;
}
#dropdown-container > div > a > a {
  color: black !important;
}
.router-link-exact-active,
.show {
  color: #2c5364 !important;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.nav-link {
  color: whitesmoke;
}
.navbar-container {
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
}
</style>
