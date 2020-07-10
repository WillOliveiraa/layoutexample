import React from 'react';

import Button from '../Button';

import { Container, Avatar, ProfileInfo, Name, Bio, ButtonContainer } from './styles';

const SubHeader = () => {
    return (
        <Container>
            <Avatar source={{ uri: 'https://www.meiahora.com.br/_midias/jpg/2019/11/30/700x470/1_scarlett_johansson_2_e1574430293237-14538714.jpg'}} />
            <ProfileInfo>
                <Name>Scarlett Johansson</Name>
                <Bio>Editorial Director @sssense. Fashion addict & notorious shoe connossieur.</Bio>
                <ButtonContainer>
                    <Button first>Message</Button>
                    <Button type='outline'>Follow</Button>
                </ButtonContainer>
            </ProfileInfo>
        </Container>
    );
}

export default SubHeader;