<template>
  <div class="lib-discussion-input">
    <TextArea
      class="text"
      type="multiline"
      :placeholder="placeholder"
      :size="size"
      v-model="value"
    />
    <Button
      class="btn-post"
      type="primary"
      :label="actionLabel"
      :size="size"
      @click="onSubmit"
    />
  </div>
</template>

<script>
import TextArea from '@/library/TextArea';
import Button from '@/library/Button';

export default {
  props: {
    size: { validator: val => ['sm', 'md', 'lg'].includes(val), default: 'md' },
    placeholder: { type: String },
    actionLabel: { type: String, required: true },
  },
  data() {
    return { value: '' };
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.value);
      this.value = '';
    }
  },
  components: {
    TextArea,
    Button,
  },
}
</script>

<style lang="scss" scoped>
.lib-discussion-input {
  width: 100%;

  .text {
    width: 100%;
  }

  .btn-post {
    margin-top: var(--xxs);
  }
}
</style>
