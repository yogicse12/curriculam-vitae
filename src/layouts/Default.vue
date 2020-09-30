<template>
  <div class="bg-black font-sans text-gray-400 flex flex-col min-h-screen">
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
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
header {
  z-index: 1000;
}
</style>
