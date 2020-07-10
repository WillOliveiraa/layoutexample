import React from 'react';

import { Container, Icon, Main } from './styles';

const Tabs = () => {
    return (
        <Container>
            <Icon name='clone' size={16} active />
            <Icon name='search' size={16} />
            <Main>
                <Icon name='plus' size={16} style={{ color: 'white' }} />
            </Main>
            <Icon name='bell-o' size={16} />
            <Icon name='user-o' size={16} />
        </Container>
    );
}

export default Tabs;