<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" 
           href="#" 
           tabindex="-1">Previous</a>
      </li>
      <li v-for="page in totalPage"
          :key="page"
          class="page-item">
        <a class="page-link" 
           href="#"
           @click.prevent="changeParams(page)">{{ page }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { PgnSets } from '../typings/entities';
import { Prop } from 'vue-property-decorator';

<<<<<<< Updated upstream
@Component
export default class Pagination extends Vue {
  @Prop()
    pgnSets!: PgnSets
  
  public totalPage: Array<number> = [];
=======
@Component({
  props: {
    pgnSets: {},
  },
})
export default class Pagination extends Vue {
  public totalPage: number[] = [];
>>>>>>> Stashed changes

  public created() {
    const amount = Math.floor(this.pgnSets.total / this.pgnSets.maxResults);
    this.totalPage = [...Array(amount).keys()].slice(1);
  }

<<<<<<< Updated upstream
  changeParams(page: number): void {
    this.pgnSets.offset = this.pgnSets.limit * page;
=======
  public changeParams(page: number) {
    this.pgnSets.startIndex = this.pgnSets.maxResults * page;
>>>>>>> Stashed changes
    this.$emit('searchBooks', this.pgnSets);
  }
}
</script>