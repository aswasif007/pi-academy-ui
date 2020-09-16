<template>
  <div class="lib-icon" @click="e => $emit('click', e)">
    <component :is="SvgIcon" />
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
  },
  computed: {
    SvgIcon() {
      return () => import(`@/assets/icons/${this.name}.svg`);
    },
  }
}
</script>

<style lang="scss" scoped>
.lib-icon {
  width: 20px;
  height: 20px;
}
</style>
