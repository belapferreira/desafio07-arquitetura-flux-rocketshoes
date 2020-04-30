import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  LogoContainer,
  Logo,
  CartContainer,
  ItemCount,
} from './styles';

function Header({ navigate, cartSize }) {
  return (
    <Container>
      <LogoContainer onPress={() => navigate('Home')}>
        <Logo />
      </LogoContainer>

      <CartContainer onPress={() => navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{cartSize}</ItemCount>
      </CartContainer>
    </Container>
  );
}

Header.propTypes = {
  navigate: PropTypes.func.isRequired,
  cartSize: PropTypes.number.isRequired,
};

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
