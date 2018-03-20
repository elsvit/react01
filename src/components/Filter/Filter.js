import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Filter.css';

// import type {} from '../../../store/index';


type FieldT = {
  [key: string]: boolean,
}

type PropsT = {
  fields: { [key: string]: Array<FieldT> },
  openedField: ?string,
  onChange: () => {},
  onClickField: () => {},
}

export default function FilterHeader(props: PropsT) {
  return (
    <div className="filterHeader">
      <div className="filterHeader__wrapper">
        <div className="filterHeader__title">
          Filter:
        </div>
        {
          props.fields ? (
            Object.keys(props.fields).map(field => {
              const arr = props.fields[field];
              return (
                <div
                  className="filterHeader__menuField"
                  key={field}
                >
                  <div
                    className="menuField__text"
                    onClick={() => {
                      props.onClickField(field);
                    }}
                  >
                    {field.toUpperCase()}
                  </div>
                  <div className="menuField__dropdown--wrapper">
                    <div
                      className="menuField__dropdown"
                      onClick={() => {
                        props.onClickField(field);
                      }}
                    ></div>
                  </div>
                  {
                    props.openedField === field ? (
                      <div className="menuField__options">
                        {
                          arr.map((option, ind2) => {
                            const key = `option${ind2}`;
                            return (
                              <div
                                className="options__option"
                                key={key}
                                onClick={() => {
                                  props.onChange(field, ind2);
                                }}
                              >
                                <div className="option__value">
                                  <input
                                    type="checkbox"
                                    checked={option.checked}
                                    onChange={() => {
                                    }}
                                  />
                                </div>
                                <div className="option__name">{option.option}</div>
                              </div>
                            );
                          })
                        }
                      </div>
                    ) : null
                  }

                </div>
              );
            })
          ) : null
        }
        <div className="filterHeader__emptyend"></div>
      </div>
    </div>
  );
}


