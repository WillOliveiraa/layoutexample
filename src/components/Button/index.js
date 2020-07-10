import React from 'react';

import { Container, Text } from './styles';

const Button = ({ children, type, first }) => {
    return (
    <Container outline={type ? `button-${type}` : null} first={first}>
        <Text outline={type ? `text-${type}`: null}>{children}</Text>
    </Container>
    );
}

export default Button;