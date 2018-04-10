<template>
  <div class="container">
    <app-header></app-header>
    <app-companies></app-companies>
      <div class="row">
        <div class="col-md-12">
          
    <router-view></router-view>
        </div>
      </div>
    
  </div>
</template>

<script>
import Header from "./components/Header";
import Companies from "./components/Companies/Companies";

export default {
  components: {
    appHeader: Header,
    appCompanies: Companies
  }
};
</script>

<style>
body {
  padding: 30px;
}
</style>
