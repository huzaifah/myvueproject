<template>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Name: **{{name}}**</div>
        </div>
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model.trim="name" />
        </div>
    </div>
</template>
<script>
export default {
    name: "MyComponent",
    data: function() {
        return {
            name: "Bob"
        }
    }
}
</script>

