import Link from 'next/link';

import css from './SidebarNotes.module.css';

const SidebarNotes = async () => {
  const tags: string[] = ['All', 'Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];
  return (
    <ul className={css.menuList}>
      {tags.map((tag, index) => (
        <li key={index} className={css.menuItem}>
          <Link
            href={`/notes/filter/${tag}`}
            className={css.menuLink}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;
