<template>
	<app-header></app-header>
	<app-auth></app-auth>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppAuth from "./components/AppAuth.vue";

export default {
	name: 'App',
	components: {
		AppHeader,
		AppAuth
	}
};
</script>
