import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <button onClick={props.onClick}>{props.children}</button>;

Button.defaultProps = {
  children: 'salvar',
};

Button.PropTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;
