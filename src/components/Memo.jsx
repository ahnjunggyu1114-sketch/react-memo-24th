import Star from '../assets/Star.svg';
import StarRed from '../assets/Star_red.svg';
import { TAG_COLORS } from '../constants/tagColors';

function Memo({
  memoId,
  title,
  content,
  tag,
  date,
  isImportant,
  onToggleImportant,
  onMemoClick,
}) {
  return (
    <article
      className="flex h-[285px] w-[285px] flex-col rounded-[20px] px-[20px] py-[12px] text-[#FAFAFA]"
      style={{ backgroundColor: TAG_COLORS[tag] }}
      onClick={() => onMemoClick(memoId)}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === 'Enter') {
          event.preventDefault();
          onMemoClick(memoId);
        }
      }}
    >
      <div className="flex items-start justify-between">
        <h2 className="text-[20px] line-clamp-1 leading-[28px] font-bold">
          {title}
        </h2>

        <button
          type="button"
          className="shrink-0 cursor-pointer"
          onClick={(event) => {
            event.stopPropagation(); // 나중에 모달 생성과 충돌할까봐 넣어 놨습니다. (지금 당장은 의미 없음 ㅇㅅㅇ)
            onToggleImportant(memoId);
          }}
        >
          <img
            src={isImportant ? StarRed : Star}
            alt={isImportant ? '중요 메모' : '일반 메모'}
          />
        </button>
      </div>

      <p className="mt-[12px] line-clamp-7 text-[14px] leading-[20px] font-normal">
        {content}
      </p>

      <div className="mt-auto flex items-center justify-between pt-[20px] text-[14px] leading-[20px] font-normal">
        <span>{tag}</span>
        <span>{date}</span>
      </div>
    </article>
  );
}

export default Memo;
