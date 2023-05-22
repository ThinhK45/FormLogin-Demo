<template>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
</template>

<script setup>
import { PrimeIcons } from 'primevue/api';
import { ref } from 'vue';
const items = ref([]);
</script>
