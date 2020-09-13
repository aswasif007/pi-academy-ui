<template>
  <div class="lib-discussion" :class="size">
    <People
      class="people"
      :name="author.name"
      :category="author.category"
      :size="size"
    />
    <div class="datetime">
      {{ datetime | fromNow }}
    </div>
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
    datetime: { type: Date },
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

  .people {
    display: inline-block;
  }

  .datetime {
    float: right;
    font-family: 'PT Serif';
    color: var(--color4);
  }

  &.sm > .datetime {
    font-size: var(--xxxs);
  }

  &.md > .datetime {
    font-size: calc(var(--xxs) - 2px);
  }

  &.lg > .datetime {
    font-size: var(--xxs);
  }

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

@media only screen and (max-width: $small-screen-breakpoint) {
  .lib-discussion {
    &.sm > .text {
      padding-left: 0;

      &:before {
        display: none;
      }
    }
  }
}
</style>
