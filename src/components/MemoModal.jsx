import X from '../assets/X.svg';
import Edit from '../assets/Edit.svg';
import Trash from '../assets/Trash.svg';

import { TAG_COLORS } from '../constants/tagColors';

function MemoModal({ memo, onClose }) {
  const { title, content, tag, date } = memo;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#001B51]/50">
      <article
        className="relative flex h-[556px] w-[556px] flex-col rounded-[20px] px-[44px] py-[40px] text-[#FAFAFA]"
        style={{ backgroundColor: TAG_COLORS[tag] }}
      >
        {/* 제목 + 닫기 */}
        <div className="flex items-start justify-between">
          <div className="min-w-0 text-[32px] leading-[40px] font-bold">
            {title}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="shrink-0 cursor-pointer"
          >
            <img src={X} alt="닫기" className="h-[32px] w-[32px]" />
          </button>
        </div>

        {/* 태그 + 날짜 */}
        <div className="mt-[24px] flex items-center">
          <div className="flex h-[40px] items-center gap-[12px] rounded-[28px] bg-[#E4EDFF] pr-[24px] pl-[12px]">
            <span
              className="h-[20px] w-[20px] rounded-full"
              style={{ backgroundColor: TAG_COLORS[tag] }}
            />

            <span
              className="text-[18px] leading-[28px] font-extrabold"
              style={{ color: TAG_COLORS[tag] }}
            >
              {tag}
            </span>
          </div>

          <div className="mx-[24px] h-[44px] w-[2px] bg-[#FAFAFA]" />

          <span className="text-[20px] leading-[28px] font-bold">{date}</span>
        </div>

        {/* 본문 */}
        <p className="mt-[32px] text-[18px] leading-[28px] font-medium">
          {content}
        </p>

        {/* 수정 / 삭제 */}
        <div className="mt-auto flex justify-end gap-[12px]">
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => alert('수정 기능은 준비 중입니다.')}
          >
            <img src={Edit} alt="메모 수정" className="h-[32px] w-[32px]" />
          </button>

          <button
            type="button"
            className="cursor-pointer"
            onClick={() => alert('삭제 기능은 준비 중입니다.')}
          >
            <img src={Trash} alt="메모 삭제" className="h-[32px] w-[32px]" />
          </button>
        </div>
      </article>
    </div>
  );
}

export default MemoModal;
