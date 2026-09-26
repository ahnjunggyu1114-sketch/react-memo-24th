import { useEffect, useRef } from 'react';

interface NetworkErrorModalProps {
  onClose: () => void;
}

function NetworkErrorModal({ onClose }: NetworkErrorModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    return () => {
      if (dialog?.open) {
        dialog.close();
      }
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      className="fixed inset-0 m-auto h-[240px] w-[480px] max-h-none max-w-none flex-col items-center justify-between rounded-[24px] border-0 bg-gray-100 px-[32px] pt-[48px] pb-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop:bg-[#001B51]/50 open:flex"
    >
      <div className="flex flex-col items-center gap-[20px]">
        <h2 className="text-heading-medium font-bold text-blue-700">
          네트워크 연결이 불안정합니다
        </h2>
        <p className="text-body-small text-gray-500">
          네트워크 상태를 확인해주세요
        </p>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="h-[56px] cursor-pointer self-stretch rounded-[12px] bg-blue-500 px-[24px] text-action-medium font-bold text-gray-100"
      >
        확인
      </button>
    </dialog>
  );
}

export default NetworkErrorModal;
