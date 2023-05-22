import React from 'react';

import CreateItem from './CreateItem';
import Card from '../UI/Card';
import './Create.css';

const Create = (props) => {
  return (
    <Card className="create">
      <CreateItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <CreateItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <CreateItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <CreateItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Create;