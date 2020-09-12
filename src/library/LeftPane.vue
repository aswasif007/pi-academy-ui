<template>
  <div class="left-pane">
    <div v-for="nav in navs"
      class="option"
      @click="$router.push(nav.route)"
      :class="{'selected': $route.name === nav.route}"
      :key="nav.label">
      {{ nav.label }}
    </div>
    <div class="option courses">
      Courses
      <div class="course">
        CS-102
      </div>
    </div>
  </div>
</template>

<script>
const Navs = [
  { label: 'Home', route: 'home', selected: true },
  { label: 'Browse', route: 'browse' },
  { label: 'Profile', route: 'profile' },
];

export default {
  computed: {
    navs() {
      return Navs;
    }
  }
}
</script>

<style lang="scss" scoped>
.left-pane {
  width: 100%;
  height: 100%;
  background: var(--color2);
  padding: 12px 0 0 0;

  .option {
    line-height: var(--xxxxl);
    font-size: var(--s);
    font-family: 'Red Rose';
    color: var(--color6);
    border-top: 1px solid var(--color1);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 12px;
    position: relative;

    &:last-child {
      border-bottom: 1px solid var(--color1);
    }

    &:hover {
      cursor: pointer;
    }
  }

  .courses:hover {
    cursor: text;
  }

  .course {
    line-height: var(--xxxl);
    font-size: var(--xs);
    padding-left: var(--xs);
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }

  .selected::before {
    content: '';
    position: absolute;
    height: calc(var(--xxxxl) * 0.2);
    width: calc(var(--xxxxl) * 0.2);
    background: var(--color6);
    top: calc(50% - var(--xxxxl) * 0.1);
    right: calc(var(--xxxxl) * -0.1);
    transform: rotateZ(45deg);
  }
}
</style>
