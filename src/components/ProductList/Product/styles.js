import styled from 'styled-components/native';
import IconFont from 'react-native-vector-icons/FontAwesome';

import { metrics, fonts, colors } from '../../../styles';

export const Container = styled.View`
    background-color: ${colors.white};
    border-radius: 3px;
    margin-bottom: ${metrics.padding}px;
    width: ${props => (props.width - 45) / 2}px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100px;
`;

export const Title = styled.Text`
    text-align: center;
    font-weight: bold;
    color: ${colors.darker};
`;

export const Description = styled.Text`
    text-align: center;
    color: ${colors.dark};
    font-size: ${fonts.smaller}px;
`;

export const Price = styled.Text`
    text-align: center;
    color: ${colors.light};
    font-size: ${fonts.regular}px;
    margin-top: 5px;
`;

export const InfoContainer = styled.View`
    border-top-width: 1px;
    border-color: ${colors.lighter};
    padding: ${metrics.padding}px;
`;

export const ImageContainer = styled.View`
    padding: ${metrics.padding}px;
`;

export const Icon = styled(IconFont)`
    position: absolute;
    right: ${metrics.padding}px;
    top: ${metrics.padding}px;
    color: ${colors.primary};
    z-index: 1;
`;