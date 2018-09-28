<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      
      <b-navbar-brand href="#" class="d-none">Munchies</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/">Munchies</b-nav-item>
          <b-nav-item href="/contact">Contact</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <nuxt/>
    <footer>
      @2018 VUEVUEVUE PROD
    </footer>
  </div>
</template>

<style>
  .navbar{
    padding: 0;
    background-color: #f39c12 !important;
  }

  .navbar .navbar-nav{
    width: 100%;
    align-content: center;
    justify-content: center;
  }

  .navbar .navbar-nav .nav-item .nav-link{
    color: #fff;
    font-size: 16px;
    padding: 18px 10px;
    transition: all 0.3s ease;
  }

  .navbar .navbar-nav .nav-item .nav-link:hover, .navbar .navbar-nav .nav-item .nav-link:focus{
    color: #333;
    text-decoration: none;
  }

  .navbar .navbar-nav .nav-item:nth-child(2) .nav-link{
    font-size: 32px;
    font-weight: 800;
    padding: 5px 15px;
    font-family: 'Pacifico', cursive;
  }

  footer{
    background-color: #f89406;
    padding: 15px 0;
    text-align: center;
    color: #fff;
  }
</style>
