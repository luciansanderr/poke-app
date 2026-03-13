import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import Pokemons from "../../src/Pokemons/Pokemons.js";
import api from "../../src/services/api.js";

export default function App() {

    const[pokemons, setPokemons] = useState([]);
    const[boLoad, setBoLoad] = useState(true);

    useEffect(() => {

        async function carregarPekemons(){   
            const result = await api.get('pokemon');
            setPokemons(result.data.results);
        };
        setTimeout(() => {
            carregarPekemons();
            setBoLoad(false);
        }, 2000);
    }, [])

    if (boLoad) {
        return (
            <View style={styles.containerLoad}>
                <ActivityIndicator size="large"></ActivityIndicator>
                <Text style={{padding: 5}}>Carregando...</Text>
            </View>
        )
    }
    if (!boLoad) {
        return (
            <View style={styles.container}>
                <FlatList
                    data={pokemons}
                    renderItem={({item}) => <Pokemons data={item}/>}
                    keyExtractor={(item) => item.name}
                />
            </View>
        );
    }
}
const styles = new StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#ccc",
        margin: 10,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10
    },
    containerLoad: {
        flex:1,
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center"
    }
})