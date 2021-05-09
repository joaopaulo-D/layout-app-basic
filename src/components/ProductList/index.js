import React, { Component } from 'react';
import { View } from 'react-native';
import Product from './Product';

import styles from './styles';

export default class index extends Component {
    state = {
        products : [
            {
                id: 1,
                image: 'https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png',
                title: 'React Native',
                description: 'Paixão',
                price: '',
              },
              {
                id: 2,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                title: 'JavaScript',
                description: 'Melhor Linguagem',
                price: '',
              },
              {
                id: 3,
                image: 'https://miro.medium.com/max/5120/1*mp91A9RzagntGGjBnwu4Yw.png',
                title: 'NodeJS',
                description: 'Back-end',
                price: '',
              },
              {
                id: 4,
                image: 'https://reactjs.org/logo-og.png',
                title: 'ReactJS',
                description: 'Front-end',
                price: '',
              }
        ]
    };

    render() {
      return(
         <View style={styles.container}>
           { this.state.products.map(product => <Product key={product.id} product={product} />) }
        </View>
      )
    }
}