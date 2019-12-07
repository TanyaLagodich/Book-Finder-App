<template>
  <div class="input-group">
    <input type="text" 
           class="form-control" 
           placeholder="Type author, book name, other..."
           aria-label="Type author, book name, other..." 
           aria-describedby="basic-addon2"
           v-model="params.query"
           @keydown.enter="$emit('searchBooks', params)"
           :readonly="readonly">
    <div class="input-group-append">
      <button v-show="params.query" 
              type="button"
              class="btn btn-outline-secondary btn-close" 
              aria-label="Close"
              @click="params.query = ''">
        <span aria-hidden="true">&times;</span>
      </button>
      <button class="btn btn-outline-secondary" 
              type="button"
              @click="$emit('searchBooks', params)">Search</button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { PgnSets } from '../typings/entities';
import { Prop } from 'vue-property-decorator';

@Component
export default class SeachInput extends Vue {
  @Prop()
    public readonly!: boolean;
  public params: PgnSets = {
    query: '',
    maxResults: 10,
    startIndex: 0,
    total: 0,
  };
}
</script>
