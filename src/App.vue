<template>
  <div id="app">
    <router-view v-if="$route.name === 'login'" />
    <fragment v-else>
      <div class="top-section">
        <Topbar @menuIconClick="showLeftSection" />
      </div>
      <div class="left-section" :class="{'visible': leftSectionVisible}" v-offclick="() => leftSectionVisible = false">
        <LeftPane @select="leftSectionVisible = false" />
      </div>
      <div class="mid-section">
        <router-view />
      </div>
      <div class="right-section" :class="{'visible': rightSectionVisible}" v-offclick="() => rightSectionVisible = false">
        <RightPane />
      </div>
      <div class="right-floating" @click.stop="showRightSection">
        Dashboard
        <Icon class="arrow-icon" name="arrow" />
      </div>
    </fragment>
  </div>
</template>

<script>
import Topbar from '@/library/Topbar';
import LeftPane from '@/library/LeftPane';
import RightPane from '@/library/RightPane';
import Fragment from '@/library/Fragment';
import Icon from '@/library/Icon';

export default {
  components: {
    Topbar,
    LeftPane,
    RightPane,
    Fragment,
    Icon,
  },
  data() {
    return {
      rightSectionVisible: false,
      leftSectionVisible: false,
    };
  },
  methods: {
    showLeftSection() {
      this.leftSectionVisible = !this.leftSectionVisible;
      this.rightSectionVisible = false;
    },
    showRightSection() {
      this.leftSectionVisible = false;
      this.rightSectionVisible = !this.rightSectionVisible;
    }
  }
}
</script>

<style lang="scss">
#app {
  .top-section {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--xxxl);
    z-index: 2;
  }

  .left-section {
    top: var(--xxxl);
    left: 0;
    width: 260px;
    bottom: 0;
    position: fixed;

    &.visible {
      display: block;
    }
  }

  .mid-section {
    top: calc(var(--xxxl) + var(--xl));
    left: 260px;
    right: 0;
    bottom: 0;
    position: fixed;
    overflow: auto;
  }

  .right-section {
    top: var(--xxxl);
    right: 0;
    width: 300px;
    bottom: 0;
    position: fixed;
    display: none;
    z-index: 1;

    &.visible {
      display: block;
    }
  }

  .right-floating {
    position: fixed;
    top: var(--xxxl);
    left: 260px;
    right: 0;
    height: var(--xl);
    background: var(--color3);
    padding: var(--xxxxs) var(--xxxs);
    color: var(--color6);
    font-weight: bold;
    font-size: var(--xxs);
    text-align: right;

    &:hover {
      cursor: pointer;
    }
  }

  .arrow-icon {
    float: right;
    fill: var(--color6);
    margin-left: var(--xxxxs);
    height: var(--xs);
    width: var(--xs);
  }
}

@media only screen and (max-width: $small-screen-breakpoint) {
  #app {
    .left-section {
      display: none;
      z-index: 1;
    }

    .mid-section {
      left: 0;
      top: calc(var(--xxxl) + var(--l));
    }

    .right-floating {
      left: 0;
      height: var(--l);
    }
  }
}

@media only screen and (min-width: $large-screen-breakpoint) {
  #app {
    .mid-section {
      top: var(--xxxl);
      right: 300px;
    }

    .right-section {
      display: block;
    }

    .right-floating {
      display: none;
    }
  }
}
</style>
