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
      <div class="right-floating" :class="{'visible': !rightSectionVisible}" @click.stop="showRightSection">
        Notice Board
      </div>
    </fragment>
  </div>
</template>

<script>
import Topbar from '@/library/Topbar';
import LeftPane from '@/library/LeftPane';
import RightPane from '@/library/RightPane';
import Fragment from '@/library/Fragment';

export default {
  components: {
    Topbar,
    LeftPane,
    RightPane,
    Fragment,
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
    width: 100%;
    height: var(--xxxl);
  }

  .left-section {
    top: var(--xxxl);
    left: 0;
    width: 260px;
    height: calc(100vh - var(--xxxl));
    position: fixed;

    &.visible {
      display: block;
    }
  }

  .mid-section {
    top: var(--xxxl);
    left: 260px;
    right: 0;
    height: calc(100vh - var(--xxxl));
    position: fixed;
    overflow: auto;
  }

  .right-section {
    top: var(--xxxl);
    right: 0;
    width: 300px;
    height: calc(100vh - var(--xxxl));
    position: fixed;
    display: none;

    &.visible {
      display: block;
    }
  }

  .right-floating {
    position: fixed;
    top: calc(var(--xxxl) * 1);
    right: 0;
    background: var(--color3);
    padding: var(--xxxxs) var(--xxxs);
    border-radius: 3px 3px 0 0;
    transform: rotateZ(-90deg);
    transform-origin: 100% 100%;
    color: var(--color6);
    font-weight: bold;
    display: none;

    &:hover {
      cursor: pointer;
    }

    &.visible {
      display: block;
    }
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
    }
  }
}

@media only screen and (min-width: $large-screen-breakpoint) {
  #app {
    .mid-section {
      right: 300px;
    }

    .right-section {
      display: block;
      z-index: 1;
    }

    .right-floating.visible {
      display: none;
    }
  }
}
</style>
