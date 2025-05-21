<script setup lang="ts">

</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/projets">Projets</router-link></li>
      <li><a href="news.asp">Compétences</a></li>
      <li><a href="contact.asp">Contact</a></li>
      <li><a href="about.asp">À propos</a></li>
    </ul>
  </nav>

</template>

<style scoped>
nav {
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  padding: 1em;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1em;
}
nav ul li {
  display: inline;
}
nav ul li a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 2px;
  transition: color 0.3s;
}


</style>