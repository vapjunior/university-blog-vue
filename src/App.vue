<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <id id="app">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Blog Unimar</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/">Posts</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/new">Novo Post</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mt-3">
      <RouterView />
    </div>
  </id>
</template>

<script>
  export default {
    name: "app"
  };
</script>

<style>

</style>
