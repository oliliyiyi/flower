import React from "react";
import { View, Text, ScrollView } from "react-native";
import HomeScreen from "./HomeScreen/HomeScreen";
import DetailScreen from "./DetailScreen/DetailScreen";
import styles from "./style";
const listFlower = [
  {
    name: "Hoa Lan Cẩm Cù",
    img: require("../assets/LanCamCu.png"),
    desc: `Lan Cẩm Cù có tên khoa học là Hoya carnosa.Trên thế giới hiện nay
    có hàng trăm loài hoa lan Cẩm Cù, hoa khi nở có dạng chùm tròn,
    hình ngôi sao 5 cánh nhỏ gồm nhiều màu sắc như đỏ, hồng, trắng.
    Khi nở hoa tỏa hương thơm dễ chịu và cũng khá lâu tàn. Hoa Lan Cẩm
    Cù thuộc dạng thân leo,thường được trồng trong chậu treo ở ban
    công, hàng quán cafe. Hoa mang vẻ đẹp về phong thuỷ mang đến sự
    tốt lành cho gia chủ, lại là giống dễ trồng có sức sống mạnh mẽ
    nên rất được ưa chuộng. Đây là giống lan rất dễ trồng vì ít sâu
    bệnh và có khả năng sống cao, vì vậy nếu bạn đang muốn bắt đầu
    trồng một loại lan nào đó thì Cẩm Cù là một lựa chọn tốt.`,
    fav: false,
  },
  {
    name: "Hoa Lan Kiều Dẹt",
    img: require("../assets/LanKieuDet.png"),
    desc: `Lan Kiều Dẹt là 1 trong 7 loại phong lan rừng quý hiếm và có giá trị lớn nhất ở nước ta. 
    Lan kiều dẹt có tên khoa học là Dendrobium sulcatum.  Lan Kiều Dẹt có kích thước không quá lớn, 
    thông thường chúng chỉ cao từ 20–45cm. Hoa của loài lan này thường nở vào mùa xuân. 
    Hoa nở thành chùm ngắn, rủ xuống và có mùi thơm nhẹ nhàng. Cánh hoa lan màu vàng, ở giữa có môi nhỏ, 
    lông ngắn và sợi li ti màu cam đậm. Loài cây này có thân bẹp, dẹt với hai bên lá đối xứng nhau.`,
    fav: false,
  },
  {
    name: "Hoa Lan Ngọc Điềm",
    img: require("../assets/LanNgocDiem.png"),
    desc: `Là một loài hoa lan rừng Việt Nam được nhiều người săn đón, lan Ngọc Điểm có thân cây khá to, 
    nhiều tán lá mọc đan chéo nhau khá đẹp. Hoa lan Ngọc Điểm mọc thành chùm nhỏ từ những bông hình tròn, 
    màu tím nhạt hoặc đậm. Khi cây nở đúng vụ sẽ tạo nên một vùng tím đa mức độ rất đẹp và bắt mắt người nhìn. 
    Loài hoa lan đẹp và quý này thường được các đại gia, dân chơi lan treo cao trong vườn và chăm bón rất cẩn thận.
    Là loài lan rừng đẹp lại chịu được nhiệt độ khá cao, lên tới 37 độ C, tuy nhiên bạn vẫn cần chú ý độ ẩm của cây. 
    Vào mùa hè hay những hôm nắng nóng cây cần được tưới nhiều nước, đặc biệt là lúc cây mới lên rễ non.`,
    fav: false,
  },
  {
    name: "Hoa Lan Ngọc Điềm",
    img: require("../assets/LanNgocDiem.png"),
    desc: `Là một loài hoa lan rừng Việt Nam được nhiều người săn đón, lan Ngọc Điểm có thân cây khá to, 
    nhiều tán lá mọc đan chéo nhau khá đẹp. Hoa lan Ngọc Điểm mọc thành chùm nhỏ từ những bông hình tròn, 
    màu tím nhạt hoặc đậm. Khi cây nở đúng vụ sẽ tạo nên một vùng tím đa mức độ rất đẹp và bắt mắt người nhìn. 
    Loài hoa lan đẹp và quý này thường được các đại gia, dân chơi lan treo cao trong vườn và chăm bón rất cẩn thận.
    Là loài lan rừng đẹp lại chịu được nhiệt độ khá cao, lên tới 37 độ C, tuy nhiên bạn vẫn cần chú ý độ ẩm của cây. 
    Vào mùa hè hay những hôm nắng nóng cây cần được tưới nhiều nước, đặc biệt là lúc cây mới lên rễ non.`,
    fav: false,
  },
  
];
export default function RootComponent() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.listItems}>
          {listFlower.map((item, index) => {
            return <HomeScreen key={index} item={item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
