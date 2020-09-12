<template>
  <div class="topbar">
    <div class="left">
      <Icon
        class="icon menu-icon"
        @click.stop="e => $emit('menuIconClick', e)"
        name="menu"
      />
      <Icon
        class="icon logo"
        name="pi-academy"
      />
    </div>
    <div class="right">
      <div class="user">
        John Doe
      </div>
      <Icon
        class="icon"
        name="avatar"
      />
    </div>
  </div>
</template>

<script>
import Icon from '@/library/Icon';

export default {
  components: {
    Icon,
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  height: 100%;;
  background: var(--color1);
  display: flex;

  .left, .right {
    width: 50%;
    padding: 4px 8px;
    display: flex;
    padding: 4px var(--xxxs);
    
    &:hover {
      cursor: pointer;
    }
  }

  .right {
    justify-content: flex-end;
  }

  .icon {
    width: var(--xl);
    height: var(--xl);
  }

  .menu-icon {
    fill: var(--color6);
    padding: 4px 0;
    width: var(--m);
    height: var(--m);
  }

  .logo {
    padding-top: 2px;
    display: none;
  }

  .user {
    height: 100%;
    margin-right: 12px;
    font-size: var(--xs);
    color: var(--color6);
    @include position-center;
  }
}

@media only screen and (min-width: $small-screen-breakpoint) {
  .topbar {
    .menu-icon {
      display: none;
    }

    .logo {
      display: block;
    }
  }
}
</style>
