import React from 'react';

/**
 * Class to display the share component.
 * @extends React.Component
 * @return {*} return the loader.
 */
const Loading = () => (
  <div className="row center">
    <div className="col m10 s4 offset-m1">
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-green-only">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loading;
