import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking
} from "react-native";
import React from "react";

export default function Ubicacion() {
  const { width } = Dimensions.get("window");
  const Direccion = () => {
    Linking.openURL('https://www.google.com/maps/place/Chifa+Lu+Qing/@-16.5101427,-68.1257245,17z/data=!3m1!4b1!4m6!3m5!1s0x915f20649e4d89d9:0x537a99c5a20096e5!8m2!3d-16.5101427!4d-68.1231496!16s%2Fg%2F1pp2tylz1?hl=es-419&shorturl=1');
  };
  
  return (
    <View style={styles.bx}>
      <Image
        style={[styles.mapa, { width: width * 0.9 ,height:width/2}]}
        source={require("../../imgs/Mapa.png")}
      ></Image>
      <TouchableOpacity onPress={()=>Direccion()}>
        <Text style={[styles.txtDireccion]}>Av. Arce #2549, La Paz, Bolivia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bx: {
    flex: 1,
  },
  mapa: {
    resizeMode:'stretch',
  },
  txtDireccion: {
    fontSize:20,
    color:'#FFF9F9',
    fontWeight:600,
    textDecorationLine:'underline',
    marginTop:25,
    textAlign:'center'
  },
});
