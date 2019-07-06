import React from 'react';
import './home-page.styles.scss';

import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

const HomePage = props => {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
