import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.containHeader}>
          <Text style={styles.header}>Hoa Lan Cẩm Cù</Text>
        </View>
        <View style={styles.containContent}>
          <View style={styles.containImage}>
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={require("../../assets/LanCamCu.png")}
            />
          </View>
          <View style={styles.containDetail}>
            <Text style={styles.content}>
              Lan Cẩm Cù có tên khoa học là Hoya carnosa.Trên thế giới hiện nay
              có hàng trăm loài hoa lan Cẩm Cù, hoa khi nở có dạng chùm tròn,
              hình ngôi sao 5 cánh nhỏ gồm nhiều màu sắc như đỏ, hồng, trắng.
              Khi nở hoa tỏa hương thơm dễ chịu và cũng khá lâu tàn. Hoa Lan Cẩm
              Cù thuộc dạng thân leo,thường được trồng trong chậu treo ở ban
              công, hàng quán cafe. Hoa mang vẻ đẹp về phong thuỷ mang đến sự
              tốt lành cho gia chủ, lại là giống dễ trồng có sức sống mạnh mẽ
              nên rất được ưa chuộng. Đây là giống lan rất dễ trồng vì ít sâu
              bệnh và có khả năng sống cao, vì vậy nếu bạn đang muốn bắt đầu
              trồng một loại lan nào đó thì Cẩm Cù là một lựa chọn tốt. 
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
