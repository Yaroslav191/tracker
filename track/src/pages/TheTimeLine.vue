<script setup>
import TimeLineItem from '../components/TimelineItem.vue'
import { isTimelineItemValid } from '../validators'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: (timelineItems) => timelineItems.every(isTimelineItemValid)
  }
})
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimeLineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem"
        :timelineItem="timelineItem"
      />
    </ul>
  </div>
</template>
