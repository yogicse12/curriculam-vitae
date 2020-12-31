<template>
  <Layout>
    <div class="contact">
      <div class="container mx-auto px-48">
        <div class="grid gap-16 grid-cols-2">
          <div>
            <h2 class="text-5xl pb-6 text-green-500 font-serif font-semi-bold">Let's work together</h2>
            <p class="text-lg text-gray-600 font-mono leading-8 pb-8">Duis aute irure dolor in reprehenderit in voluptate veldolore eu fugiat nulla pariatur. Excepteur sint occae cupidatat non proident, sunt in culpa qui officia.</p>
            <div class="social-links">
                <a href="https://www.linkedin.com/in/yogendra-yadav-07b33b19/" target="_blank" class="pr-8 text-gray-500">Linked In</a>
                <a href="https://github.com/yogicse12" target="_blank" class="pr-8 text-gray-500">Github</a>
                <a href="https://twitter.com/yogendrayadav" target="_blank" class="text-gray-500">Twitter</a>
              </div>
          </div>
          <div>
            <form action="https://usebasin.com/f/a90a4d26ae95" method="POST">
              <input type="text" name="name" placeholder="Name" class="w-full bg-transparent border-gray-400 mb-8">
              <input type="email" name="email" placeholder="Email" class="w-full bg-transparent border-gray-400 mb-8">
              <textarea name="meassage" rows="5" placeholder="Message" class="w-full bg-transparent border-gray-400 mb-8 resize-none"></textarea>
              <button class="px-4 py-2 w-full bg-white text-black" type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div class="mt-24">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.997031096486!2d77.54539151541182!3d13.03586071699063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d43aa7b8ea1%3A0x7e196986e9e108f8!2s15th%20C%20Cross%20Rd%2C%20Muthyala%20Nagar%2C%20Mathikere%2C%20Bengaluru%2C%20Karnataka%20560054!5e0!3m2!1sen!2sin!4v1601562072620!5m2!1sen!2sin" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>

<style>
.contact {
  padding: 200px 0 100px 0;
}
form input {
  border: 1px solid #444;
  height: 45px;
  padding: 8px 20px;
}

form textarea {
  border: 1px solid #444;
  padding: 8px 20px;
}

</style>