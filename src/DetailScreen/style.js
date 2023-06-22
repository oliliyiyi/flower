import { StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF6F8",
    height: "100%",
    width: "100%",
    
  },
  containHeader: {
    width: "100%",
    height: "5%", 
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
  },
  containContent: {
    width: "50%",
    height: "70%",
    marginVertical: 10,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  containImage: {
    width: windowWidth*0.45,
    height: windowWidth*0.45,
    marginTop: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20
  },
  containDetail: {
    flexGrow: 1,
    marginLeft: 10, 
  },
  content: {
    fontSize : 15,
  }
});
export default styles;
