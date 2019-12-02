export interface PgnSets {
  limit?: number
  offset?: number
  total?: number
  query?: string
}

export interface PaginationType {
  items: Array<any>,
  total: number
}