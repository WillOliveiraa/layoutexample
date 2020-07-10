import styled from 'styled-components/native';

import { metrics, fonts, colors } from '../../styles';

export const Container = styled.TouchableOpacity`
    height: 31px;
    background-color: ${props => props.outline !== null ? colors.white : colors.primary};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    padding: ${metrics.padding}px;

    border-width: ${props => props.outline !== null ? 1 : 0}px;
    border-color: ${props => props.outline !== null ? colors.primary : colors.white };
    margin-right: ${props => props.first !== null ? 10 : 0}px;
`;

export const Text = styled.Text`
    color: ${props => props.outline !== null ? colors.primary : colors.white };
    font-weight: bold;
    font-size: ${fonts.small}px;
`;
