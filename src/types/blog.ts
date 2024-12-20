export type BlogCategory = "golf" | "tennis" | "swimming" | "fitness";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: BlogCategory;
}