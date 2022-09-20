<template>
  <!--  <div>-->
  <!--        <a :href="article.info.category.href" class="inline-block">-->
  <!--          <span :class="[article.info.category.color, 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium']">{{ article.info.category.name }}</span>-->
  <!--        </a>-->
  <!--  </div>-->
  <div
      class="dark:bg-rrgray-800 bg-rrgray-100 rounded-lg shadow-md p-4 dark:ring-rrgray-500 ring-1 ring-rrgray-200 h-full flex flex-col justify-between">
    <a :href="article.path" class="">
      <p class="text-xl font-semibold dark:text-rrgray-300 text-rrgray-600 mt-1">{{ article.info.title }}</p>
      <p class="mt-3 text-base text-gray-500">{{ article.info.snippet }}</p>
    </a>
    <div>
      <div class="flex justify-between mt-auto">
        <div class="flex shrink-0">
          <div class="flex-shrink-0">
            <a :href="authorMap[article.info.author].link">
              <span class="sr-only">{{ article.info.author }}</span>
              <div class="relative h-12 w-12 pb-1">
                <img class="absolute w-full h-full object-cover rounded-full aspect-square noback mt-3"
                     :src="authorMap[article.info.author].img" alt=""/>
              </div>
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <a :href="authorMap[article.info.author].link">{{ article.info.author }}</a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500 -mt-3">
              <!--          <time :datetime="article.info.date">{{-->
              <!--              new Date(article.info.date).toLocaleDateString('en-US', {-->
              <!--                year: 'numeric',-->
              <!--                month: 'short',-->
              <!--                day: 'numeric'-->
              <!--              })-->
              <!--            }}-->
              <!--          </time>-->
              <time :datetime="article.info.date">{{
                  dayjs().to(dayjs(article.info.date))
                }}
              </time>
              <!--        <span aria-hidden="true">&middot;</span>-->
              <!--        <span>{{ article.info.readingTime }} read</span>-->
            </div>
          </div>
        </div>
        <div>
          <span
              class="hidden sm:block inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium mt-5"
              :class="badgeColors[article.info.category[0]]">{{ article.info.category[0] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {PropType} from "vue";
import {ArticleItem} from "../types";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const props = defineProps({
  article: {
    type: Object as PropType<ArticleItem>,
    required: true,
  },
})
const authorMap = {
  'Amy Kim': {
    img: '/img/amy.jpg',
    link: '#'
  },
  'Josh Haines': {
    img: '/img/josh_small4.jpg',
    link: '../about/core.html#josh-haines'
  },
  'William Belcher': {
    img: '/img/belcher.jpg',
    link: '../about/core.html#william-belcher'
  },
  'Chinmai Trivedi': {
    img: '/img/chinmai.png',
    link: '../about/core.html#chinmai-trivedi'
  },
  'William Fletcher': {
    img: '/img/fletcher.jpg',
    link: '#'
  },
  'Tyler Blaszak': {
    img: '/img/tyler.jpg',
    link: '#'
  }
}

const badgeColors = {
  'TodayWeLearned': ['bg-rrpurple-200', 'text-rrpurple-900'],
  'Strategy': ['bg-rrred-200', 'text-rrred-900'],
  'PostMortem': ['bg-rrgreen-200', 'text-rrgreen-900'],
}

</script>