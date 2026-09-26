import PlusIcon from './icons/PlusIcon';

function EmptyMemo() {
  return (
    <section className="flex h-[710px] items-center justify-center rounded-[24px] border-2 border-dashed border-[#AAC8FF]">
      <div className="flex flex-col items-center gap-[28px]">
        <button
          type="button"
          className="flex h-[120px] w-[120px] cursor-pointer items-center justify-center rounded-[75px] bg-[#AAC8FF]"
          aria-label="새 메모 작성"
        >
          <PlusIcon className="text-gray-100" />{' '}
        </button>

        <p className="text-[24px] leading-[32px] font-semibold text-[#AAC8FF]">
          새로운 메모를 작성해보세요!
        </p>
      </div>
    </section>
  );
}

export default EmptyMemo;
