export interface ILocationParams<T> {
  pathname: string;
  state: T;
  search: string;
  hash: string;
  key: string;
}