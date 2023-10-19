import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { styles } from './AddButtonStylesheet'
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'


export default function AddButton(){

    const [addFish] = useState(new Animated.Value(40));
    const [addLure] = useState(new Animated.Value(40));

    const [isMenuOpen, setMenuOpen] = useState(false);

    const openMenu = () =>{
        setMenuOpen(true);
        Animated.timing(addFish, {
            toValue: 200,
            duration: 200,
            useNativeDriver: false,
        }).start()
        Animated.timing(addLure, {
            toValue: 130,
            duration: 200,
            useNativeDriver: false,
        }).start()
    }

    const closeMenu = () =>{
        setMenuOpen(false);
        Animated.timing(addFish, {
            toValue: 40,
            duration: 200,
            useNativeDriver: false,
        }).start()
        Animated.timing(addLure, {
            toValue: 40,
            duration: 200,
            useNativeDriver: false,
        }).start()
    }

    return (
        <View style={styles.mainContainer}>
            <Animated.View style={[styles.circleButton, {bottom: addFish}]}>
                <TouchableOpacity>
                    <Icon testID='fish-fins-icon' name='book' size={35} color='black'/>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.circleButton, {bottom: addLure}]}>
                <TouchableOpacity>
                    <Icon testID='lure-icon' name='superpowers' size={35} color='black'/>
                </TouchableOpacity>
            </Animated.View>
            
            <TouchableOpacity
            style={styles.circleButton}
            onPress={() => {
                isMenuOpen === false ? openMenu() : closeMenu()
            }
            }
            >
                <Icon testID='plus-icon' name={isMenuOpen ? 'minus' : 'plus'} size={40} color='black'></Icon>
            </TouchableOpacity>
        </View>
    )
}