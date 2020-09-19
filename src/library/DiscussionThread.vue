<template>
  <div class="lib-discussion-thread">
    <Discussion
      size="md"
      :author="discussion.post.author"
      :datetime="discussion.post.createdAt">
      {{ discussion.post.body }}      
      <hr />
      <DiscussionInput
        size="sm"
        placeholder="Send a reply..."
        actionLabel="Comment"
        @submit="sendReply"
      />
      <hr />
      <Discussion v-for="comment in discussion.comments" :key="comment.guid"
        class="comment"
        size="sm"
        :author="comment.author"
        :datetime="comment.createdAt">
        {{ comment.body }}
      </Discussion>
    </Discussion>
  </div>
</template>

<script>
import Discussion from '@/library/Discussion';
import DiscussionInput from '@/library/DiscussionInput';

export default {
  props: {
    discussion: { type: Object, required: true },
  },
  methods: {
    sendReply(value) {
      this.$store.discussions.dispatch('storeThreadComment', { threadGuid: this.discussion.guid, comment: value });
    }
  },
  components: {
    Discussion,
    DiscussionInput,
  }
}
</script>

<style lang="scss" scoped>
.lib-discussion-thread {
  .comment {
    margin-top: 16px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background: var(--color4);
      left: calc(-1 * var(--xxxxl) / 2 - 8px);
      top: calc(var(--l) / 2 - 4px);
      border-radius: 50%;
    }
  }
}
</style>