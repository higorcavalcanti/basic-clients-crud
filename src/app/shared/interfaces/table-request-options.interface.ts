export interface TableRequestOptions {
  page?: number;
  total?: number;

  limit?: number;
  start?: number;
  end?: number;

  sort?: string;
  order?: string;

  query?: string;
  filters?: {
    [s: string]: string | number
  }
}
