<template>
  <div>
    <div class="lib-people" :class="size">
      <Avatar class="avatar" :imgSrc="imgSrc" />
      <div class="info">
        <p class="name" :style="style__name">John Doe</p>
        <p v-if="category" class="category" :style="style__category">{{ category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '@/library/Avatar';

export default {
  props: {
    imgSrc: { type: String },
    name: { type: String, required: true },
    category: { type: String },
    size: { validator: val => ['sm', 'md', 'lg'].includes(val), default: 'md' },
    style__name: { type: Object },
    style__category: { type: Object },
  },
  components: {
    Avatar,
  }
}
</script>

<style lang="scss" scoped>
.lib-people {
  display: inline-flex;

  p {
    margin: 0;
    line-height: 1;
  }

  &.sm > .avatar {
    height: var(--l);
    width: var(--l);
  }

  &.md > .avatar {
    height: var(--xxl);
    width: var(--xxl);
  }

  &.lg > .avatar {
    height: var(--xxxxl);
    width: var(--xxxxl);
  }

  .info {
    font-family: 'PT Serif';
    @include position-center;
    text-align: left;
    margin-left: 8px;
  }
  
  .name {
    color: var(--color2);
  }

  .category {
    color: var(--color4);
    margin-top: 2px;
  }

  &.sm {
    .name {
      font-size: var(--xxs);
    }

    .category {
      font-size: var(--xxxs);
    }
  }

  &.md {
    .name {
      font-size: var(--xs);
    }

    .category {
      font-size: calc(var(--xxs) - 2px);
    }
  }

  &.lg {
    .name {
      font-size: var(--m);
    }

    .category {
      font-size: var(--xxs);
    }
  }
}
</style>
