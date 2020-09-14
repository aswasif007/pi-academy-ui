<template>
  <div class="browse-page">
    <div class="top">
      <div class="header">Available Courses</div>
      <div class="btn-plus">      
        <Icon class="icon-plus" name="plus" />
      </div>
    </div>
    <hr>
    <div class="courses">
      <Course v-for="course in courses" :key="course.guid" :course="course" />
    </div>
  </div>
</template>

<script>
import Icon from '@/library/Icon';
import Course from '@/library/Course';

export default {
  mounted() {
    this.$store.courses.dispatch('reloadAllCourses');
  },
  computed: {
    courses() {
      return this.$store.courses.getters.allCourses;
    }
  },
  components: {
    Course,
    Icon,
  }
}
</script>

<style lang="scss" scoped>
.browse-page {
  padding: var(--m);

  .header {
    font-family: 'PT Serif';
    font-size: var(--m);
    color: var(--color1);
    line-height: var(--xxxl);
    display: inline-block;
  }

  .btn-plus {
    float: right;
    margin: 6px 0;
    padding: 6px;
    background: var(--color3);
    border-radius: 50%;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  .icon-plus {
    width: var(--xs);
    height: var(--xs);
    fill: var(--color6);
  }

  .line {
    margin: var(--xxs) 0;
  }

  .thread {
    margin-top: var(--xl);
  }
}

@media only screen and (max-width: $small-screen-breakpoint) {
  .browse-page {
    padding: var(--xxxxs);
  }
}
</style>
