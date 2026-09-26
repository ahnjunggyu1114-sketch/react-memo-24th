import SearchIcon from './icons/SearchIcon';

function EmptySearch() {
  return (
    <section className="flex h-[710px] w-full items-center justify-center rounded-[24px] border-2 border-dashed border-[#001B51]">
      <div className="flex flex-col items-center">
        {/* 검색 아이콘 */}
        <div className="flex h-[96px] w-[96px] items-center justify-center rounded-[48px] bg-[#001B51]">
          <SearchIcon className="text-gray-100" />
        </div>

        {/* 검색 결과 없음 */}
        <p className="mt-[20px] text-center text-[14px] leading-[20px] font-normal text-[#001B51]">
          검색 결과가 없습니다
        </p>

        {/* 안내 문구 */}
        <p className="mt-[8px] text-center text-[14px] leading-[20px] font-normal text-[#677B93]">
          다른 검색어로 다시 시도해보세요
        </p>
      </div>
    </section>
  );
}

export default EmptySearch;
