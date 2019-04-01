<template>
  <div class="container-fluid">
    <h3 class="bg-primary text-white text-center mt-2 p-2">{{ message }}</h3>
    <table class="table table-sm table-striped table-bordered">
      <thead>
        <td>Index</td>
        <td>Name</td>
        <td>Action</td>
      </thead>
      <tr v-for="(name, index) in names" v-bind:key="name">
        <td>{{ index + 1 }}</td>
        <td>{{ name }}</td>
        <td>
          <button class="btn btn-sm bg-primary text-white" v-on:click="handleClick(name)"
          v-on:mousemove="handleMouseEvent(name, $event)" v-on:mouseleave="handleMouseEvent(name, $event)">
          Select
          </button>
        </td>
      </tr>
    </table>
    <!-- <div class="bg-primary text-white m-2 p-3 text-center">
      <h3 v-on:click="handleEvent">{{ name }}</h3>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: "EventPageComponent",
    data: function() {
      return {
        counter: 0,
        message: "Ready",
        names: ["Life Jacket", "Kayak", "Soccer Ball", "Stadium"]
      }
    },
    methods: {
      // handleEvent($event) {
      //   this.name = $event.type;
      // },
      handleClick(name) {
        this.message = `Select: ${name}`;
      },
      handleMouseEvent(name, $event) {
        if ($event.type == "mousemove") {
          this.message = `Move in ${name} ${this.counter++}`;
        } else {
          this.counter = 0;
          this.message = "Ready";
        }
      }
    }
  }
</script>
