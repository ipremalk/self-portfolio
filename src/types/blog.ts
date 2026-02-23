export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedDate: Date;
  readTime: number;
  author: string;
  coverImage?: string;
}

export interface BlogFilter {
  category?: string;
  tag?: string;
  searchTerm?: string;
}
