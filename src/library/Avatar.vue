<template>
  <div class="lib-avatar" @click="e => $emit('click', e)">
    <img v-if="imgSrc" class="image" :src="imgSrc" alt="">
    <Icon v-else name="avatar" class="image" />
  </div>
</template>

<script>
import Icon from './Icon';

export default {
  props: {
    imgSrc: { type: String },
  },
  components: {
    Icon,
  },
}
</script>

<style lang="scss" scoped>
.lib-avatar {
  height: 32px;
  width: 32px;
  display: inline-block;

  .image {
    display: block;
    height: 100%;
    width: 100%;
    border: 1px solid var(--color3);
    border-radius: 50%;
  }
}
</style>
