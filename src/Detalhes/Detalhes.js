import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Detalhes(props) {

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function carregarPokemons(){   
            const result = await axios.get(props.data.url);
            setPokemon(result.data);
        }
        carregarPokemons();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <Text style={{fontSize: 30, fontWeight: "800", textAlign: "center", padding: 5}}>Detalhes do Pokemon</Text>
                <Text style={{fontWeight: "900", marginLeft: 5}}>{pokemon?.name}:</Text>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={{uri: pokemon?.sprites?.other?.showdown?.front_shiny}}
                    ></Image>
                    <Text style={styles.tipo}>
                        Tipo: {pokemon?.types.map(item => item.type.name).join(', ')}
                    </Text>
                    <Text style={styles.tipo}>
                        Abilidades: {pokemon?.abilities?.map(item => item.ability.name).join(', ')}
                    </Text>
                </View>
                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btn} title="Sair" onPress={props.sair}>
                        <Text style={styles.btnSair}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = new StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        maxHeight: "60%"
    },
    modalContainer: {
        marginTop: 200,
        height: '90%',
        backgroundColor: '#c66969',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10
    },
    imgContainer: {
        alignItems: "center"
    },
    img: {
        width: 150,
        height: 150,
        resizeMode: "contain"   
    },
    tipo: {
        padding: 2,
        backgroundColor: '#ccc',
        width: '100%',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "600"
    },
    containerBtn: {
        alignItems: "center",
        padding: 10
    },
    btn: {
        backgroundColor: "#185ab7",
        borderRadius: 40,
        width: 100,
        height: 30
    },
    btnSair: {
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center"
    }
})  