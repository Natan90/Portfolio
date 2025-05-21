<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

<!--  <main>-->
<!--&lt;!&ndash;    <TheWelcome />&ndash;&gt;-->
<!--  </main>-->
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  place-items: center;

}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
