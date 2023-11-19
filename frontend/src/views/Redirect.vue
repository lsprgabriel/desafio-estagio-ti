<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    msg: {
        type: String,
        default: "Você não tem permissão para acessar essa página..."
    }
});


</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900">
    <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-white text-center">
        {{ props.msg }}
    </h1>
    </div>
</template>
