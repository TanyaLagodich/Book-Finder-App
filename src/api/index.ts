export const getSearchingList = (query: string, params: object) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
         .then(res => res.json());
};
