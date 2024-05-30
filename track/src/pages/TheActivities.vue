<script setup lang="ts">
import ActivityItem from '@/components/ActivityItem.vue'

const activitities = ['Coding', 'Reading', 'Training']
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem v-for="activity in activitities" :key="activity" :activity="activity" />
    </ul>
  </div>
</template>
