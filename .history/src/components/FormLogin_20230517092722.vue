<template>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
</template>

<script setup>
import { PrimeIcons } from 'primevue/api';
import { ref } from 'vue';
const items = ref([
    {
        label: 'File',
        items: [
            { label: 'New', icon: PrimeIcons.PLUS },
            { label: 'Open', icon: PrimeIcons.DOWNLOAD },
        ],
    },
]);
</script>
