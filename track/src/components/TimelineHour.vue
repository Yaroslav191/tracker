<script setup>
import { computed } from 'vue'

const props = defineProps({
  hour: {
    required: true,
    type: Number
  }
})

const classes = [
  'rounded px-2 font-mono text-lg text-black absolute -top-4 left-1/2 translate-x-1/',
  props.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]

const formattedHour = props.hour.toString().padStart(2, 0) + ':00'
</script>

<template>
  <a :class="classes" href="#">{{ formattedHour }}</a>
</template>
