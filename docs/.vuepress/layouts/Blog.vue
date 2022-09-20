<template>
  <ParentLayout>
    <template #page>
      <main class="widePage">
        <div
            class="dark:text-rrgray-300 dark:text-rrgray-300 text-rrgray-600 dark:bg-rrgray-800 bg-white px-4 pt-4 pb-20 sm:px-6 lg:px-8 lg:pt-10 lg:pb-28">
          <div class="relative mx-auto max-w-2xl divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
              <h2 class="mt-24 text-3xl font-bold tracking-tight sm:text-4xl">Articles</h2>
              <p class="mt-3 text-xl dark:text-rrgray-400 dark:text-rrgray-400 text-rrgray-500 sm:mt-4">Below you'll
                find the blog articles
                written by Software
                Factory Members.</p>
            </div>
            <div
                class="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 pt-8 xl:grid-cols-4 xl:gap-x-12 xl:gap-y-12">
              <div v-for="article in articles.items" :key="article.path">
                <BlogCard :article="article"/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </template>
  </ParentLayout>
</template>
<script lang="ts" setup>
import {useBlogCategory, useBlogType} from "vuepress-plugin-blog2/client"
import ArticleList from "../components/ArticleList.vue"
import ParentLayout from "@vuepress/theme-default";
import BlogCard from "../components/BlogCard.vue";

const articles = useBlogType("blog")
const categoryMap = useBlogCategory("category");
const tagMap = useBlogCategory("tag");

</script>
<style lang="scss">
.categoryTitle, .tagTitle {
  font-size: 1.9rem;
  font-weight: 700;
  color: #424242;
  margin: 1rem 0 0 1rem;
  padding: 0;
  text-align: left;
}
</style>