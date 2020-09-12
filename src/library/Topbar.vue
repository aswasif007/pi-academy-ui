<template>
  <div class="topbar">
    <div class="menu-bar" @click.stop="e => $emit('menuIconClick', e)">
      M
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  height: 100%;;
  background: var(--color1);
  padding: 0 var(--xxxs);

  .menu-bar {
    font-family: 'PT Serif';
    font-size: var(--l);
    color: var(--color6);
    display: inline-block;
    
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
