<template>
  <div class="flex flex-col items-center space-y-8">
    <code class="p-4 font-mono text-lg font-black text-purple-400 bg-gray-800 rounded">{{ currentClass }}</code>
    <div class="flex w-full max-w-2xl space-x-1" :class="currentClass">
      <div class="w-1/6 h-24 bg-orange-600 odd:bg-blue-800"></div>
      <div class="w-1/6 h-24 bg-orange-600 odd:bg-blue-800"></div>
      <div class="w-1/6 h-24 bg-orange-600 odd:bg-blue-800"></div>
      <div class="w-1/6 h-24 bg-orange-600 odd:bg-blue-800"></div>
      <div class="w-1/6 h-24 bg-orange-600 odd:bg-blue-800"></div>
      <div class="w-1/6 h-24 bg-orange-600 odd:bg-blue-800"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentClass: String,
  },
};
</script>
