<template>
  <div class="bg-secondary text-white text-center m-2 p-2 h5">
    Root Component
    <ChildComponent></ChildComponent>
    <child-component></child-component>
    <my-feature></my-feature>
    
  </div>
</template>

<script>
import ChildComponent from "./components/Child";
export default {
  name: 'App',
  components: {
    MyFeature: ChildComponent
  }
}
</script>