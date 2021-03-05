import React from 'react';
import Button from './Button'

const NotFound = () => (
  <div className="not-found">
    <h1>Woops, looks like this page doesn't exist.</h1>
    <Button href="/" icon="home" classKey="not-found__home" link={true} />
  </div>
);

export default NotFound;