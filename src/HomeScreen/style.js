import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF6F8",
    height: "100%",
    width: "100%",
  },
  listItems: {
    height: "80%",
    width: "100%",
    alignItems: "center",
  },
  item: {
    height: 120,
    width: "90%",
    flexDirection: "row",
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#929292",
    backgroundColor: "#FFFFFF"
  },
  containImage: {
    height: "100%",
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  containContent: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    marginHorizontal: 15
  },
  likeButton:{
    height: 25,
    width: 25,
    position: "absolute",
    left: -15,
    top: -10
  }
});
export default styles;
