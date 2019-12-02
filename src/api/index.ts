import { PgnSets } from '../typings/entities';

export const getSearchingList = (params: PgnSets) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${params.query}
                &maxResults=${params.maxResults}&startIndex=${params.startIndex}`)
         .then((res) => res.json());
};
