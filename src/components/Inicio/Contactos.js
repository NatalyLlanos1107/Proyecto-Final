import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";

export default function Contactos() {
  const { width } = Dimensions.get("window");
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={[styles.inf, { width: width * 1 }]}>
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={require("../../imgs/time.png")}
          ></Image>
          <Text style={[styles.textContact, { fontSize: 16 }]}>
            08-00 a 22-00 , Todos los días de la semana
          </Text>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={require("../../imgs/call.png")}
          ></Image>
          <Text style={styles.textContact}>2 2424188</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.bx}>
            <Image
              style={styles.msj}
              source={require("../../imgs/msj.png")}
            ></Image>
          </View>

          <Text style={styles.textContact}>restauranteluqing@gmail.com</Text>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={require("../../imgs/star.png")}
          ></Image>
          <Text style={styles.textContact}>
            Calificación - 3,9 (317 opiniones)
          </Text>
        </View>
      </View>
      <View style={[styles.redes, { width: width * 1 }]}>
        <View style={styles.red}>
          <Image style={styles.logo} source={require('../../imgs/tiktok.png')}></Image>
          <Text style={[styles.textContact,{fontSize:14,marginTop:10}]}>chifa_luqing</Text>
        </View>
        <View style={styles.red}>
          <Image style={styles.logo} source={require('../../imgs/facebook.png')}></Image>
          <Text style={[styles.textContact,{fontSize:14,marginTop:10}]}>Chifa Lu Qing</Text>
        </View>
        <View style={styles.red}>
          <Image style={styles.logo} source={require('../../imgs/instagram.png')}></Image>
          <Text style={[styles.textContact,{fontSize:14,marginTop:10}]}>chifa_luqing</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inf: {
    flex: 1,
  },

  redes: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    gap: 15,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  bx: {
    width: 35,
    height: 35,
    padding: 5,

    backgroundColor: "#CD3131",
  },
  msj: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  textContact: {
    fontWeight: 600,
    fontSize: 20,
    color: "#fff",
  },
  redes:{
    flexDirection:'row',
    marginTop:25
  },
  red:{
    flex:1,
    alignItems:'center'
  },
  logo:{
    width:40,
    height:40
  }
});
