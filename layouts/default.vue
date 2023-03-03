<template>
    <div class="relative bg-white">
      <div
        id="header"
        class="sticky top-0 z-10 "
        :class="{
          'bg-transparent':isTransparent,
          'bg-white':!isTransparent
        }"
      >
        <div class="lg:mx-auto lg:max-w-7xl md:max-w-3xl sticky z-20 px-2 ">
          <div class="flex items-center justify-between border-b border-gray-100 py-6 md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span class="sr-only">Silvester</span>
                <img class="h-8 w-auto sm:h-10 rounded-full" src="/photo_silvester.jpg" alt="logo silvester">
              </a>
            </div>
            <div>
              <div class="items-center justify-end lg:flex md:flex-1 lg:w-0 space-x-4">
                <a active-class="text-[#F08519]" to="/" class="whitespace-nowrap text-base font-medium hover:text-[#F08519]">
                 Silvester Wali
                </a>
              </div>
            </div>
          </div>
        </div>
  
        <div>
          <NuxtLoadingIndicator />
          <slot />
        </div>

      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const isTransparent = ref<Boolean>(true)
  
  onMounted(() => {
    window.addEventListener('scroll', function () {
      const header = document.querySelector('#header') as HTMLElement
      if (window.pageYOffset > header.offsetHeight && window.pageYOffset > 10) {
        isTransparent.value = false
      } else {
        isTransparent.value = true
      }
    })
  })
  
  </script>