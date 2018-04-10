<template>
  <div class="col-md-6">
    <div class="card">
      <h3 class="card-header">
        {{company.name}}
        <br>
        <small>Investment Request: {{company.investment}}</small>
        </h3> 
        <div class="card-body">
          <div class="pull-left">
            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity"/>
          </div>
          <div class="pull-right">
            <button class="btn btn-success" @click="invest">Buy</button>
          </div>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ["company"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    invest() {
      const order = {
        companyId: this.company.id,
        companyInvestment: this.company.investment,
        quantity: this.quantity
      };
      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>