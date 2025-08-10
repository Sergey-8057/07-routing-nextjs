import Link from 'next/link';

import css from './SidebarNotes.module.css';

const SidebarNotes = async () => {
  const tags: string[] = ['All', 'Work', 'Personal', 'Meeting', 'Shopping', 'Todo'];
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        {tags.map((tag, index) => (
          <Link key={index} href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default SidebarNotes;
