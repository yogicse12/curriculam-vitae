<template>
  <Layout>
      <div class="resume">
        <div class="container mx-auto px-4 mdpx-40">
          <h2 class="text-4xl pb-16 font-serif text-red-500 font-black">Profile</h2>
          <div class="0bjective">
            <h3 class="text-3xl pb-8 font-sans">Objective</h3>
            <p class="text-lg text-gray-600 font-mono">Dedicated and efficient full stack Software Developer with 10+ years of total IT experience building scalable web applications and responsive websites.</p>
          </div>
          <div class="divider"></div>
          <div class="experience">
            <h3 class="text-3xl pb-8 font-sans">Experience</h3>
            <div class="pb-6">
              <h4 class="text-xl pb-2 text-green-700 font-mono font-semibold">May 2015 – Present</h4>
              <h5 class="text-xl pb-6 text-gray-300 font-mono">Software Developer and Architect | E9ine | Bangalore, Karnataka</h5>
              <ul class="list-disc list-inside">
                <li class="text-lg mb-3 text-gray-600 font-mono">Worked with established team of developers and interact with product manager, marketing team and designers</li>
                <li class="text-lg mb-3 text-gray-600 font-mono">Provided technical advice and assist in solving programming problems</li>
                <li class="text-lg mb-3 text-gray-600 font-mono">Knowledge of modern web development framework and tools</li>
                <li class="text-lg mb-3 text-gray-600 font-mono">Expertise in Web development using HTML, CSS, LESS/SASS, JavaScript/jQuery and Frontend JavaScript frameworks (Vue.js and Angular.js)</li>
                <li class="text-lg mb-3 text-gray-600 font-mono">Responsible for API design and development of RESTful services for enterprise products in the business.</li>
                <li class="text-lg mb-3 text-gray-600 font-mono">Work closely with each client to fully understand their requirements and deliver accordingly.</li>
              </ul>
            </div>
            <div class="">
              <h4 class="text-xl pb-2 text-green-700 font-mono font-semibold">December 2010 – April 2015</h4>
              <h5 class="text-xl pb-6 text-gray-300 font-mono">System Engineer | Thomson Reuters | Bangalore, Karnataka</h5>
              <ul class="list-disc list-inside">
                <li class="text-lg mb-3 text-gray-600 font-mono">Expertise in Application Support (DevOps) in QA and Production environment for leading legal products – Westlaw and WestlawNext.</li>
                <li class="text-lg mb-3 text-gray-600 font-mono">Managing ITIL processes like Change Management, Incident Management using advanced tools and applications like HP Service Manager.</li>
                <li class="text-lg mb-3 text-gray-600 font-mono">Implementing testing and deployment in QA and Production environments.</li>
              </ul>
            </div>
          </div>
          <div class="divider"></div>
          <div class="skills">
            <h3 class="text-3xl pb-8 font-sans">Key Skills</h3>
            <ul class="list-disc list-inside">
                <li class="text-lg mb-3 text-gray-600 font-mono">HTML, CSS, JavaScript</li>
                <li class="text-lg mb-3 text-gray-600 font-mono">Vue.js, Angular.js</li>
                <li class="text-lg mb-3 text-gray-600 font-mono">SASS, LESS, Bootstrap, Tailwind</li>
                <li class="text-lg mb-3 text-gray-600 font-mono">Node.js, Express.js, MongoDB</li>
                <li class="text-lg mb-3 text-gray-600 font-mono">GIT, Gulp, Webpack</li>
              </ul>
          </div>
          <div class="divider"></div>
        </div>
      </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Resume'
  }
}
</script>

<style lang="css" scoped>
  .resume {
    padding-top: 100px;
  }
  .resume .divider {
    border-color: transparent;
    margin: 100px 0;
    position: relative;
    height: 1px;
  }
  .resume .divider::after {
    position: absolute;
    content: "";
    height: 4px;
    width: 100%;
    top: -4px;
    left: 0;
    z-index: 1;
    background-image: url('../assets/images/wavy.png');
    background-size: 110px;
    opacity: .15;
  }
</style>