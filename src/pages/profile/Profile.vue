<template>
  <div class="profile-page" v-if="currentUserProfile">
    <div class="top">
      <Avatar class="avatar" />
      <div class="intro">
        <div class="name">
          {{ currentUserProfile.name }}
        </div>
        <div class="attr">{{ currentUserProfile.category }}</div>
      </div>
    </div>
    <div class="body">
      <div class="section-title">
        Bio
      </div>
      <TextContent size="md">
        {{ currentUserProfile.bio }}
      </TextContent>
      <div class="section-title">
        Interest
      </div>
      <TextContent size="md">
        {{ currentUserProfile.interests }}
      </TextContent>
      <div class="section-title">
        Email
      </div>
      <TextContent size="md">
        {{ currentUserProfile.email }}
      </TextContent>
      <div class="section-title">
        Achievements
      </div>
      <TextContent size="sm">
        <span v-for="code in currentUserProfile.achievements" :key="code" class="pill">
          {{ code }}
        </span>
      </TextContent>
    </div>
    <div class="actions">
      <Button label="Change Password" type="primary" />
    </div>
  </div>
</template>

<script>
import Avatar from '@/library/Avatar';
import Button from '@/library/Button';
import TextContent from '@/library/TextContent';

export default {
  mounted() {
    this.$store.users.dispatch('reloadUserProfile', this.currentUser.guid);
  },
  computed: {
    currentUser() {
      return this.$store.users.getters.currentUser;
    },
    currentUserProfile() {
      return this.$store.users.getters.userProfiles[this.currentUser.guid];
    },
  },
  components: {
    Avatar,
    Button,
    TextContent,
  }
}
</script>

<style lang="scss" scoped>
.profile-page {
  padding: var(--m);

  .top {
    display: flex;
  }

  .intro {
    @include position-center;
    text-align: left;
    margin-left: var(--xs);
  }

  .avatar {
    width: calc(var(--xxxl) * 3);
    height: calc(var(--xxxl) * 3);
  }

  .name {
    font-family: 'PT Serif';
    font-size: var(--xl);
    color: var(--color2);
  }

  .attr {
    font-family: 'PT Serif';
    font-size: var(--xs);
    color: var(--color3);
  }

  .body {
    margin-top: var(--s);
  }

  .section-title {
    color: var(--color2);
    font-size: var(--m);
    margin-top: var(--xs);
  }

  .section {
    margin-top: 4px;
  }

  .pill {
    display: inline-block;
    margin-right: 8px;
    line-height: 1;
    border: 1px solid;
    border-radius: 3px;
    padding: 2px 4px;
  }

  .actions {
    margin-top: var(--s);
  }
}

@media only screen and (max-width: $small-screen-breakpoint) {
  .profile-page {
    padding: var(--xxxxs);

    .avatar {
      width: calc(var(--xxxl) * 2);
      height: calc(var(--xxxl) * 2);
    }

    .name {
      font-size: var(--m);
    }
  }
}
</style>
