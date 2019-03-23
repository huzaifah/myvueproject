<template>
  <div class="container-fluid">
    <h2 class="bg-primary text-white text-center p-3">
      Products
    </h2>
    <table class="table table-sm table-bordered table-striped text-left">
      <thead>
        <th>No</th><th>Name</th><th>Price</th>
      </thead>
      <tbody>
        <tr v-for="(p, i) in products" v-bind:key="p.name" v-bind:odd="i % 2 == 0">
          <td>{{ i + 1 }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.price | currency }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button v-on:click="handleClick" class="btn btn-primary">Press Me</button>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "ProductComponent",
    data: function() {
      return {
        products: [
          { name: "Kayak", price: 2.75 },
          { name: "Life Jacket", price: 48.95 },
          { name: "Soccer Ball", price: 19.50 },
          { name: "Corner Flags", price: 39.95 },
          { name: "Stadium", price: 79500 },
          { name: "Thinking Cap", price: 16}
        ]
      }
    },
    filters: {
      currency(value) {
        return new Intl.NumberFormat("en-US",
          { style: "currency", currency: "USD" }).format(value);
      },
    },
    methods: {
      handleClick() {
        //this.products.push(this.products.shift());
        //this.products = this.products.filter(p => p.price > 20);
        Vue.set(this.products, 1, { name: "Running Shoes", price: 100 })
      }
    }
  }
</script>

<style>
  /* #tagged { background-color: coral; } */
  [odd] { background-color: lightblue; }
</style>
