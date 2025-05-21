<script setup>
import Terminal from "@/components/Terminal.vue";
import MenuItems from "@/components/menuItems.vue";

defineProps({
  msg: {
    type: String,
    required: true,
  },
})


</script>

<template>
<main>
  <Terminal>

  </Terminal>
  <menuItems>

  </menuItems>
</main>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  font-family: monospace;
  border-right: 2px solid black;
  white-space: nowrap;
  overflow: hidden;
  animation: blink 0.7s steps(1) infinite;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
