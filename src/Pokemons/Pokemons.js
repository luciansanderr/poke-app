import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Detalhes from "../Detalhes/Detalhes.js";

export default function Pokemons({data}) {

    const[boModal, setBoModal] = useState(false);

    function abrirDetalhes(){
        setBoModal(true);
    }

    return (
        <View style={styles.card}>
            <Text style={styles.nome}>{data.name}</Text>
            <TouchableOpacity style={styles.btn} onPress={abrirDetalhes}><Text style={{fontWeight: "800"}}>Saiba Mais</Text></TouchableOpacity>
            
            <Modal visible={boModal} transparent={true} animationType="slide"
            >
                <Detalhes data={data} sair={() => setBoModal(false)}></Detalhes>
            </Modal>
        </View>
    );
}
const styles = new StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },  
    img: {
        height: 250,
        zIndex: 1
    },
    nome: {
        fontSize: 20,
        padding: 10
    },
    btn: {
        borderWidth: 2,
        justifyContent: "center",
        padding: 5,
        backgroundColor: '#2f8ce2'
    }
})