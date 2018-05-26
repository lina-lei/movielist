import React from 'react';
import HorrorListItem from './HorrorListItem.jsx';

const HorrorList = (props) => (
  <div>
    {props.horror.map(hmovie => {
      return <HorrorListItem hmovie={hmovie}/>
    })}
  </div>
)

export default HorrorList;