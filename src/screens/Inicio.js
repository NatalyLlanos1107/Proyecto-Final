import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import ListaPlatos from "../components/Inicio/ListaPlatos";
import Contactos from "../components/Inicio/Contactos";
import Ubicacion from "../components/Inicio/Ubicacion";
export default function Inicio() {
  const [click1, setclick1] = useState(true);
  const [click2, setclick2] = useState(false);
  const [click3, setclick3] = useState(false);
  const seleccion = (btn) => {
    limpiarSeleccion();
    switch (btn) {
      case 1:
        setclick1(true);
        break;
      case 2:
        setclick2(true);
        break;
      case 3:
        setclick3(true);
        break;
    }
  };
  const limpiarSeleccion = () => {
    setclick1(false);
    setclick2(false);
    setclick3(false);
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          source={require("../imgs/ban.jpg")}
          style={styles.banner}
          resizeMode="stretch"
        />
        <View style={styles.ContextBanner}>
          <Image source={require("../imgs/marcador.png")}></Image>
          <Text style={styles.textBanner}>Av. Arce #2549, La Paz, Bolivia</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.h1}>TIPO DE RESERVA</Text>
        <Text style={styles.h2}>MESA DE 1 A 10 PERSONAS</Text>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.textButton}>GENERAL</Text>
        </TouchableOpacity>
        <Text style={styles.h2}>MESAS PARA EVENTOS SOCIALES</Text>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.textButton}>ESPECIAL</Text>
        </TouchableOpacity>
        <View style={styles.BarraOpc}>
          <TouchableOpacity style={styles.btnOpc} onPress={() => seleccion(1)}>
            <Text
              style={[styles.textOpc, click1 ? styles.select : styles.none]}
            >
              Menú
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOpc} onPress={() => seleccion(2)}>
            <Text
              style={[styles.textOpc, click2 ? styles.select : styles.none]}
            >
              Ubicación
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOpc} onPress={() => seleccion(3)}>
            <Text
              style={[styles.textOpc, click3 ? styles.select : styles.none]}
            >
              Contactos
            </Text>
          </TouchableOpacity>
        </View>
        {click1 && (
          <ListaPlatos></ListaPlatos>
        
        )}
        {
          click2 &&(
          <Ubicacion></Ubicacion>)
        }
        {
          click3 &&(
          <Contactos></Contactos>)
        }
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D3232",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    paddingTop: "10%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  h1: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 20,
  },
  bannerContainer: {
    width: "100%",
    height: "19%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  textBanner: {
    fontSize: 19,
    fontWeight: "600",
  },
  ContextBanner: {
    paddingLeft: 20,
    paddingVertical: 4,
    flexDirection: "row",
    backgroundColor: "#F5E8A5",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  h2: {
    color: "#fff",
    fontWeight: 400,
    fontSize: 18,
    margin: 12,
  },
  textButton: {
    fontWeight: 400,
    fontSize: 16,
  },
  Button: {
    fontWeight: 400,
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 15,
  },
  BarraOpc: {
    marginVertical: 8,
    flexDirection: "row",
    width: "100%",
  },
  btnOpc: {
    flex: 1,
    borderWidth: 2,
  },
  textOpc: {
    textAlign: "center",
    fontSize: 19,
    padding: 4,
    fontWeight: "600",
  },
  select: {
    backgroundColor: "#CD3131",
    color: "#fff",
  },
  none: {
    backgroundColor: "#D9D9D9",
  },
});
