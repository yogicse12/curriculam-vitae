<template>
  <div class="bg-black font-sans text-gray-400 flex flex-col min-h-screen">
    <div v-if="$store.state.loading" id="loader">
      <div class="scroll-static"></div>
    </div>
    <header class="border-t-14 border-green-700">
      <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
        <div>
          <g-link to="/" class="font-serif tracking-wider text-xl">{{ $static.metadata.siteName }}</g-link>
        </div>
        <div class="text-gray-400">
          <g-link class="ml-8" to="/about">About</g-link>
          <g-link class="ml-8" to="/resume/">Resume</g-link>
          <g-link class="ml-8" to="/projects/">Projects</g-link>
          <g-link class="ml-8" to="/contact/">Contact</g-link>
        </div>
      </nav>
    </header>
    <slot/>
    <div class="footer" v-if="$route.fullPath !== '/'">
      <h1 class="text-center text-5xl pb-4 font-serif antialiase text-yellow-500 font-bold">yogicse12@gmail.com</h1>
      <h4 class="text-center font-mono text-gray-500 leading-8 text-lg">Muthayal Nagar, Bangalore <br>Karnataka, 560054</h4>
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
  created() {
    // commit("on") first
    this.$store.commit("on");

    // commit("off") last, after fetch data or more.
    this.$store.commit("off");
  },
};
</script>

<style>
#loader {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  overflow: hidden;
  z-index: 99999999;
  display: flex;
}
#loader::before, #loader::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 50%;
  background: rgba(0, 13, 15, 1);
  top: 0;
  left: 0;
  transition: .4s;
  -webkit-transition: height .4s;
  -moz-transition: height .4s;
  -ms-transition: height .4s;
  -o-transition: height .4s;
}
#loader::after {
  top: auto;
  bottom: 0;
}
.scroll-static {
  position: relative;
  width: 50%;
  height: 1px;
  overflow: hidden;
  margin: auto;
  transition: all .8s;
  -webkit-transition: all .8s;
  -moz-transition: all .8s;
  -ms-transition: all .8s;
  -o-transition: all .8s;
  z-index: 555;
}
.scroll-static::before {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    left: 50%;
    background: #ff5050;
    animation: showLine 700ms ease-in-out 0s forwards;
    -o-animation: showLine 700ms ease-in-out 0s forwards;
    -webkit-animation: showLine 700ms ease-in-out 0s forwards;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
}
.scroll-static::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: -100px;
    top: 0;
    animation: scroll-static 2s cubic-bezier(.86,0,.07,1) infinite;
    -o-animation: scroll-static 2s cubic-bezier(.86,0,.07,1) infinite;
    -webkit-animation: scroll-static 2s cubic-bezier(.86,0,.07,1) infinite;
    animation-delay: 1200ms;
}
.scroll-static.loaded {
    width: 100%;
    opacity: 0;
}
header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  background: #000;
}
.footer {
  padding-bottom: 100px;
}
</style>
