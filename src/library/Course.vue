<template>
  <div class="lib-course">
    <TextContent class="title" size="xl">{{ course.code }}: {{ course.title }}</TextContent>
    <TextContent class="description" size="md">
      {{ course.description }}
      <span v-if="!expanded" @click="expanded = true">See more</span>
    </TextContent>
    <div class="more" v-if="expanded">
      <div class="details">
        <TextContent class="section entry" size="sm">What you will learn:</TextContent>
        <TextContent v-for="takeaway in course.takeaways" :key="takeaway" class="entry" size="sm">- {{ takeaway }}</TextContent>
        <br>
        <TextContent class="section entry" size="sm">Course outline:</TextContent>
        <TextContent v-for="entry in course.outlines" :key="entry" class="entry" size="sm">- {{ entry }}</TextContent>
        <br>
        <TextContent class="section entry" size="sm">
          Tags:
          <span v-for="tag in course.tags" :key="tag">{{ tag }}</span>
        </TextContent>
      </div>
      <div class="section actions">
        <Button label="Enroll" size="sm" type="primary" />
        <Button label="Collapse" size="sm" class="btn-collapse" @click="expanded = false" />
      </div>
    </div>
  </div>
</template>

<script>
import TextContent from '@/library/TextContent';
import Button from '@/library/Button';
import Fragment from '@/library/Fragment';

export default {
  props: {
    course: { type: Object, required: true },
  },
  data() {
    return { expanded: false };
  },
  components: {
    TextContent,
    Button,
    Fragment,
  }
}
</script>

<style lang="scss" scoped>
.lib-course {
  margin-top: var(--xs);

  .title {
    color: var(--color2);
    margin-bottom: 0;
  }

  .description {
    margin-bottom: 0;

    span {
      font-weight: bold;
      font-size: var(--xxs);
      text-decoration: underline;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .more {
    position: relative;
    padding-left: var(--xs);
    margin-top: var(--xxxs);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 2px;
      background: var(--color4);
    }
  }

  .entry {
    margin: 0;

    span {
      display: inline-block;
      border: 1px solid;
      padding: 2px 4px;
      line-height: 1;
      border-radius: 3px;
      margin-right: 4px;
    }    
  }

  .actions {
    margin-top: 12px;
  }

  .section {
    position: relative;
  }

  .section:before {
    content: '';
    position: absolute;
    top: 8px;
    left: calc(var(--xs) * -1 - 3px);
    width: 8px;
    height: 8px;
    background: var(--color4);
    border-radius: 50%;
  }

  .btn-collapse {
    margin-left: 8px;
  }
}
</style>
