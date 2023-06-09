export interface IBookInfo {
  id?: number;
  isbn?: string;
  title?: string;
  cover?: string;
  author?: string;
  published?: number;
  pages?: number;
  status?: number;
  onDelete?: () => void;
  globalBooks?: boolean;
}
