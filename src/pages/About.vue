<template>
  <Layout>
    <div class="about-me">
      <div class="container mx-auto px-40">
        <!-- Biography -->
        <div class="grid gap-16 grid-cols-3">
          <div class="col-span-1">
            <g-image src="~/assets/images/about.jpg" class="rounded-full"/>
            <div class="flex justify-center pt-8 font-serif">
              <h3 class="text-2xl">Yogendra Yadav</h3>
            </div>
          </div>
          <div class="col-span-2">
            <h2 class="text-4xl pb-6 font-serif text-red-500 font-black">Biography</h2>
            <p class="font-mono tracking-wide leading-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto perferendis molestiae praesentium quos natus doloremque obcaecati dolorem, molestias nam nisi vel non porro minima dolorum nulla blanditiis provident accusamus.</p>
            <div class="pt-8">
              <h3 class="text-xl pb-6 text-green-700 font-mono font-semibold">Personal Info</h3>
              <div class="grid gap-16 grid-cols-2">
                <div>
                  <p class="text-gray-600 font-mono leading-8"><span class="text-white">Name: </span>Yogendra Yadav</p>
                  <p class="text-gray-600 font-mono leading-8"><span class="text-white">DOB: </span>15 December, 1984</p>
                  <p class="text-gray-600 font-mono leading-8"><span class="text-white">Address: </span>Bangalore</p>
                </div>
                <div>
                  <p class="text-gray-600 font-mono leading-8"><span class="text-white">Phone: </span> +91 99010 65075</p>
                  <p class="text-gray-600 font-mono leading-8"><span class="text-white">Email: </span>yogicse12@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <!-- what I do -->
        <h2 class="text-4xl tracking-wide pb-10 font-serif text-blue-500 font-black">Education</h2>
        <div class="pb-8">
          <h3 class="text-2xl pb-2 font-sans">Biju Patnaik University of Technology (BPUT)</h3>
          <h5 class="text-lg text-gray-600 font-mono">Bachelor of Technology, Computer Science & Engineering</h5>
          <p class="text-lg text-gray-600 font-mono">2005 - 2009</p>
        </div>
        <div class="pb-8">
          <h3 class="text-2xl pb-2 font-sans">Pitt's Modern School</h3>
          <h5 class="text-lg text-gray-600 font-mono">10 + 2 (C.B.S.E Board)</h5>
          <p class="text-lg text-gray-600 font-mono">2001 - 2003</p>
        </div>
        <div>
          <h3 class="text-2xl pb-2 font-sans">Pitt's Modern School</h3>
          <h5 class="text-lg text-gray-600 font-mono">10 (C.B.S.E Board)</h5>
          <p class="text-lg text-gray-600 font-mono">2001</p>
        </div>
        <div class="divider"></div>
        <div class="footer">
          <h1 class="text-center text-5xl pb-4 font-serif antialiase text-yellow-500 font-bold">yogicse12@gmail.com</h1>
          <h4 class="text-center font-mono text-gray-500 leading-8 text-lg">Muthayal Nagar, Bangalore <br>Karnataka, 560054</h4>
        </div>
      </div>
    </div>
    <!-- <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p> -->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style>
  .about-me {
    padding: 100px 0;
  }
  .about-me .divider {
    border-color: transparent;
    margin: 100px 0;
    position: relative;
    height: 1px;
  }
  .about-me .divider::after {
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
