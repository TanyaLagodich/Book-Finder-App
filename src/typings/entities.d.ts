export interface PgnSets {
  maxResults: number;
  startIndex: number;
  total: number;
  query: string;
}

export interface PaginationType {
  items: Array<any>,
  total: number
}
