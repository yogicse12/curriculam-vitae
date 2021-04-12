<template>
  <div class="bg-black font-sans text-gray-400 flex flex-col min-h-screen">
    <div v-if="$store.state.loading" id="loader">
      <div class="scroll-static"></div>
    </div>
    <header class="px-5">
      <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
        <div>
          <g-link to="/" class="font-serif tracking-wider text-xl">{{ $static.metadata.siteName }}</g-link>
        </div>
        <div class="text-gray-400 hidden md:block">
          <g-link class="ml-8" to="/about">About</g-link>
          <g-link class="ml-8" to="/resume/">Resume</g-link>
          <g-link class="ml-8" to="/projects/">Projects</g-link>
          <g-link class="ml-8" to="/contact/">Contact</g-link>
        </div>
        <div class="block md:hidden menu" @click="toggleMenu">
          <img src="@/assets/images/menu.png" alt="">
        </div>
      </nav>
      <div class="text-gray-400 menu-mobile" :class="{'show-menu': showMenu}">
        <g-link to="/about">About</g-link>
        <g-link to="/resume/">Resume</g-link>
        <g-link to="/projects/">Projects</g-link>
        <g-link to="/contact/">Contact</g-link>
      </div>
    </header>
    <slot/>
    <div class="footer" v-if="$route.fullPath !== '/'">
      <h1 class="text-center text-xl md:text-5xl pb-4 font-serif antialiase text-yellow-500 font-bold">yogicse12@gmail.com</h1>
      <h4 class="text-center font-mono text-gray-500 leading-8 text-lg">Bangalore, Karnataka, 560054</h4>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  watch: {
    '$route' () {
        this.showMenu = false;
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  },
  created() {
    // commit("on") first
    this.$store.commit("on");

    // commit("off") last, after fetch data or more.
    this.$store.commit("off");
  },
};
</script>

<style>

header {
  position: fixed;
  width: 100% ;
  z-index: 1000;
  background: #000;
}
.menu img {
    width: 28px;
    opacity: 60%;
}
.menu-mobile {
  padding: 0 24px 8px;
  display: none;
  transition: top 0.7s cubic-bezier(0.18, 0.32, 0.17, 0.99);
}
.show-menu {
  display: block;
}
.menu-mobile a {
    display: block;
    padding: 8px 0;
}
.footer {
  padding-bottom: 100px;
}
</style>
