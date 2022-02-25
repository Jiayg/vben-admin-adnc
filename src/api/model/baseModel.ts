export interface BasicPageParams {
  pageIndex: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}
