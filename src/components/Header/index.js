import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// Icon.loadFont();

import { Container, Icon, Text } from './styles';

const Header = () => {
    return (
        <Container>
            <Icon name='angle-left' size={24} />
            {/* <Icon name='rocket' size={30} color='#900' /> */}
            <Text>Profile</Text>
            {/* <Icon name='ios-more' size={24} /> */}
            <Icon name='ellipsis-h' size={24} />
        </Container>
    );
}

export default Header;