export type PaginationMeta = {
  totalItems: number;
  itemsPerPage: string;
  totalPages: number;
  currentPage: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type PaginatedResponse<T> = {
  items: T[];
  meta: PaginationMeta;
};

export type PaginationParams = {
  page?: number;
  limit?: number;
};
