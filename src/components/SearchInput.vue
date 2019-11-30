<template>
  <div class="input-group">
    <input type="text" 
           class="form-control" 
           placeholder="Type author, book name, other..."
           aria-label="Type author, book name, other..." 
           aria-describedby="basic-addon2"
           v-model="query"
           @keydown.enter="$emit('searchBooks', query, params)">
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
              @click="$emit('searchBooks', query, params)">Search</button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const params = {
  limit: 0,
  offset: 0,
}

@Component
export default class SeachInput extends Vue {
  public query: string = '';
}
</script>
