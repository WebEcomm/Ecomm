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

// a ajoueter<RouterLink to="/logout">Logout</RouterLink>
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
      
     

    </nav>
  </header>

  <RouterView />
</template>

<style></style>
