<template>
  <div class="right-pane">
    <CourseDashboard v-if="courseGuid" :courseGuid="courseGuid" />
    <HomeDashboard v-else />
  </div>
</template>

<script>
import HomeDashboard from '@/library/HomeDashboard';
import CourseDashboard from '@/library/CourseDashboard';

export default {
  computed: {
    courseGuid() {
      return this.$route.params.courseGuid;
    },
  },
  components: {
    HomeDashboard,
    CourseDashboard,
  },
}
</script>

<style lang="scss" scoped>
.right-pane {
  width: 100%;
  height: 100%;
  padding: var(--xxxs);
  background: var(--color3);
  overflow: auto;
}
</style>
