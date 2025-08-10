'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { fetchNoteById } from '@/lib/api';
import Modal from '@/components/Modal/Modal';
import type { Note } from '@/types/note';
import css from './NotePreview.module.css';

const NotePreviewModal = () => {
  const router = useRouter();
  const params = useParams();
  const raw = params.id;
  const noteId = Array.isArray(raw) ? raw[0] : raw;

  const {
    data: note,
    isLoading,
    error,
  } = useQuery<Note, Error>({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId!),
    enabled: !!noteId,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  if (!noteId) {
    return null;
  }
  if (isLoading) return <p>Loading, please wait...</p>;
  if (error) return <p>Something went wrong.</p>;
  if (!note) return <p>Note not found.</p>;

  const formattedDate = note.updatedAt
    ? `Updated at: ${new Date(note.updatedAt).toLocaleDateString()}`
    : `Created at: ${new Date(note.createdAt).toLocaleDateString()}`;

  return (
    <Modal onClose={() => router.back()}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.date}>{formattedDate}</p>
        </div>
        <button className={css.backBtn} onClick={() => router.back()}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default NotePreviewModal;
