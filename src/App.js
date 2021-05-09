import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList';
import  Tabs from './components/Tabs';

export default function App() {
    return(
        <View style={styles.container}>
            <Header/>
            <ScrollView>
                <SubHeader/>
                <ProductList/>
            </ScrollView>
            <Tabs/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#798df2'
    }
});