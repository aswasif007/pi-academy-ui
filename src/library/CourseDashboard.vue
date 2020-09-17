<template>
  <div class="lib-course-dashboard" v-if="course">
    <hr>
    <TextContent class="text" size="lg">
      Enrollment is {{ course.status }}
    </TextContent>
    <hr>
    <TextContent class="text" size="lg">
      Instructors
    </TextContent>
    <div class="instructors">
      <People v-for="user in course.instructors" :key="user.guid"
        :style__name="{ color: 'var(--color6)'}"
        :style__category="{ color: 'var(--color5)'}"
        :imgSrc="user.avatar"
        :name="user.name"
        :category="user.category"
        size="md"
      />
    </div>
    <hr>
    <TextContent class="text" size="lg">
      Members ({{ course.members.length }})
    </TextContent>
    <div class="members">
      <Avatar v-for="user in course.members" :key="user.guid"
        :imgSrc="user.avatar"
        class="avatar"
      />
    </div>
    <hr>
  </div>
</template>

<script>
import TextContent from '@/library/TextContent';
import Avatar from '@/library/Avatar';
import People from '@/library/People';

export default {
  props: {
    courseGuid: { type: String, required: true },
  },
  computed: {
    course() {
      return this.$store.courses.getters.courseMeta[this.courseGuid];
    },
  },
  components: {
    Avatar,
    People,
    TextContent,
  }
}
</script>

<style lang="scss" scoped>
.lib-course-dashboard {
  width: 100%;
  position: relative;
  color: var(--color6);

  .text {
    color: vaR(--color6);
    text-align: center;
    margin: 0 !important;
  }

  .instructors {
    text-align: center;
    margin: var(--xxxs) 0;
  }

  .avatar {
    margin: var(--xxxs) 4px;
  }

  .members {
    text-align: center;
  }
}
</style>
