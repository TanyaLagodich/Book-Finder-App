<template>
  <nav v-if="pgnSets && pagesCount && pagesCount > 1"
       aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item"
          :class="{'disabled': currentPage === 1}">
        <a class="page-link" 
           href="#" 
           tabindex="-1"
           @click.prevent="changeParams(1)">First</a>
      </li>
      <li v-for="(page, index) in formatPages"
          :key="index"
          class="page-item"
          :class="{'disabled': currentPage === page || page === '...'}">
        <a class="page-link" 
           href="#"
           @click.prevent="changeParams(page)">{{ page }}</a>
      </li>
      <li class="page-item"
          :class="{'disabled': currentPage === formatPages[formatPages.length - 1]}">
        <a class="page-link" 
           href="#"
           @click.prevent="changeParams(formatPages[formatPages.length - 1])">Last</a>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { PgnSets } from '../typings/entities';
import { Prop } from 'vue-property-decorator';

@Component
export default class Pagination extends Vue {
  @Prop()
    public pgnSets!: PgnSets;

  public nearbyPagesLimit: number = 3;

  get pagesCount() {
    return Math.ceil(this.pgnSets.total / this.pgnSets.maxResults);
  }

  get currentPage() {
    return Math.ceil(this.pgnSets.startIndex / this.pgnSets.maxResults) + 1;
  }

  get pages() {
    return [...Array(this.pagesCount + 1).keys()].slice(1);
  }

  get formatPages() {
    const res: any[] = [];
    this.pages.forEach((p, i) => {
      if (p === 1) {
        res[i] = p;
      } else if (p === this.pagesCount) {
        res[i] = p;
      } else if (0 === (this.currentPage - this.nearbyPagesLimit) - (i + 1)) {
        res[i] = '...';
      } else if (0 === (this.currentPage + this.nearbyPagesLimit) - (i + 1)) {
        res[i] = '...';
      } else if (0 < (this.currentPage - this.nearbyPagesLimit) - (i + 1)) {
        return;
      } else if (0 > (this.currentPage + this.nearbyPagesLimit) - (i + 1)) {
        return;
      } else {
        res[i] = p;
      }
    });
    return res.filter((el) => el !== null);
  }

  public changeParams(page: number) {
    this.pgnSets.startIndex = this.pgnSets.maxResults * (page - 1);
    this.$emit('searchBooks', this.pgnSets);
  }
}
</script>