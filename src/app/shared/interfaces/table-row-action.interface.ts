export enum TABLE_ROW_ACTIONS {
  NONE,
  DELETE,
  EDIT
}

export interface TableRowAction<T = any> {
  item: T;
  action: TABLE_ROW_ACTIONS
}
