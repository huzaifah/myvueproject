<template>
    <div class="container-fluid">
        <div class="btn-primary text-white my-2 p-2">
            Name: {{ name }}, Category: {{ category }}, Price: {{ price }}
        </div>

        <form v-on:submit.prevent="handleSubmit">
            <div class="form-group">
                <label>Name</label>
                <input v-model="name" class="form-control" />
            </div>
            <div class="form-group">
                <label>Category</label>
                <input v-model="category" class="form-control" />
            </div>
            <div class="form-group">
                <label>Price</label>
                <input type="number" v-model.number="price" class="form-control" />
            </div>
            <div class="text-center">
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "MyComponent",
    data: function() {
        return {
            name: "",
            category: "",
            price: 0
        }
    },
    methods: {
        handleSubmit() {
            console.log(`FORM SUBMITTED: ${this.name} ${this.category} ${this.price}`);
        }
    }
}
</script>



