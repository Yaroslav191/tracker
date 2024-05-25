import { NAV_ITEMS, HOURS_IN_DAY } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid(timelineItem) {
  return (
    typeof timelineItem.hour === 'number' &&
    timelineItem.hour >= 0 &&
    timelineItem.hour < HOURS_IN_DAY
  )
}
