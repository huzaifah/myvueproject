<template>
  <div class="bg-secondary text-white text-center m-2 p-2 h5">
    {{ message }}
    <MyFeature labelText="Name" initialValue="Kayak"></MyFeature>
    <my-feature label-text="Category" initial-value="Watersports"></my-feature>
  </div>
</template>

<script>
import ChildComponent from "./components/Child";
export default {
  name: 'App',
  components: {
    MyFeature: ChildComponent
  },
  data: function() {
    return {
      message: "This is the parent component"
    }
  }
}
</script>
