<template>
  <Wysimark v-model="markdown" :height="300" />
</template>

<script setup lang="ts">
import Wysimark from '@wysimark/vue'
import { ref } from 'vue'

const markdown = ref('')
</script>
