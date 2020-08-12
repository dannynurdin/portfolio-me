<template>
<div class="mt-6 px-2 md:px-20 lg:px-40 font-mono">
  <!-- Personal Informations -->
  <div class="mb-3">
    <h3 class="pt-4 underline text-lg">Personal Informations</h3>
    <div class="flex flex-wrap justify-end py-1">
      <!-- logo -->
      <div class="w-full md:w-1/4 lg:w-1/5 rounded">
        <div class="mx-auto w-full h-auto my-auto"><fa-icon :icon="['fas', 'users']" size="8x"/></div>
        <!-- <img class="mx-auto w-full h-auto my-auto" src="@/assets/logo.png" alt="logo"> -->
      </div>
      <!-- name -->
      <div class="w-full md:w-2/4 lg:w-3/5 text-left py-2 px-4">
        <div class=" flex-col justify-between">
            <div class="text-md md:text-lg font-semibold antialiased px-0 py-1 my-2">
              <div class="inline-block w-6 h-6 mr-2 ml-2"><fa-icon  :icon="['fas', 'user']" size="1x"/></div>
              <span class="">Danny Fachrul Aliansyah Nurdin</span>
            </div>
            <div class="text-md md:text-lg font-semibold antialiased px-0 py-1 my-2">
              <div class="inline-block w-6 h-6 mr-2 ml-2"><fa-icon  :icon="['fas', 'mail-bulk']" size="1x"/></div>
              <span class="">dannyfachrul@gmail.com</span>
            </div>
            <div class="text-md md:text-lg font-semibold antialiased px-0 py-1 my-2">
              <div class="inline-block w-6 h-6 mr-2 ml-2"><fa-icon  :icon="['fab', 'github']" size="1x"/></div>
              <span class="">Danny Nurdin</span>
            </div>
            <div class="text-md md:text-lg font-semibold antialiased px-0 py-1 my-2">
              <div class="inline-block w-6 h-6 mr-2 ml-2"><fa-icon  :icon="['fab', 'twitter']" size="1x"/></div>
              <span class="">@dannyfachrul </span>
            </div>
          </div>
      </div>
    </div>
  </div>
  <!-- skills -->
  <div class="mb-3 md:mt-6">
    <span class="underline text-lg">What i like?</span>
    <!-- skill logo's -->
    <div class="">
      <div class="flex flex-wrap justify-center">
        <div class="w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"><fa-icon :icon="['fas', 'coffee']" size="3x"/></div>
        <div class="w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"><fa-icon  :icon="['fab', 'python']" size="3x"/></div>
        <div class="w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"><fa-icon  :icon="['fab', 'css3']" size="3x"/></div>
        <div class="w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"><fa-icon  :icon="['fab', 'html5']" size="3x"/></div>
        <div class="w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"><fa-icon  :icon="['fab', 'git']" size="3x"/></div>
        <div class="w-1/3 md:w-1/6 py-2 transition duration-200 ease-in-out transform hover:-traslate-y-1 hover:scale-150"><fa-icon  :icon="['fab', 'js']" size="3x"/></div>
      </div>
    </div>
  </div>
  <!-- framework -->
  <!-- <div>
    <span>Framework</span>
    <div class="flex">
      <div class=" w-1/3 border border-black ">
        <span>Python</span>
        <div class=" border-t-4">
          <div>Django</div>
          <div>Rest Framework</div>
          <div>Keras API</div>
        </div>
      </div>
      <div class=" w-1/3 border border-black">
        <span>CSS</span>
        <div class=" border-t-4">
          <div>Tailwind CSS</div>
          <div>Bootstrap</div>
          <div>More</div>
        </div>
      </div>
      <div class=" w-1/3 border border-black">
        <span>JavaScript</span>
        <div class=" border-t-4">
          <div>Vue JS</div>
          <div>More</div>
          <div>More</div>
        </div>
      </div>
    </div>
  </div> -->
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>
