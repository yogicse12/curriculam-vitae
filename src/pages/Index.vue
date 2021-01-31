<template>
  <Layout>
    <div class="main-section mt-24 md:mt-0">
      <div class="px-4 container mx-auto h-1/2 lg:h-full flex lg:px-24">
          <div class="flex items-center grid gap-8 lg:grid-cols-3 w-full">
            <div class="lg:col-span-2">
              <h1 class="text-6xl pb-4 font-serif antialiased">Yogendra Yadav</h1>
              <p class="pb-8 text-gray-600 font-mono">A Full Stack Web Developer and Software Engineer based in Bangalore.</p>
              <button class="px-4 py-2 bg-white text-black" @click="goToResume">Get Resume</button>
            </div>
            <div class="lg:col-span-1">
              <h1 class="text-2xl pb-6 text-green-700 font-mono">Let's work together</h1>
              <p class="font-mono text-gray-600 pb-2">I'm available at</p>
              <p class="font-mono text-red-800 pb-2"><a href="mailto:yogicse12@gmail.com">yogicse12@gmail.com</a></p>
              <p class="font-mono text text-gray-600 tracking-wider pb-6"><a href="tel:9901065075">(+91) 99010 65075</a></p>
              <div class="social-links">
                <a href="https://www.linkedin.com/in/yogendra-yadav-07b33b19/" target="_blank"  class="pr-8 text-gray-500">Linked In</a>
                <a href="https://github.com/yogicse12" target="_blank" class="pr-8 text-gray-500">Github</a>
                <a href="https://twitter.com/yogendrayadav" target="_blank" class="text-gray-500">Twitter</a>
              </div>
            </div>
          </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  methods: {
    goToResume() {
      window.open("./yogendra_yadav_resume.pdf","_blank")
    }
  }
}
</script>

<style>
.main-section {
  position: absolute;
  padding-top: 72px;
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 600px) {
  .main-section {
    text-align: center;
    height: auto;
  }
}
</style>
