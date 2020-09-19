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
        @click.stop="goToHome"
        name="pi-academy-small"
      />
    </div>
    <div class="right">
      <div class="user">
        {{ currentUser.name }}
      </div>
      <Avatar
        class="icon"
        :imgSrc="currentUser.avatar"
        @click.stop="showOptions = true"
      />
    </div>
    <div v-if="showOptions" class="options" v-offclick="() => showOptions = false">
      <hr>
      <div @click.stop="goToProfile">Profile</div>
      <div @click.stop="logout">Logout</div>
      <hr>
    </div>
  </div>
</template>

<script>
import Icon from '@/library/Icon';
import Avatar from '@/library/Avatar';

export default {
  data() {
    return { showOptions: false };
  },
  computed: {
    currentUser() {
      return this.$store.users.getters.currentUser;
    },
  },
  methods: {
    goToProfile() {
      this.showOptions = false;
      if (this.$route.name !== 'profile') {
        this.$router.push({ name: 'profile' });
      }
    },
    goToHome() {
      if (this.$route.name !== 'home') {
        this.$router.push({ name: 'home' });
      }
    },
    logout() {
      this.showOptions = false;
      this.$router.push({ name: 'login' });
    },
  },
  components: {
    Icon,
    Avatar,
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  height: 100%;;
  background: var(--color1);
  display: flex;
  position: relative;

  .right {
    width: 100%;
  }

  .left, .right {
    padding: 4px 8px;
    display: flex;
    padding: 4px var(--xxxs);
  }

  .right {
    justify-content: flex-end;
  }

  .icon {
    width: var(--xl);
    height: var(--xl);

    &:hover {
      cursor: pointer;
    }
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

  .options {
    position: absolute;
    background: var(--color2);
    right: 0;
    top: 100%;
    color: var(--color6);
    padding: var(--xxxs) 0;
    font-size: var(--xs);
    font-family: 'Red Rose';
    box-shadow: 0 0 4px 2px var(--color1);
    text-align: right;

    div {
      padding: var(--xxxs);

      &:hover {
        background: var(--color1);
        cursor: pointer;
      }
    }

    hr {
      margin: 0 8px;
    }
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
