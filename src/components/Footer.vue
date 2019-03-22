<template>
  <div class="footer-container">
    <footer class="footer mt-auto py-3">
      <div class="content">
        <div class="social-container">
          <a class="social" target="_blank" href="http://twitter.com/DogukanKse4">
            <font-awesome-icon :icon="['fab', 'twitter']"/>
          </a>
          <a class="social" target="_blank" href="http://github.com/dogukankse">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
          <a class="social" target="_blank" href="http://linkedin.com/in/dogukankse/">
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
          </a>
        </div>
        <div class="buttercms-container">
          <span>Powered by</span>
          <a target="_blank" href="http://buttercms.com/">
            <img class="buttercms" src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH">
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
span {
  font-size: 13px;
  color: darkgrey;
}
.footer {
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 35px;
  border-top: 1px solid #ddd;
  text-align: center;
  padding-bottom: 20px;
}
.buttercms {
  width: 100px;
  height: 25px;
}
.social-container {
  margin-bottom: 8px;
  margin-top: 8px;
}
a.social:hover {
  opacity: 1;
}
a.social {
  font-size: 18px;
  margin: 0 3px;
  color: #fff;
  border: 1px solid;
  opacity: 0.75;
  border-radius: 50%;
  width: 36px;
  display: inline-block;
  height: 36px;
  text-align: center;
  background-color: #c5c9d2;
}
.svg-inline--fa {
  margin-top: 9px;
}
div.content {
  display: table;
  margin: 0 auto;
}
img {
  margin-bottom: -7px;
  margin-left: 3px;
}
</style>
