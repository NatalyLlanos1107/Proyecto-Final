import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
} from "react-native";
import React from "react";
import { platos } from "../../screens/platos";

export default function ListaPlatos() {
  const { width } = Dimensions.get("window");
  const emparejados = [];

  for (let i = 0; i < platos.length; i += 2) {
    const par = [platos[i], platos[i + 1]];
    emparejados.push(par);
  }

  const VistaPlato = ({ item }) => (
    <View style={[styles.bxList, { width: width * 1.0 }]}>
      <View style={[styles.columnContainer]}>
        <Image source={item[0].imagen} style={styles.image} />
        <View style={styles.contentBx}>
          <Text style={styles.textButton}>{item[0].titulo}</Text>
          <Text style={styles.descPlato}>{item[0].desc}</Text>
          <Text style={styles.precPlato}>Bs. {item[0].precio}</Text>
        </View>
      </View>
      <View style={[styles.columnContainer]}>
        <Image source={item[1].imagen} style={styles.image} />
        <View style={styles.contentBx}>
          <Text style={styles.textButton}>{item[1].titulo}</Text>
          <Text style={styles.descPlato}>{item[1].desc}</Text>
          <Text style={styles.precPlato}>Bs.{item[1].precio}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      data={emparejados}
      keyExtractor={(plato) => plato[0].id.toString()}
      renderItem={VistaPlato}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
  },
  columnContainer: {
    marginRight: 10,
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 62,
    resizeMode: "stretch",
    margin: 10,
    marginVertical: 23,
  },
  textButton: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 10,
  },
  bxList: {
    flex: 1,
    flexDirection: "column",
  },
  columnContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 15,
  },
  descPlato: {
    width: "65%",
  },
  precPlato: {
    fontSize: 16,
    backgroundColor: "#ff0000dd",
    width: 75,
    padding: 4,
    borderRadius: 15,
    textAlign: "center",
    color: "#fff",
    position: "absolute",
    bottom: 10,
    right: 21,
    textShadowColor:'#000',
  },
  contentBx: {
    flex: 1,
  },
});
