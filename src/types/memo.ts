export type Tag = 'Daily' | 'Work' | 'Others';

// 네브바 필터용 (전체 보기 포함)
export type TagFilter = Tag | 'All';

export interface MemoItem {
  id: number;
  title: string;
  content: string;
  tag: Tag;
  date: string;
  isImportant: boolean;
}
