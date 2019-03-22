<template src="./NoMagic.html" />
<script>
export default {
	name: "NoMagic",
	data: function() {
		return {
			counter: 0
		}
	},
	methods: {
		handleClick() {
			this.counter++;
		}
	},
	computed: {
		message() {
			return this.counter == 0 ? "Button Not Pressed": `Button Presses: ${this.counter}`;
		}
	}
}
</script>
