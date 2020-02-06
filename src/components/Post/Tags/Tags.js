// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Tags.module.scss';
import Icon from '../../Icon';
import getIcon from '../../../utils/get-icon';

type Props = {
  tags: string[],
  tagSlugs: string[]
};

const Tags = ({ tags, tagSlugs }: Props) => (
  <div className={styles['tags']}>
    <ul className={styles['tags__list']}>
      {tagSlugs && tagSlugs.map((slug, i) => (
        <li className={styles['tags__list-item']} key={tags[i]}>
          <Link to={slug} className={styles['tags__list-item-link']}>
            <Icon icon={getIcon('tag')}/>
            {tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
