<script setup>
import { RouterLink, RouterView } from "vue-router";

// var joueur = {
//   nom: 'Joueur1',
//   age: 10,
// };

// // DESTRUCTURATION : EXTRACTION D'ATTRIBUT
// var { nom } = joueur;
// console.log(nom)

// // CLONE + AJOUT D'ATTRIBUT
// var joueur2 = {...joueur, sexe: "homme"}
// console.log(joueur2)

// // CLONE + SUPPRESSION D'ATTRIBUE
// var { ...joueur3 } = joueur2
// console.log(joueur3)
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Register</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/login">Dashboard</RouterLink>
      <RouterLink to="/login">Logout</RouterLink>
     

    </nav>
  </header>

  <RouterView />
</template>

<style></style>
