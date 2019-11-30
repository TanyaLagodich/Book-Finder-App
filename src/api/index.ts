import { PgnSets } from '../typings/entities';

export const getSearchingList = (params: PgnSets) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.query}
                &limit=${params.limit}&offset=${params.offset}`)
         .then(res => res.json());
};
