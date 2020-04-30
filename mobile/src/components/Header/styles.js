import styled from 'styled-components/native';

import colors from '../../styles/colors';
import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  align-items: center;
  width: 380px;
`;

export const LogoContainer = styled.TouchableOpacity`
  width: 185px;
  height: 24px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const CartContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
