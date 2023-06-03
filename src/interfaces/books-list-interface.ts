export interface IBookInfo {
  id?: number;
  isbn?: string;
  title?: string;
  cover?: string;
  author?: string;
  published?: number;
  pages?: number;
  onEdit?: () => void;
  onDelete?: () => void;
}
