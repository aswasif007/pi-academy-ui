<template>
  <div class="home-page">
    <DiscussionInput
      class="new-post"
      placeholder="Post something..."
      actionLabel="Post"
      v-model="post"
      @submit="savePost"
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
  data() {
    return { post: '' };
  },
  mounted() {
    this.$store.discussions.dispatch('reloadHomeThreads');
  },
  methods: {
    savePost(post) {
      this.$store.discussions.dispatch('storeNewPost', { post });
    }
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
