import styled from 'styled-components/native';
import IconFont from 'react-native-vector-icons/FontAwesome';

import { metrics, fonts, colors } from '../../styles';

export const Container = styled.View`
    background-color: ${colors.white};
    height: ${metrics.headerHeight}px;
    padding: ${metrics.padding}px;
    border-bottom-width: 1px;
    border-color: ${colors.lighter};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Icon = styled(IconFont)`
    color: ${colors.primary};
`;

export const Text = styled.Text`
    font-size: ${fonts.big}px;
`;
