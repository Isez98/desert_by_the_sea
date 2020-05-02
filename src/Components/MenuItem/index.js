import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../App/App.css';
import propTypes from 'prop-types';

const MenuItem = (props) => {
  const history = useHistory();

  function handleClick() {
    history.push(props.path);
  }
  return (
    <div className="travelbar" onClick={handleClick}>
      {`${props.text}`}
    </div>
  );
};

MenuItem.propTypes = {
  props: propTypes.object,
  path: propTypes.string,
  text: propTypes.string
};

export default MenuItem;
