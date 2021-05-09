import React from 'react';
import { View, Image, Text } from 'react-native';

import Button from '../Button';
import styles from './styles';

const SubHeader = () => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{ uri: 'https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1' }}
            />

            <View style={styles.profileInfo}>
                <Text style={styles.name}>João Paulo</Text>
                <Text style={styles.bio}>Programador, e estutande de tecnologia, paixão pelo JavaScript e React Native</Text>

                <View style={styles.buttonContainer}>
                    <Button>Messagem</Button>
                    <Button>Seguir</Button>
                </View>
            </View>
        </View>
    )
}

export default SubHeader;