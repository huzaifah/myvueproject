<template>
  <div class="container-fluid">
    <h2 class="bg-primary text-white text-center p-3">
      Products
    </h2>
    <table class="table table-sm table-bordered table-striped text-left">
      <thead>
        <th>No</th><th>Key</th><th>Name</th><th>Price</th>
      </thead>
      <tbody>
        <tr v-for="(p, key, i) in products" v-bind:key="p.name" v-bind:odd="i % 2 == 0">
          <td>{{ i + 1 }}</td>
          <td>{{ key }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.price | currency }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button v-on:click="handleClick" class="btn btn-primary">Press Me</button>
      <button v-for="i in 5" v-on:click="handleClick(i)" class="btn btn-primary m-1">
        {{ i }}
      </button>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: "ProductComponent",
    data: function() {
      return {
        products: {
          "kayak": { name: "Kayak", price: 2.75 },
          2: { name: "Life Jacket", price: 48.95 },
          3: { name: "Soccer Ball", price: 19.50 },
          "4": { name: "Corner Flags", price: 39.95 },
          5: { name: "Stadium", price: 79500 },
          6: { name: "Thinking Cap", price: 16}
        }
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
        Vue.set(this.products, 7, { name: "Running Shoes", price: 100 })
      }
    }
  }
</script>

<style>
  /* #tagged { background-color: coral; } */
  [odd] { background-color: lightblue; }
</style>
