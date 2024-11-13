<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/empleados">Empleados</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Carrocería
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><router-link class="dropdown-item" to="/coches">Coches</router-link></li>
            <li><router-link class="dropdown-item" to="/crear">Crear Coche</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>