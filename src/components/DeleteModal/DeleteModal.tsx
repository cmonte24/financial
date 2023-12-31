import React, { FC } from 'react';
import { IModal } from '../../types/modal';
import { Dialog } from '@headlessui/react';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

interface DeleteModalProps {
  handleClose: () => void;
  modal: IModal;
}

const DeleteModal: FC<DeleteModalProps> = ({
  modal: { title, action, body },
  handleClose,
}) => {
  const { t } = useTranslation();
  const handleDelete = async () => {
    if (!action) return;
    await action();
    handleClose();
  };

  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900 mb-2"
      >
        {title}
      </Dialog.Title>
      <div className={'flex flex-col gap-4'}>
        <p>{body}</p>
        <div className={'flex flex-row gap-2'}>
          <Button label={t('delete')} onClick={handleDelete} />
          <Button label={t('close')} onClick={handleClose} />
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
