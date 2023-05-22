<template>
    <p>value: {{}}</p>
    <button>click me</button>
</template>

<script setup>
import { ref, computed } from 'vue';

const counter = ref(0);

const getCounter = computed(() => counter.value);
</script>
