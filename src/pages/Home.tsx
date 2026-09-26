import { useEffect, useState } from 'react';

import EmptyMemo from '../components/EmptyMemo';
import EmptySearch from '../components/EmptySearch';
import MemoList from '../components/MemoList';
import MemoModal from '../components/MemoModal';
import NavBar from '../components/NavBar';
// 목데이터로 확인
import { MockDataMemo } from '../data/MockDataMemo';
import type { MemoItem, TagFilter } from '../types/memo';

const Home = () => {
  const [memos, setMemos] = useState<MemoItem[]>(() => {
    const savedMemos = localStorage.getItem('memos');
    return savedMemos ? JSON.parse(savedMemos) : MockDataMemo;
  });

  useEffect(() => {
    localStorage.setItem('memos', JSON.stringify(memos));
  }, [memos]);

  // 네브바의 태그 선택
  const [selectedTag, setSelectedTag] = useState<TagFilter>('All');
  // 네브바의 검색어 입력
  const [searchQuery, setSearchQuery] = useState('');
  // 모달 상태 관리
  const [selectedMemoId, setSelectedMemoId] = useState<number | null>(null);

  const filteredMemos = memos.filter((memo) => {
    const matchesTag = selectedTag === 'All' || memo.tag === selectedTag;
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      query === '' ||
      memo.title.toLowerCase().includes(query) ||
      memo.content.toLowerCase().includes(query);

    return matchesTag && matchesSearch;
  });

  // 별표 누르는 함수 추가
  const handleToggleImportant = (id: number) => {
    setMemos((prevMemos) =>
      prevMemos.map((memo) =>
        memo.id === id ? { ...memo, isImportant: !memo.isImportant } : memo
      )
    );
  };

  // 기존 정렬 방식이 O(n^2)에 가까운 방식이라 바꿈.
  const importantMemos = filteredMemos.filter((memo) => memo.isImportant);
  const normalMemos = filteredMemos.filter((memo) => !memo.isImportant);

  // 모달 선택
  const selectedMemo = memos.find((memo) => memo.id === selectedMemoId);

  return (
    <main className="min-h-screen w-full bg-[#E4EDFF] px-[120px] pt-[72px] pb-[86px]">
      <div className="flex  w-full flex-col gap-[76px]">
        {/* NavBar */}
        <NavBar
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
          onSearch={setSearchQuery}
        />
        {/* Memo Content */}
        {memos.length === 0 ? (
          <EmptyMemo />
        ) : filteredMemos.length === 0 ? (
          <EmptySearch />
        ) : (
          <div className="flex flex-col gap-[20px]">
            <MemoList
              memos={importantMemos}
              onToggleImportant={handleToggleImportant}
              onMemoClick={setSelectedMemoId}
            />

            <MemoList
              memos={normalMemos}
              onToggleImportant={handleToggleImportant}
              onMemoClick={setSelectedMemoId}
            />
          </div>
        )}
      </div>
      {selectedMemo && (
        <MemoModal
          memo={selectedMemo}
          onClose={() => setSelectedMemoId(null)}
        />
      )}
    </main>
  );
};

export default Home;
