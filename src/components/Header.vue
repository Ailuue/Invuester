<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Invuester</router-link>
  

  <div class="collapse navbar-collapse" >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/portfolio"  activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
        
      </li>
      <li class="nav-item">
        <router-link to="/companies"  activeClass="active" tag="li"><a class="nav-link">Companies</a></router-link>
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link">End Day</a></li>
      <li class="nav-item dropdown ">
        <a class="nav-link dropdown-toggle" 
        href="#" 
        id="navbarDropdown" 
        role="button" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false">
          Save and Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
          
        </div>
      </li>
      </ul>
  </div>
</nav>
</template>