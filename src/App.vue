<template>
  <div id="app">
    <div class="container">
      <h1>Book Finder</h1>
      <search-input @searchBooks="searchBooks"
                    class="mb-5"
                    :readonly="isLoading" />
      <div v-if="isLoading"
           class="h-100">
        <loader />
      </div>
      <div v-else>
        <books-list v-if="books && books.length" 
                    :books="books" />
        <pagination v-if="books && books.length && pgnSets.total > 10"
                    :pgn-sets="pgnSets"
                    @searchBooks="searchBooks" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getSearchingList } from './api';
import SearchInput from './components/SearchInput.vue';
import BooksList from './components/BooksList.vue';
import Pagination from './components/Pagination.vue';
import Loader from './components/Loader.vue';
import { PgnSets } from './typings/entities';

@Component({
  components: { SearchInput, Loader, BooksList, Pagination },
})
export default class App extends Vue {
  public books: object[] = [];
  public pgnSets: PgnSets = {
    maxResults: 10,
    startIndex: 0,
    total: 0,
    query: '',
  };
  public isLoading: boolean = false;

  public async searchBooks(params: PgnSets) {
    if (!params.query) {
      return;
    }
    this.pgnSets = {...params};
    this.isLoading = true;
    const { items, totalItems } = await getSearchingList(params);
    this.isLoading = false;
    this.books = items;
    this.pgnSets.total = totalItems;
  }
}
</script>

<style lang="scss">
@import "~bootstrap";

html, body, #app, .container {
  height: 100%;
}

body {
  @extend .bg-light;
}

.btn-close {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 1px 0 #fff;
}

#app {
  padding-top: 60px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
