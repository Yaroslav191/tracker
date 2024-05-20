<script setup>
import TimeLineItem from '../components/TimelineItem.vue'
import { generateTimeItems } from '../functions'
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimeLineItem
        v-for="timelineItem in generateTimeItems()"
        :key="timelineItem"
        :timelineItem="timelineItem"
      />
    </ul>
  </div>
</template>
