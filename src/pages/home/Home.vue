<template>
  <div class="home-page">
    <DiscussionInput
      class="new-post"
      placeholder="Post something..."
      actionLabel="Post"
    />
    <hr class="line">
    <div>
      <DiscussionThread v-for="thread in threads" :key="thread.guid"
        class="thread"
        :discussion="thread"
      />
    </div>
  </div>
</template>

<script>
import DiscussionInput from '@/library/DiscussionInput';
import DiscussionThread from '@/library/DiscussionThread';

export default {
  components: {
    DiscussionInput,
    DiscussionThread,
  },
  mounted() {
    this.$store.discussions.dispatch('reloadHomeThreads');
  },
  computed: {
    threads() {
      return this.$store.discussions.getters.homeThreads;
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  padding: var(--m);

  .line {
    margin: var(--xxs) 0;
  }

  .thread {
    margin-top: var(--xl);
  }
}

@media only screen and (max-width: $small-screen-breakpoint) {
  .home-page {
    padding: var(--xxxxs);
  }
}
</style>
