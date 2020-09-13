<template>
  <p class="lib-text-content" :class="size">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    size: { validator: val => ['xsm', 'sm', 'md', 'lg', 'xlg'].includes(val), default: 'md' }
  }
}
</script>

<style lang="scss" scoped>
.lib-text-content {
  display: block;
  text-align: justify;
  font-family: 'Quattrocento Sans';
  color: var(--color3);
  line-height: 1.5;

  &.xsm {
    font-size: var(--xxxs);
    margin: 0 0 var(--xxxxs) 0;
  }

  &.sm {
    font-size: var(--xxs);
    margin: 0 0 var(--xxxxs) 0;
  }

  &.md {
    font-size: var(--xs);
    margin: 0 0 var(--xxxs) 0;
  }

  &.lg {
    font-size: var(--s);
    margin: 0 0 var(--xxxs) 0;
  }

  &.xlg {
    font-size: var(--m);
    margin: 0 0 var(--xxs) 0;
  }
}
</style>
