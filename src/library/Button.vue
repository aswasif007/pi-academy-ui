<template>
  <div class="lib-button" :class="`${type} ${size}`" @click="onClick">
    <button>{{ label }}</button>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String },
    type: { type: String, validator: val => ['default', 'primary'].includes(val), default: 'default' },
    size: { type: String, validator: val => ['sm', 'md', 'lg'].includes(val), default: 'md'}
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style lang="scss" scoped>
.lib-button {
  font-family: 'Red Rose';
  display: inline-block;
  border-radius: 3px;
  color: var(--color3);
  background: var(--color6);

  button {
    width: 100%;
    height: 100%;
    display: block;
    padding: 0 var(--xxs);
    border-radius: inherit;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    background: inherit;
    outline: none;
    border: 1px solid var(--color3);

    &:hover {
      cursor: pointer;
    }
  }

  &.primary {
    color: var(--color6);
    background: var(--color3);
  }

  &.sm {
    font-size: var(--xxs);
    height: var(--l);
  }

  &.md {
    font-size: var(--xs);
    height: var(--xl);
  }

  &.lg {
    font-size: var(--s);
    height: var(--xxl);
  }
}
</style>
