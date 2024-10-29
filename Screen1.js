import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable, SafeAreaView, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useRoute } from "@react-navigation/native";
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';


const products = [
  {
    id: '1',
    image: require("./assets/canaumi.jpg"),
    title: 'Ca nấu lẩu, nấu mì...',
    shop: 'Shop Devang'
  },
  {
    id: '2',
    image: require("./assets/2.jpg"),
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LTD Food'
  },
  {
    id: '3',
    image: require("./assets/3.jpg"),
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi'
  },
  {
    id: '4',
    image: require("./assets/4.jpg"),
    title: 'Đồ chơi mô hình',
    shop: 'Shop Thế giới đồ chơi'
  },
  {
    id: '5',
    image: require("./assets/5.jpg"),
    title: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book'
  },
  {
    id: '6',
    image: require("./assets/6.jpg"),
    title: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book'
  }];

const Home = () => {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.sanPham}>
        <View style={{ flex: 1 }}>
          <Image source={item.image} style={styles.image} resizeMode='contain' />
        </View>
        <View style={{ flex: 2, marginLeft: 10 }}>
          <Text>{item.title}</Text>
          <Text style={{ color: 'red', marginTop: 10 }}>{item.shop}</Text>
        </View>
        <View style={{ flex: 1, marginTop: 15, marginRight: 25 }}>

          <Pressable style={styles.buttonChat}>
            <Text style={{ color: 'white', fontSize: 18 }}>Chat</Text>
          </Pressable>
        </View>
      </View>
    )

  }

  return (
    <SafeAreaView style={styles.container}>

      {/*thanh header*/}
      <View style={styles.containerHeader}>
        <Icon name="arrow-back-outline" color="white" size={45} style={{ marginLeft: 10 }} />
        <Text style={styles.textChat}>Chat</Text>
        <Feather name="shopping-cart" size={30} color="white" />
      </View>
      {/*sản phẩm */}
      <View style={styles.bodyContainer}>
        <Text style={styles.textBody}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id} />


      </View>


      {/*footer */}
      <View style={styles.containerFooter}>
        <Feather name="menu" size={30} style={{ marginRight: 135, marginLeft: 10 }} />
        <Octicons name="home-outline" size={34} style={{ marginRight: 135 }} />
        <Entypo name="back" size={30} />

      </View>

    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },

  containerHeader: {
    flex: 1,
    backgroundColor: '#8ac9f2',
    flexDirection: 'row',
    alignItems: 'center',

  },

  textChat: {
    color: 'white',
    fontSize: 35,
    marginLeft: 105,
    marginRight: 105
  },

  bodyContainer: {
    flex: 8,

  },
  textBody: {
    marginHorizontal: 25,
    fontSize: 14,
    marginTop: 15,
    marginBottom: 15
  },
  sanPham: {
    flexDirection: 'row',
    // alignItems: 'center'
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    marginBottom: 5

  },
  image: {
    width: '100%',
    height: 80,

  },

  buttonChat: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 40

  },
  containerFooter: {
    flex: 1,
    backgroundColor: '#8ac9f2',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // marginRight: 20

  },
})

export default Home;