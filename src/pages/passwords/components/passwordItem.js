import React from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"



export function PasswordItem({data, removePassword}) {

    return(
        <View>
            <Pressable onLongPress={removePassword} style={styles.container}>
                <Text style={styles.text}>
                    {data}
                </Text>
            </Pressable>
        </View>
    );
    
};


const styles = StyleSheet.create({

    container: { 
        backgroundColor: "#0E0E0E",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text:{
        color: "#fff"
    }
})