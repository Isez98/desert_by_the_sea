import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../App/App.css';

const MenuItem = (props: any) => {
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

export default MenuItem;
