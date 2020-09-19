<template>
  <div class="lib-home-dashboard">
    <div v-for="event in events" :key="event.guid" class="event">
      <hr>
      <TextContent v-if="event.metaTitle" class="text" size="sm">
        {{ event.metaTitle }}
      </TextContent>
      <TextContent v-if="event.title" class="text" size="lg">
        {{ event.title }}
      </TextContent>
      <TextContent v-if="event.subtitle" class="text" size="md">
        {{ event.subtitle }}
      </TextContent>
      <TextContent v-if="event.description" class="text" size="sm">
        {{ event.description }}
      </TextContent>
      <TextContent v-if="event.schedule" class="text" size="md">
        <span>{{ event.schedule | date }}</span><br>
        <span>{{ event.schedule | time }}</span>
      </TextContent>
    </div>
    <hr>
  </div>
</template>

<script>
import moment from 'moment';
import TextContent from '@/library/TextContent';

export default {
  mounted() {
    this.$store.events.dispatch('reloadRecentEvents');
  },
  computed: {
    events() {
      return this.$store.events.getters.recentEvents;
    }
  },
  filters: {
    date(val) {
      const datetime = new Date(val);
      return moment(datetime).format('dddd, MMMM D');
    },
    time(val) {
      const datetime = new Date(val);
      return moment(datetime).format('h:mm a');
    }
  },
  components: {
    TextContent,
  }
}
</script>

<style lang="scss">
.lib-home-dashboard {
  width: 100%;
  position: relative;
  color: var(--color6);
  text-align: center;

  .text {
    color: var(--color6);
    margin: 0 !important;
    text-align: center;
  }
}
</style>
