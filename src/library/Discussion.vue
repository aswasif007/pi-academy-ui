<template>
  <div class="lib-discussion" :class="size">
    <People
      :name="author.name"
      :category="author.category"
      :size="size"
    />
    <TextContent class="text" :size="size">
      <slot />
    </TextContent>
  </div>
</template>

<script>
import People from '@/library/People';
import TextContent from '@/library/TextContent';

export default {
  props: {
    author: { type: Object, required: true },
    size: { validator: val => ['sm', 'md', 'lg'].includes(val), default: 'md' },
  },
  components: {
    People,
    TextContent,
  }
}
</script>

<style lang="scss" scoped>
.lib-discussion {
  display: block;

  .text {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 10px;
      bottom: 10px;
      background: var(--color4);
    }
  }

  &.sm > .text {
    padding-left: calc(var(--l) + 8px);
    &:before {
      width: 1px;
      left: calc(var(--l) / 2);
    }
  }

  &.md > .text {
    padding-left: calc(var(--xxl) + 8px);
    &:before {
      width: 2px;
      left: calc(var(--xxl) / 2 - 1px);
    }
  }

  &.lg > .text {
    padding-left: calc(var(--xxxxl) + 8px);
    &:before {
      width: 2px;
      left: calc(var(--xxxxl) / 2 - 1px);
    }
  }
}
</style>
