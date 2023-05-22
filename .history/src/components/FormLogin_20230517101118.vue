<template>
    <p>value: {{ getCounter }}</p>
    <button @click="increment">click me</button>
</template>

<script setup>
import { ref, computed } from 'vue';

const counter = ref(0);

const getCounter = computed(() => counter.value);

const increment = () => {
    counter.value++;
};
</script>
