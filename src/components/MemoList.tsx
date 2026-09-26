import type { MemoItem } from '../types/memo';
import Memo from './Memo';

interface MemoListProps {
  memos: MemoItem[];
  onToggleImportant: (id: number) => void;
  onMemoClick: (id: number) => void;
}

function MemoList({ memos, onToggleImportant, onMemoClick }: MemoListProps) {
  return (
    <section className="grid grid-cols-[repeat(4,285px)] justify-center gap-[20px]">
      {memos.map((memo) => (
        <Memo
          key={memo.id}
          memoId={memo.id}
          title={memo.title}
          content={memo.content}
          tag={memo.tag}
          date={memo.date}
          isImportant={memo.isImportant}
          onToggleImportant={onToggleImportant}
          onMemoClick={onMemoClick}
        />
      ))}
    </section>
  );
}

export default MemoList;
