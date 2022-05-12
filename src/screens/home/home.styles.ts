import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");
const ratio = win.width / 512;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 120,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: win.width / 2,
    height: (512 / 2) * ratio,
    resizeMode: "contain",
  },
  buttons: {
    marginTop: 50,
  },
  button: {
    marginBottom: 10,
  },
});

export default styles;
