<template>
  <Layout>
      <div class="project">
        <div class="container mx-auto px-6 md:px-40">
          <div class="projects">
            <h2 class="text-4xl pb-16 font-serif text-red-500 font-black">Projects</h2>
            <div class="project1">
              <h4 class="text-xl pb-2 text-green-700 font-mono font-semibold">Flext - Management Portal and Operative App</h4>
              <h5 class="text-xl pb-6 text-gray-300 font-mono">Flext app is management portal responsible for managing Real estate construction projects</h5>
              <p class="text-lg text-gray-600 font-mono pb-6"><span class="text-gray-200">Technologies Used:</span> Node.js, Express.js, MongoDB, Vue.js, HTML5, CSS3, SASS, Bootstrap</p>
              <p class="text-lg text-gray-600 font-mono pb-6"><span class="text-gray-200">Role: </span> Developed various components and features of assigned modules. Creating Schema models, REST api’s for backend using Node.js, Express and MongoDB. Integration of Frontend with the backend. Interaction with Project Manager, Designed and clients for successful product delivery.</p>
            </div>
            <div class="divider"></div>
            <div class="project2">
              <h4 class="text-xl pb-2 text-green-700 font-mono font-semibold">LocalTVAds - Website and Content Management Portal</h4>
              <h5 class="text-xl pb-6 text-gray-300 font-mono">LocalTVAds is an application which allows small business owners to create and broadcast a TV ad to their local TV channel.</h5>
              <p class="text-lg text-gray-600 font-mono pb-6"><span class="text-gray-200">Technologies Used:</span> Node.js, Express.js, MongoDB, Vue.js, HTML5, CSS3, SASS, Bootstrap</p>
              <p class="text-lg text-gray-600 font-mono pb-6"><span class="text-gray-200">Role: </span> Associated with design and development of various components and features and code refactoring for the website and the web portal. Involved in bug-fixing, end to end testing and deployment of the project.</p>
            </div>
            <div class="divider"></div>
            <div class="project3">
              <h4 class="text-xl pb-2 text-green-700 font-mono font-semibold">LPHCA - Website and Web Portal</h4>
              <h5 class="text-xl pb-6 text-gray-300 font-mono">LPHCA is Membership-based Trade Association which provides licence to Private Hire vehicle and Taxi owners.</h5>
              <p class="text-lg text-gray-600 font-mono pb-6"><span class="text-gray-200">Technologies Used: </span>Node.js, Express.js, MongoDB, Angular.js, HTML5, CSS3, LESS, Bootstrap</p>
              <p class="text-lg text-gray-600 font-mono pb-6"><span class="text-gray-200">Role: </span>Design and Developed and involved in end to end testing of the entire website. Involved in maintenance, bug fixing, testing and deployment of the Web Portal. Interaction with clients and finalising the requirements and delivering the features.</p>
            </div>
            <div class="divider"></div>
            <div class="project4">
              <h4 class="text-xl pb-2 text-green-700 font-mono font-semibold">Page9 - Content Management Application</h4>
              <h5 class="text-xl pb-6 text-gray-300 font-mono">Page9 is a content management system which allows users to create, edit, and delete content from a website. It offers an interface that does not require coding skills or other technical knowledge. Content managers and authors can make changes without the help of a developer.</h5>
              <p class="text-lg text-gray-600 font-mono pb-6"><span class="text-gray-200">Technologies Used: </span>Node.js, Express.js, MongoDB, Angular.js, HTML5, CSS3, LESS, Bootstrap</p>
              <p class="text-lg text-gray-600 font-mono pb-6"><span class="text-gray-200">Role: </span>Involved in Design, Development and end to end testing of the entire application. Owna the project and completely involved in maintenance, bug fixing, testing and deployment of the Web Portal. Fully associated with the website development which has integration with page9.</p>
            </div>
            <div class="divider"></div>
            <div class="project5">
              <h4 class="text-xl pb-2 text-green-700 font-mono font-semibold">Westlaw and WestlawNext</h4>
              <h5 class="text-xl pb-6 text-gray-300 font-mono">Westlaw and WestlawNext is one of the primary online legal research services for lawyers and legal professionals in the United States. In addition, it provides proprietary database services. Information resources on Westlaw include more than 50,000 databases of case law, state and federal statutes, administrative codes, newspaper and magazine articles, public records, law journals, law reviews, treatises, legal forms and other information resources.</h5>
              <p class="text-lg text-gray-600 font-mono pb-6"><span class="text-gray-200">Role: </span>System Engineer (DevOps) - Application maintenance for QA and Production environment for Thomson Reuters Leading Legal products – Westlaw and WestlawNext. Involved in managing ITIL processes – Change Management, Incident Management using HP Service Manager Tool and implementing QA and Production deployment using UNIX, Windows, Mainframes, IBM Websphere, Jenkins tools, Splunk.</p>
            </div>
            <div class="divider"></div>
          </div>
        </div>
      </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Projects'
  }
}
</script>

<style>
  .project {
    padding-top: 100px;
  }
  .project .divider {
    border-color: transparent;
    margin: 100px 0;
    position: relative;
    height: 1px;
  }
  .project .divider::after {
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