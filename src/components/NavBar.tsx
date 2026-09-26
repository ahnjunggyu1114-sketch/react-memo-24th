import { type SubmitEvent, useState } from 'react';

import { TAG_COLORS } from '../constants/tagColors';
import type { TagFilter } from '../types/memo';
import PlusIcon from './icons/PlusIcon';
import ProfileIcon from './icons/ProfileIcon';
import SearchIcon from './icons/SearchIcon';
import TagIcon from './icons/TagIcon';

interface NavBarProps {
  selectedTag: TagFilter;
  onTagChange: (tag: TagFilter) => void;
  onSearch: (query: string) => void;
}

function Navbar({ selectedTag, onTagChange, onSearch }: NavBarProps) {
  // 태그 선택 상태
  const [isTagOpen, setIsTagOpen] = useState(false);
  // 검색어 입력 상태
  const [searchInput, setSearchInput] = useState('');

  const handleTagSelect = (tag: TagFilter) => {
    onTagChange(tag);
    setIsTagOpen(false);
  };

  const handleSearch = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchInput);
  };

  return (
    <nav className="flex h-[80px] w-full items-center gap-[16px]">
      {/* 왼쪽 검색 영역 */}
      <div className="flex h-full  min-w-[380px] flex-1 items-center gap-[12px] rounded-[28px] bg-[#FAFAFA] p-[16px]">
        <div className="relative shrink-0">
          <button
            className={`flex h-[48px] cursor-pointer shrink-0 items-center  rounded-[36px] bg-[#E4EDFF] ${
              selectedTag === 'All'
                ? 'gap-[8px] px-[16px]'
                : 'gap-[12px] pr-[24px] pl-[12px]'
            }`}
            onClick={() => setIsTagOpen(!isTagOpen)}
          >
            {selectedTag === 'All' ? (
              <>
                <span className=" text-[16px] leading-[24px] font-extrabold text-[#001B51]">
                  태그 선택
                </span>
                <TagIcon className="text-blue-700" />
              </>
            ) : (
              <>
                <span
                  className="h-[24px] w-[24px] shrink-0 rounded-full"
                  style={{ backgroundColor: TAG_COLORS[selectedTag] }}
                />

                <span
                  className="text-[16px] leading-[24px] font-extrabold"
                  style={{ color: TAG_COLORS[selectedTag] }}
                >
                  {selectedTag}
                </span>
              </>
            )}
          </button>

          {isTagOpen && (
            <div className="absolute top-0 left-full ml-[10px] flex w-[116px] flex-col overflow-hidden rounded-[16px] bg-[#E4EDFF] ">
              <button
                onClick={() => handleTagSelect('All')}
                className="cursor-pointer px-[16px] py-[12px] text-left"
              >
                전체보기
              </button>

              <button
                onClick={() => handleTagSelect('Daily')}
                className="cursor-pointer px-[16px] py-[12px] text-left "
                style={{ color: TAG_COLORS.Daily }}
              >
                Daily
              </button>

              <button
                onClick={() => handleTagSelect('Work')}
                className="cursor-pointer px-[16px] py-[12px] text-left "
                style={{ color: TAG_COLORS.Work }}
              >
                Work
              </button>

              <button
                onClick={() => handleTagSelect('Others')}
                className="cursor-pointer px-[16px] py-[12px] text-left "
                style={{ color: TAG_COLORS.Others }}
              >
                Others
              </button>
            </div>
          )}
        </div>

        <form
          onSubmit={handleSearch}
          className="flex min-w-[220px] flex-1 items-center gap-[12px]"
        >
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="원하는 메모를 검색하세요"
            className="min-w-0 flex-1 bg-transparent outline-none"
          />

          <button
            type="submit"
            aria-label="검색"
            className="shrink-0 cursor-pointer"
          >
            <SearchIcon className="text-blue-700" />
          </button>
        </form>
      </div>

      {/* 오른쪽 버튼 영역 */}
      <div className="flex gap-[10px]">
        {/* + 버튼 */}
        <button
          aria-label="메모 추가"
          className="flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[40px] bg-[#FAFAFA] p-[24px]"
          onClick={() => alert('메모 추가 기능은 준비 중입니다.')}
        >
          <PlusIcon className="text-blue-700" />
        </button>
        {/* 사람 버튼 */}
        <button
          aria-label="프로필"
          className="flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[40px] bg-[#FAFAFA] p-[24px]"
          onClick={() => alert('프로필 기능은 준비 중입니다.')}
        >
          <ProfileIcon className="text-blue-700" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
