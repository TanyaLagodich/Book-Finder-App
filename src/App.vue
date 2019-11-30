<template>
  <div id="app"
       class="container">
    <div class="input-group">
    <input type="text" 
           class="form-control" 
           placeholder="Type author, book name, other..."
           aria-label="Type author, book name, other..." 
           aria-describedby="basic-addon2"
           v-model="query"
           @keydown.enter="searchBooks">
    <div class="input-group-append">
      <button v-if="query" 
              type="button" 
              class="btn btn-outline-secondary btn-close" 
              aria-label="Close"
              @click="query = ''">
  <span aria-hidden="true">&times;</span>
</button>
      <button class="btn btn-outline-secondary" 
              type="button"
              @click="searchBooks">Search</button>
    </div>
</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getSearchingList } from './api';

@Component({
 
})
export default class App extends Vue {
  query = '';

  async searchBooks() {
    if (!this.query) return;
    await getSearchingList(this.query);
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
