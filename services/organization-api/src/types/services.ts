export interface IListOption<TFilter> {
  pagination: {
    itemCountPerPage: number;
    page: number;
  };
  sort: {
    field?: string | null;
    order?: 'DESC' | 'ASC' | null;
  };
  search?: string;
  filter: TFilter;
}

export type IMinMaxFilter = {
  min?: number | null;
  max?: number | null;
} | null;
