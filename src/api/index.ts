export const getSearchingList = (query: string) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
         .then(res => res.json());
};
