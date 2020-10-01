<template>
  <Layout>
    <div class="contact pt-20">
      <div class="container mx-auto px-48">
        <div class="grid gap-16 grid-cols-2">
          <div>
            <h2 class="text-5xl pb-6 text-green-500 font-serif font-semi-bold">Let's work together</h2>
            <p class="text-lg text-gray-600 font-mono leading-8 pb-8">Duis aute irure dolor in reprehenderit in voluptate veldolore eu fugiat nulla pariatur. Excepteur sint occae cupidatat non proident, sunt in culpa qui officia.</p>
            <div class="social-links">
                <a href="" class="pr-8 text-gray-500">Linked In</a>
                <a href="" class="pr-8 text-gray-500">Facebook</a>
                <a href="" class="text-gray-500">Twitter</a>
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