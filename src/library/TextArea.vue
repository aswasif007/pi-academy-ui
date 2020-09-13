<template>
  <div class="lib-textarea" :class="`${size} ${type}`">
    <textarea v-if="type === 'multiline'" :placeholder="placeholder" :value="value" />
    <input v-else :type="type" :placeholder="placeholder" :value="value" @input="onChange">
  </div>
</template>

<script>
export default {
  props: {
    placeholder: { type: String },
    type: { type: String, validator: val => ['text', 'password', 'multiline'].includes(val), default: 'text' },
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

  input, textarea {
    width: 100%;
    border: 1px solid transparent;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    border-radius: inherit;
    text-align: inherit;
    padding: 0 var(--xxxxs);
    background: var(--color7);
    line-height: inherit;

    &:focus {
      outline: none;
      border-color: var(--color4);
    }

    &::placeholder {
      color: var(--color6);
    }
  }

  textarea {
    resize: none;
  }

  &.sm {
    font-size: var(--xxs);
    height: var(--l);
    line-height: calc(var(--l) - 2px);
  }

  &.md {
    font-size: var(--xs);
    height: var(--xxl);
    line-height: calc(var(--xxl) - 2px);
  }

  &.lg {
    font-size: var(--s);
    height: var(--xxxxl);
    line-height: calc(var(--xxxxl) - 2px);
  }

  &.multiline.sm {
    height: calc(var(--l) * 2);
  }

  &.multiline.md {
    height: calc(var(--xxl) * 2);
  }

  &.multiline.lg {
    height: calc(var(--xxxxl) * 2);
  }
}
</style>
