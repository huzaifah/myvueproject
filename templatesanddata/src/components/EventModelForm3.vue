<template>
    <div class="container-fluid">
        <div class="bg-info m-2 p-2 text-white">
            <div>Name: {{ name }}</div>
        </div>
        <div class="bg-primary m-2 p-2 text-white">
            <!-- <div class="form-check" v-for="n in allNames" v-bind:key="n">
                <input class="form-check-input" type="radio" v-model="name" v-bind:value="n" />
                <label class="form-check-label">{{ n }}</label>
            </div> -->
            <div class="form-group">
                <label>Selected Names</label>
                <select class="form-control" v-model="name">
                    <option value="all">Everyone</option>
                    <option v-for="n in allNames" v-bind:key="n" v-bind:value="n">Just {{ n }}</option>
                </select>
            </div>    
        </div>
    </div>
</template>
<script>
export default {
    name: "MyComponent",
    data: function() {
        return {
            allNames: ["Bob", "Alice", "Joe"],
            name: "Bob"
        }
    }
}
</script>