import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StatusBar,
} from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native";
export default function HomeScreen(props) {
  const [like, setLike] = useState(props.item.favo);
  console.log(props.item.img);
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView>
        <ScrollView>
          <View style={styles.listItems}>
            <View style={styles.item}>
              <View style={styles.containImage}>
                <Image
                  style={styles.image}
                  source={require("../../assets/LanCamCu.png")}
                />
              </View>
              <View style={styles.containContent}>
                <Text style={styles.header}>Hoa Lan Cẩm Cù</Text>
                <Text numberOfLines={3} style={styles.content}>
                  Lan Cẩm Cù có tên khoa học là Hoya carnosa. Trên thế giới hiện
                  nay có hàng trăm loài hoa lan Cẩm Cù, hoa khi nở có dạng chùm
                  tròn, hình ngôi sao 5 cánh nhỏ gồm nhiều màu sắc như đỏ, hồng,
                  trắng. Khi nở hoa tỏa hương thơm dễ chịu và cũng khá lâu tàn.               
                </Text>
              </View>
              <View style={styles.containLikeButton}>
                <TouchableOpacity
                  onPress={() => {
                    setLike(!like);
                  }}
                >
                  {console.log(like)}
                  {like ? 
                    <Image
                      style={styles.likeButton}
                      resizeMode="stretch"
                      source={require("../../assets/liked.png")}
                    />
                   : 
                    <Image
                      style={styles.likeButton}
                      resizeMode="stretch"
                      source={require("../../assets/test.png")}
                    />
                  }
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.containImage}>
                <Image
                  style={styles.image}
                  source={require("../../assets/LanKieuDet.png")}
                />
              </View>
              <View style={styles.containContent}>
                <Text style={styles.header}>Hoa Lan Kiều Dẹt</Text>
                <Text numberOfLines={3} style={styles.content}>
                  Lan Kiều Dẹt là 1 trong 7 loại phong lan rừng quý hiếm và có
                  giá trị lớn nhất ở nước ta. Lan kiều dẹt có tên khoa học là
                  Dendrobium sulcatum.
                </Text>
              </View>
              <View style={styles.containLikeButton}>
                <TouchableOpacity
                  onPress={() => {
                    setLike(!like);
                  }}
                >
                  {console.log(like)}
                  {like ? 
                    <Image
                      style={styles.likeButton}
                      resizeMode="stretch"
                      source={require("../../assets/liked.png")}
                    />
                   : 
                    <Image
                      style={styles.likeButton}
                      resizeMode="stretch"
                      source={require("../../assets/test.png")}
                    />
                  }
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.item}>
              <View style={styles.containImage}>
                <Image
                  style={styles.image}
                  source={require("../../assets/LanNgocDiem.png")}
                />
              </View>
              <View style={styles.containContent}>
                <Text style={styles.header}>Hoa Lan Ngọc Điểm</Text>
                <Text numberOfLines={3} style={styles.content}>
                  Là một loài hoa lan rừng Việt Nam được nhiều người săn đón,
                  lan Ngọc Điểm có thân cây khá to, nhiều tán lá mọc đan chéo
                  nhau khá đẹp. Hoa lan Ngọc Điểm mọc thành chùm nhỏ từ những
                  bông hình tròn, màu tím nhạt hoặc đậm.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView> */}
      <View style={styles.item}>
        <View style={styles.containImage}>
          <Image style={styles.image} source={props.item.img}/>
        </View>
        <View style={styles.containContent}>
          <Text style={styles.header}>{props.item.name}</Text>
          <Text numberOfLines={3} style={styles.content}>
            {props.item.desc}
          </Text>
        </View>
        <View style={styles.containLikeButton}>
          <TouchableOpacity
            onPress={() => {
              setLike(!like);
            }}
          >
            {like ? (
              <Image
                style={styles.likeButton}
                resizeMode="stretch"
                source={require("../../assets/liked.png")}
              />
            ) : (
              <Image
                style={styles.likeButton}
                resizeMode="stretch"
                source={require("../../assets/test.png")}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
