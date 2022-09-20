<template>
  <div class="article-wrapper">
    <div v-if="!items.length">Nothing in here.</div>
    <article class="article" v-for="{ info, path } in items">
      <div>
        <p v-if="info.date" class="date">
          {{ new Date(info.date).toLocaleDateString('en-US', options) }}
        </p>
        <header class="title">
          <RouterLink :to="path">
            {{ info.title }}
          </RouterLink>
        </header>
      </div>
      <hr/>
      <p>{{ info.snippet }}</p>
      <div class="article-info">
        <span v-if="info.author" class="author">Author: {{ info.author }}</span>
        <span v-if="info.date" class="date"
        >Date: {{ new Date(info.date).toLocaleDateString('en-US', options) }}</span
        >
        <span v-if="info.category" class="category"
        >Category: {{ info.category.join(",") }}</span
        >
        <span v-if="info.tag" class="tag">Tag: {{ info.tag.join(",") }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import {RouterLink} from "vue-router";

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}
</script>
<style lang="scss">
//@use "@vuepress/theme-default/styles/mixins";

.article-wrapper {
  //@include mixins.content_wrapper;
  text-align: center;
}

.article {
  position: relative;

  box-sizing: border-box;

  width: 100%;
  margin: 0 auto 1.25rem;
  padding: 1rem 1.25rem;
  border-radius: 0.4rem;

  text-align: left;

  @media (max-width: 419px) {
    border-radius: 0;
  }

  .date {
    color: #636363;
  }

  .title {
    position: relative;

    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 1rem;

    font-size: 1.8rem;
    line-height: 2rem;
    color: #424242;
    font-weight: 700;

    &::after {
      content: "";

      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: 2px;

      background: var(--c-brand);

      visibility: hidden;

      transition: transform 0.3s ease-in-out;
      transform: scaleX(0);
    }

    &:hover {
      cursor: pointer;

      &::after {
        visibility: visible;
        transform: scaleX(1);
      }
    }

    a {
      color: inherit;
    }
  }

  .article-info {
    display: flex;
    flex-flow: row;
    flex-shrink: 0;

    > span {
      margin-right: 0.5em;
      line-height: 1.8;
    }
  }
}
</style>