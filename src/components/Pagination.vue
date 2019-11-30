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

@Component({
  props: {
    pgnSets: {}
  }
})
export default class Pagination extends Vue {
  public totalPage: number = 0;

  created() {
    let amount = Math.floor(this.pgnSets.total / this.pgnSets.limit);
    this.totalPage = [...Array(amount).keys()].slice(1);
    console.log(this.totalPage);
  }

  changeParams(page) {
    this.pgnSets.offset = this.pgnSets.limit * page;
    this.$emit('searchBooks', this.pgnSets);
  }
}
</script>