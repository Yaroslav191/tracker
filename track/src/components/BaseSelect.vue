<script setup>
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'

const props = defineProps({
  selected: Number,
  options: {
    required: true,
    type: Array,
    validator(options) {
      return options.every(
        ({ value, label }) => typeof value === 'number' && typeof label === 'string'
      )
    }
  },
  placeholder: {
    default: 'Rest',
    type: String
  }
})

const emit = defineEmits({
  select(value) {
    return typeof value === 'number' || typeof value === 'object'
  }
})

const isNotSelected = computed(() => {
  return props.selected === null || props.selected === undefined
})
</script>

<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl"
      @change="emit('select', +$event.target.value)"
    >
      <option :selected="isNotSelected" disabled :value="placeholder">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
