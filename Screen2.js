import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Svg, { Path } from 'react-native-svg';

const products = [
  {
    id: 1,
    image: require("./assets/1SC2.jpg"),
    description: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900đ",
    discount: "-39%",
    rating: 4,
    reviews: 15
  },
  {
    id: 2,
    image: require("./assets/2SC2.jpg"),
    description: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900đ",
    discount: "-39%",
    rating: 5,
    reviews: 15
  },
  {
    id: 3,
    image: require("./assets/3SC2.jpg"),
    description: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900đ",
    discount: "-39%",
    rating: 4,
    reviews: 15
  },
  {
    id: 4,
    image: require("./assets/4SC2.jpg"),
    description: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900đ",
    discount: "-39%",
    rating: 5,
    reviews: 15
  },
  {
    id: 5,
    image: require("./assets/5SC2.jpg"),
    description: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900đ",
    discount: "-39%",
    rating: 5,
    reviews: 15
  },
  {
    id: 6,
    image: require("./assets/6SC2.jpg"),
    description: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900đ",
    discount: "-39%",
    rating: 4,
    reviews: 15
  }
];

const renderProductItem = ({ item }) => {
  return (
    <View style={styles.sanPham}>
      <Image source={item.image} resizeMode="contain" style={styles.image} />
      <Text style={styles.textBody}>{item.description}</Text>
      <View style={styles.containerRating}>
        {[...Array(item.rating)].map((_, index) => (
          <Svg key={index} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <Path d="M11.5 0L14.0819 8.63729H22.4371L15.6776 13.9754L18.2595 22.6127L11.5 17.2746L4.74047 22.6127L7.32238 13.9754L0.56285 8.63729H8.91809L11.5 0Z" fill="#E0E41A" />
          </Svg>
        ))}
        {[...Array(5 - item.rating)].map((_, index) => (
          <Svg key={index} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <Path d="M11.5 0L14.0819 8.63729H22.4371L15.6776 13.9754L18.2595 22.6127L11.5 17.2746L4.74047 22.6127L7.32238 13.9754L0.56285 8.63729H8.91809L11.5 0Z" fill="#D3D3D3" />
          </Svg>
        ))}
        <Text>({item.reviews})</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.textGia}>{item.price}</Text>
        <Text style={styles.textPhanTram}>{item.discount}</Text>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.containerHeader}>
        <Icon name="arrow-back-outline" color="white" size={45} />
        <View style={styles.inputContainer}>
          <Icon name='search' size={20} />
          <TextInput placeholder="Dây cáp USB" style={styles.inputText} />
        </View>
        <Feather name="shopping-cart" size={30} color="white" />
        <Text style={{ color: 'white', fontSize: 40, marginLeft: 20, marginBottom: 30, marginRight: 10 }}>...</Text>
      </View>

      {/* Products */}
      <View style={styles.bodyContainer}>
        <FlatList
          data={products}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}  // Thêm thuộc tính numColumns để hiển thị 2 sản phẩm trên 1 hàng
        />
      </View>

      {/* Footer */}
      <View style={styles.containerFooter}>
        <Feather name="menu" size={30} style={{ marginRight: 135, marginLeft: 10 }} />
        <Octicons name="home-outline" size={34} style={{ marginRight: 135 }} />
        <Entypo name="back" size={30} />
      </View>
    </SafeAreaView>
  );
};

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
  bodyContainer: {
    flex: 8,
    marginTop: 20
  },
  sanPham: {
    flex: 1, // Thêm flex: 1 để mỗi sản phẩm chiếm một nửa chiều rộng
    marginBottom: 15,
    marginHorizontal: 10, // Thêm khoảng cách ngang giữa các sản phẩm
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 100,
  },
  containerFooter: {
    flex: 1,
    backgroundColor: '#8ac9f2',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
    height: 35,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  containerRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 5
  },
  textBody: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center' // Canh giữa văn bản mô tả
  },
  textGia: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 30
  },
  textPhanTram: {
    color: 'gray',
    fontWeight: 'bold',
  }
});

export default Home;
