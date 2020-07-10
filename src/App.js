import React from 'react';
import { ScrollView } from 'react-native';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList';
import Tabs from './components/Tabs';

import { Container } from './styles/global';

export default function App() {
    return (
        <Container>
            <Header />
            <ScrollView>
                <SubHeader />
                <ProductList />
            </ScrollView>
            <Tabs />
        </Container>
    );
};
