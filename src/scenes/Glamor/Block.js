import React from 'react';
import classnames from 'classnames';
import { css } from 'glamor';
import colors from '../../utils/colors';

const blockRule = css({
  minWidth: '16px',
  height: '16px',
  display: 'inline-block',
  textAlign: 'center',
  padding: '15px',
  border: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'black !important',
    color: 'white',
  },
});

const cache = new Map();
const getCSS = (isPrimary, i) => {
  const isPrimaryKey = isPrimary.toString();

  if (!cache[i]) {
    cache[i] = {};
  }

  if (!cache[i][isPrimaryKey]) {
    cache[i][isPrimaryKey] = css({
      backgroundColor: isPrimary ? colors[i][1] : colors[i][0],
    });
  }

  return cache[i][isPrimaryKey];
};

const Block = ({ i, isPrimary, className, classes, children }) => {
  // There is no way to make dynamic styles with glamor
  // Only create css in components render method
  const backgroundRule = getCSS(isPrimary, i);

  return (
    <div
      className={classnames(
        className,
        blockRule.toString(),
        backgroundRule.toString()
      )}
    >
      {children}
    </div>
  );
};

export default Block;
