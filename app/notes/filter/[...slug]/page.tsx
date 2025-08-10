import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesPage({ params }: Props) {
  const { slug } = await params;
  const tag = slug[0];
  const search = '';
  const page = 1;
  const perPage = 12;
  const initialData = await fetchNotes(search, page, perPage, tag);

  return (
    <NotesClient initialData={initialData} initialSearch={search} initialPage={page} tag={tag} />
  );
}
