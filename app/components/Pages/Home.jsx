import React from 'react';
import ViewSources from '../News/ViewSources';
import ViewNews from '../News/ViewNews';

const Home = () => {
  return (
    <div>
      <div className="row">
        <ViewSources />
      </div>
      <ViewNews />
    </div>
  );
};

module.exports = Home;
