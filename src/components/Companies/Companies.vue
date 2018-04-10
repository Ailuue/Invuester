<template>
  <div class="container-fluid">
    <div class="row">
      <app-company v-for="company in companies" :key="company.id" :company="company"></app-company>
    </div>
  </div>
</template>

<script>
import Company from "./Company";

export default {
  data() {
    return {
      companies: [
        { id: 1, name: "Pete's Pyramid Scheme", investment: 200 },
        { id: 2, name: "Bob's Big Burgers", investment: 1000 },
        { id: 3, name: "Sarah's Silly Software", investment: 10000 },
        { id: 4, name: "Morgan's Magnificient Makeup", investment: 5000 }
      ]
    };
  },
  components: {
    appCompany: Company
  }
};
</script>