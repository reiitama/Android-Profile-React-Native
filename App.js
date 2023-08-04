import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import foto from "./zen.png";
import gambar from "./shin.png";
import { Avatar } from "react-native-elements";

export default function App() {
  return (
    <View style={{
      paddingTop: 24,
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }}>
        <View style={{
        backgroundColor: "#0079db",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        color: "white",
        width: "100%",
        height: 50
        }}>
        <FontAwesome name="bars" size={25} color="white" style={{paddingTop:5}}/>
        <Text style={{ fontSize: 25, textAlign: "center", paddingLeft: 20, paddingRight: 210, color: "white" }}>Profile</Text>
        <FontAwesome name="search" size={25} color="white"/>
        <Entypo name="dots-three-vertical" size={25} color="white" style={{ paddingLeft: 20, paddingRight: 10}}/>
      </View>

      <ScrollView>
      <View style={{
      backgroundColor: "#0079db",
      padding: 10,
      display: "flex",
      height: 250,
      width: "100%",
      alignItems: "center"
      }}>
      <Avatar rounded source={foto} size={130} avatarStyle={{ borderWidth: 3, borderColor: "white", borderRadius: 100}}/>
      {/* <MaterialCommunityIcons name="face-profile" size={150} color="white" style={{ textAlign: "center", paddingBottom: 10}}/> */}
      <Text style={{color: "white", fontSize: 20, textAlign: "center", fontWeight: "bold"}}>Reitamaditya Hadyan Wijaya</Text>
      <Text style={{color: "white", fontSize: 15, textAlign: "center", paddingTop: 10}}>Gas CODM Slur</Text>
      </View>
    <View style={{
      backgroundColor: "white",
      padding: 10,
      display: "flex",
      flexDirection: "row",
      color: "white",
      width: "100%",
      height: 100,
      borderBottomColor: "black",
      borderBottomWidth: 1
    }}>
    <View style={{
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      width: "33%"
    }}>
    <Text style={{color: "black", fontSize: 20, textAlign: "center", fontWeight: "bold", paddingTop: 10}}>89</Text>
    <Text style={{color: "black", fontSize: 15, textAlign: "center", paddingTop: 5}}>Posts</Text>
    </View>
    <View style={{
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      width: "33%"
    }}>
    <Text style={{color: "black", fontSize: 20, textAlign: "center", fontWeight: "bold", paddingTop: 10}}>10M</Text>
    <Text style={{color: "black", fontSize: 15, textAlign: "center", paddingTop: 5}}>Followers</Text>
    </View>
    <View style={{
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      width: "33%"
    }}>
    <Text style={{color: "black", fontSize: 20, textAlign: "center", fontWeight: "bold", paddingTop: 10}}>1</Text>
    <Text style={{color: "black", fontSize: 15, textAlign: "center", paddingTop: 5}}>Following</Text>
    </View>
    </View>
    <View style={{
      padding: 10,
      backgroundColor: "white",
      color: "white",
      width: "100%",
      height: 40
    }}>
    <Text style={{color: "black", fontSize: 20, fontWeight: "bold"}}>Photos</Text>
    </View>
    <ScrollView horizontal="true">
      <Image source={foto} name="photo" size={75} color="black" style={{ width: 105, height: 105, paddingRight: 5}}/>
      <Image source={gambar} name="photo" size={75} color="black" style={{ width: 105, height: 105, paddingRight: 5}}/>
      <Image source={foto} name="photo" size={75} color="black" style={{ width: 105, height: 105, paddingRight: 5}}/>
      <FontAwesome name="photo" size={105} color="black" style={{ paddingRight:5 }}/>
      <FontAwesome name="photo" size={105} color="black" style={{ paddingRight:5 }}/>
      <FontAwesome name="photo" size={105} color="black" style={{ paddingRight:5 }}/>
    </ScrollView>
    <View style={{
      backgroundColor: "white",
      padding: 10,
      color: "white",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: 40
    }}>
      <Text style={{color: "black", fontSize: 20, fontWeight: "bold"}}>Post</Text>
    </View>
    <View style={{
      backgroundColor: "white",
      padding: 10,
      color: "white",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignContent: "center",
      height: 50
    }}>
      <MaterialCommunityIcons name="face-profile" size={30} color="black" />
      <Text style={{paddingLeft: 10, fontSize: 25}}>Reitamaditya</Text>
    </View>
    <View style={{
      backgroundColor: "white",
      color: "white",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: 50
    }}>
      <Text style={{paddingLeft: 10, fontSize: 15}}>posted a Photo</Text>
      <FontAwesome name="calendar" size={15} style={{ paddingLeft: 10}}> 1 day ago</FontAwesome>
    </View>
    <View style={{
      padding:10,
      width:"100%",
      display:"flex",
      flexDirection:"column",
      height:200
    }}>
      <Image source={foto} style={{width:350, height:200}} />
    </View>
    <View style={{
      backgroundColor: "white",
      padding: 10,
      color: "white",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignContent: "center",
      height: 50
    }}>
      <MaterialCommunityIcons name="face-profile" size={30} color="black" />
      <Text style={{paddingLeft: 10, fontSize: 25}}>Reitamaditya</Text>
    </View>
    <View style={{
      backgroundColor: "white",
      color: "white",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: 50
    }}>
      <Text style={{paddingLeft: 10, fontSize: 15}}>posted a Photo</Text>
      <FontAwesome name="calendar" size={15} style={{ paddingLeft: 10}}> 2 days ago</FontAwesome>
    </View>
    <View style={{
      padding:10,
      width:"100%",
      display:"flex",
      flexDirection:"column",
      height:300
    }}>
      <Image source={gambar} style={{width:350, height:200}} />
    </View>
    </ScrollView>
    </View>
  );
}
