<template>
  <div id="app"
       class="container">
    <h1>Book Finder</h1>
    <search-input @searchBooks="searchBooks"
                  class="mb-5" />
    <books-list v-if="books.length" 
                :books="books" />
    <pagination v-if="total > 10"
                :total="total" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getSearchingList } from './api';
import SearchInput from './components/SearchInput.vue';
import BooksList from './components/BooksList.vue';
import { PgnSets } from './typings/entities';

@Component({
  components: { SearchInput, BooksList },
})
export default class App extends Vue {
  public books: Array<object> = [];
  public total: number = 0;

  public async searchBooks(query: string, params: PgnSets) {
    if (!query) {
      return;
    }
    let { items, totalItems } = await getSearchingList(query, params);
    this.books = items;
    this.total = totalItems;
    console.log(this.books);
  }
}
</script>

<style lang="scss">
@import "~bootstrap";

.btn-close {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  text-shadow: 0 1px 0 #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
