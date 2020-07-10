import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../styles';
import { Container, Image, Title, Description, Price, InfoContainer, ImageContainer, Icon } from './styles';

const { width } = Dimensions.get('window');

const Product = ({ product: { image, title, description, price, favorite } }) => {
    return (
        <Container style={styles.container} width={width}>
            {!favorite && <Icon name={favorite ? 'circle' : 'check-circle'} size={24} />}
            <ImageContainer>
                <Image source={{ uri: image }} style={{ resizeMode: 'contain' }} />
            </ImageContainer>
            <InfoContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Price>{price}</Price>
            </InfoContainer>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        shadowColor: colors.light,
        shadowRadius: 2,
        shadowOpacity: 0.1,
        shadowOffset: { x: 0, y: 0 },
        elevation: 5,
    }
})

export default Product;