// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Content.module.scss';
import Tags from '../Tags';

type Props = {
  body: string,
  date: string;
  title: string,
  readingTime: string,
  tags: Array<Object>,
  tagSlugs: Array<Object>
};

const Content = ({
  body, date, title, readingTime, tags, tagSlugs
}: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__tags']}>{tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}</div>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
