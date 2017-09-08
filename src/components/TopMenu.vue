<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <div class="navbar-burger burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/" exact>Home</router-link>
        <router-link class="navbar-item" to="/about" exact>About</router-link>
      </div>
      <div class="navbar-end">
        <router-link class="navbar-item" to="/login" exact>Login</router-link>
      </div>
    </div>
  </nav>
</template>
