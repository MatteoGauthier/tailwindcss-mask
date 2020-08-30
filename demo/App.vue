<template>
  <main role="main" class="container mx-auto mt-64 space-y-24">
    <Demo v-for="item in demos" :key="item" :currentClass="item"/>
  </main>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
	},
	data() {
		return {
			demos: ["mask-image-simple", "mask-image-simple-invert"],
		}
	},
};
</script>
