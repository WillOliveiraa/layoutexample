import styled from 'styled-components/native';

import { metrics, fonts, colors } from '../../styles';

export const Container = styled.View`
    background-color: ${colors.white};
    padding: ${metrics.padding}px;
    border-bottom-width: 1px;
    border-color: ${colors.lighter};
    flex-direction: row;
`;

export const Avatar = styled.Image`
    width: 68px;
    height: 68px;
    border-radius: 34px;
    margin-right: ${metrics.padding}px;
`;

export const ProfileInfo = styled.View`
    flex: 1;
`;

export const Name = styled.Text`
    font-weight: bold;
    font-size: ${fonts.big}px;
    color: ${colors.darker};
    margin-top: 5px;
`;

export const Bio = styled.Text`
    font-size: ${fonts.regular}px;
    color: ${colors.regular};
    margin-top: 5px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;
    /* justify-content: space-between */
`;