// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <p>
          This site is open-source.
          <br/>
          You can view its source <a href="https://github.com/zach-albia/zach-albia.github.io/tree/src"> here</a>.
        </p>
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
