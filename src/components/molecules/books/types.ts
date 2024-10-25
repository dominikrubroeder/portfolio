export interface Book {
  title: string;
  author: string;
  href: string | undefined;
  new: boolean | undefined;
  progress: number;
}
