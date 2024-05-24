<script setup>
const props = defineProps(['timelineItem'])

const hourLinkClasses = [
  'rounded px-2 font-mono text-lg text-black absolute -top-4 left-1/2 translate-x-1/',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <a :class="hourLinkClasses" href="#">{{ timelineItem.hour }}:00</a>
    <div>
      <select name="" id="" class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl">
        <option value="" selected disabled>Rest</option>
        <option value="">Coding</option>
        <option value="">Reading</option>
        <option value="">Training</option>
      </select>
    </div>
  </li>
</template>
