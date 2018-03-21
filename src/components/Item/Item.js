import React from 'react';

import './Item.css';

import type { ItemT } from '../../store/modules/items';

type PropsT = Array<ItemT>;

export default function Item(props: PropsT) {
  return (
    <div className="item_container" key={props.item_id}>
      <div className="item__category">{props.item.category}</div>
      <div className="item__product">{props.item.product}</div>
      <div className="item__color" style={{backgroundColor:props.item.color }}></div>
      <div className="item__price">${props.item.price}</div>
    </div>
  );
}


