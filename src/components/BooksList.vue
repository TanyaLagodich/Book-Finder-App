<template>
  <div class="row justify-content-around">
    <div v-for="book in books"
         :key="book.id"
         class="col-12 col-lg-6 mb-4">
      <div class="border rounded py-3 px-3 h-100 position-relative bg-white">
        <a :href="book.volumeInfo.infoLink"
           target="_blank"
           class="position-absolute"></a>
        <h3 class="text-left">{{ book.volumeInfo.title }}</h3>
        <div class="d-flex">
          <img :src="book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ''"
              :alt="book.volumeInfo.title"
              class="d-block mr-4">
          <div>
            <p v-if="book.volumeInfo.authors"
              class="text-left">{{ book.volumeInfo.authors.join(', ') }}</p>
            <p class="text-left">{{ book.volumeInfo.publishedDate }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    books: Array
  }
})
export default class BooksList extends Vue {}
</script>
<style lang="scss" scoped>
  img {
    max-width: 130px;
    width: 100%;
    object-fit: contain;
  }

  a {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: box-shadow .3 ease-in-out;
    &:hover {
      box-shadow: 2ch;
    }
  }
</style>
