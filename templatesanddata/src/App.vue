<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white text-center m-2 p-3">
      <!-- <h3>Product : {{ name | reverse | capitalize }}</h3>
      <h3>Price: {{ lowTotalPrice | currency(3) }} (Low Rate)</h3>
      <h3>Price: {{ highTotalPrice | currency(3) }} (High Rate)</h3> -->
      <h3>Product: <span v-text="name"></span></h3>
      <!-- <ul class="text-left">
        <li>List item</li>
        <template v-if="showElements">
          <li>{{ name }}</li>
          <li>{{ price }}</li>
        </template>
        <li>Other list item</li>
      </ul> -->
      <div class="bg-primary text-white m-2 p-3">
        <!-- <h3 v-if="showElements">Product: {{ name }}</h3>
        <h3 v-else>Price: {{ price }}</h3> -->
        <!-- <h3 v-show="counter % 2 == 0">Product: {{ name }}</h3>
        <h3 v-show="counter % 2 != 0">Price: {{ price }}</h3> -->
        <!-- <h3 v-bind:style="elemStyles" class="display-4">Product: {{name}}</h3>
        <h3 v-bind:data-size="size" class="display-4">Product: {{name}}</h3> -->
        <!-- <h3 v-bind="attrValues">Product: {{name}}</h3> -->
        <h3 v-bind:text-content.prop="textContent"></h3>
      </div>
      <span v-html="fragment"></span>
      <h4 v-if="showElements">{{ price }}</h4>
    </div>
    <button v-on:click="handleClick" class="btn btn-primary">Press Me</button>
    <button v-on:click="handleOtherClick" class="btn btn-primary">Or Press Me</button>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data: function() {
    return {
      name: "default",
      highlight: false,
      //highlight1: false,
      //highlight2: false,
      fragment: `<div class="form-group">
                  Password
                  <input class="form-control" />
                  </div>`,
      price: 48.95,
      taxRate: 12,
      lowTaxRate: 12,
      highTaxRate: 20,
      showElements: false,
      counter: 0
    }
  },
  computed: {
    elemClasses() {
      // return this.highlight ?
      // ["bg-light", "text-dark", "display-4"] : ["bg-dark", "text-light", "p-2"];
      return {
        "text-dark": this.highlight1,
        "bg-light": this.highlight2
      }
    },
    elemStyles() {
      return {
        "border": "5px solid red",
        "background-color": this.highlight ? "coral": ""
      }
    },
    attrValues() {
      return {
        class: this.highlight ? ["bg-light", "text-dark"] : [],
        style: {
          border: this.highlight ? "5px solid red" : ""
        },
        "data-size": this.highlight ? "big": "small"
      }
    },
    size() {
      return this.highlight ? "big" : "small";
    },
    textContent() {
      return this.highlight ? "Highlight!" : `Product: ${this.name}`;
    },
    lowTotalPrice: function() {
      return this.getTotalPrice(this.lowTaxRate);
    },
    highTotalPrice: function() {
      return this.getTotalPrice(this.highTaxRate);
    }
  },
  methods: {
    getTotalPrice(taxRate) {
      return this.price + (this.price * (taxRate/100))
    },
    handleClick() {
      //this.showElements = !this.showElements;
      this.counter++;
      //this.highlight1 = !this.highlight1;
      this.highlight = !this.highlight;
    },
    handleOtherClick() {
      //this.highlight2 = !this.highlight2;
    }
  },
  filters: {
    currency(value, places) {
      return new Intl.NumberFormat(
        "en-MY", {
          style: "currency",
          currency: "MYR",
          minimumFractionDigits: places || 2,
          maximumFractionDigits: places || 2
        }).format(value);
    },
    capitalize(value) {
      return value[0].toUpperCase() + value.slice(1);
    },
    reverse(value) {
      return value.split("").reverse().join("");
    }
  }
}
</script>

<style>
[data-size=big] { font-size: 40pt; }
[data-size=small] { font-size: 20pt; }
</style>
