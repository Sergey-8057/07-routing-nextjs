import Link from 'next/link';

import css from './TagsMenu.module.css';

export default function TagsMenu() {
  const tags: string[] = ['All', 'Work', 'Personal', 'Meeting', 'Shopping', 'Todo'];
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          {tags.map((tag, index) => (
            <Link key={index} href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}
