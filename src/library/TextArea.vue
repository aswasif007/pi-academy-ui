<template>
  <div class="lib-textarea" :class="`${size}`">
    <input :type="type" :placeholder="placeholder" :value="value" @input="onChange">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: { type: String },
    type: { type: String, default: 'text' },
    size: { type: String, validator: val => ['sm', 'md', 'lg'].includes(val), default: 'md'}
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value);
    },
  }
}
</script>

<style lang="scss" scoped>
.lib-textarea {
  display: flex;
  width: 250px;
  font-family: 'PT Serif';
  border-radius: 3px;
  color: var(--color3);

  input {
    width: 100%;
    border: 1px solid transparent;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    border-radius: inherit;
    text-align: inherit;
    padding: 0 var(--xxxxs);
    background: var(--color7);

    &:focus {
      outline: none;
      border-color: var(--color3);
    }

    &::placeholder {
      color: var(--color6);
    }
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
