import styled from 'styled-components/native';
import IconFont from 'react-native-vector-icons/FontAwesome';

import { metrics, colors } from '../../styles';

export const Container = styled.View`
    background-color: rgba(255, 255, 255, 0.5);
    height: ${metrics.tabBarHeight}px;
    flex-direction: row;
    border-top-width: 1px;
    border-color: ${colors.lighter};
    justify-content: space-around;
    align-items: center;
`;

export const Icon = styled(IconFont)`
    color: ${props => props.active ? colors.primary : colors.light};
`;

export const Main = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${colors.primary};
    justify-content: center;
    align-items: center;
`;