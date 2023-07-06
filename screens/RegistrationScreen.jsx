import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [reflectionPassword, setReflectionPassword] = useState(true);
  const [state, setState] = useState(initialState);

  const [inputBorderColorLogin, setInputBorderColorLogin] = useState("#afb1b8");
  const [inputBorderColorEmail, setInputBorderColorEmail] = useState("#afb1b8");
  const [inputBorderColorPassword, setInputBorderColorPassword] =
    useState("#afb1b8");

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const keyboardHideOfFocus = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(Keyboard.dismiss());
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHideOfFocus}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/bg.jpg")}
        >
          <View style={styles.formContainer}>
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                top: -60,
                width: "100%",
              }}
            >
              <View
                style={{
                  position: "relative",
                }}
              >
                <Image style={styles.avatar} />
                <TouchableOpacity
                  style={styles.btnAddAvatar}
                  activeOpacity={0.8}
                >
                  <Image
                    style={styles.imageAddAvatar}
                    source={require("../assets/images/add.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.form}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: inputBorderColorLogin,
                  }}
                  placeholderTextColor="#BDBDBD"
                  placeholder="Логін"
                  onFocus={() => {
                    setInputBorderColorLogin("#FF6C00");
                    setIsShowKeyboard(true);
                  }}
                  onBlur={() => {
                    setInputBorderColorLogin("#afb1b8");
                    setIsShowKeyboard(false);
                  }}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prev) => ({ ...prev, login: value }))
                  }
                />
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: inputBorderColorEmail,
                  }}
                  placeholderTextColor="#BDBDBD"
                  placeholder="Адреса електронної пошти"
                  inputMode="email"
                  onFocus={() => {
                    setInputBorderColorEmail("#FF6C00");
                    setIsShowKeyboard(true);
                  }}
                  onBlur={() => {
                    setInputBorderColorEmail("#afb1b8");
                    setIsShowKeyboard(false);
                  }}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prev) => ({ ...prev, email: value }))
                  }
                />
                <View style={{ position: "relative" }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: inputBorderColorPassword,
                    }}
                    placeholderTextColor="#BDBDBD"
                    placeholder="Пароль"
                    secureTextEntry={reflectionPassword}
                    onFocus={() => {
                      setInputBorderColorPassword("#FF6C00");
                      setIsShowKeyboard(true);
                    }}
                    onBlur={() => {
                      setInputBorderColorPassword("#afb1b8");
                      setIsShowKeyboard(false);
                    }}
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prev) => ({ ...prev, password: value }))
                    }
                  />
                  <TouchableOpacity
                    style={styles.reflectionPassword}
                    activeOpacity={0.8}
                    onPress={() => {
                      setReflectionPassword((prev) => !prev);
                    }}
                  >
                    <Text style={styles.reflectionPasswordText}>Показати</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={keyboardHide}
                >
                  <Text style={styles.btnTextRegister}>Зареєстуватися</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
              <TouchableOpacity
                style={{
                  ...styles.btnSingIn,
                  marginBottom: isShowKeyboard ? 0 : 45,
                }}
                onPress={() => setIsShowKeyboard(false)}
                activeOpacity={0.8}
              >
                <Text style={styles.btnTextSingIn}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    position: "relative",
    backgroundColor: "#ffffff",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderColor: "#000",
    borderWidth: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 25,
  },
  btnAddAvatar: {
    position: "absolute",
    right: -12.5,
    bottom: 23,
  },
  imageAddAvatar: {
    width: 25,
    height: 25,
  },
  title: {
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.3,
    textAlign: "center",
    marginBottom: 33,
    marginTop: 92,
    fontFamily: "Roboto-Bold",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    padding: 16,
    backgroundColor: "#f5f7fb",
    marginBottom: 16,
    fontFamily: "Roboto-Regular",
  },
  reflectionPassword: {
    position: "absolute",
    right: 16,
    top: 20,
  },
  reflectionPasswordText: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Roboto-Regular",
  },
  btn: {
    backgroundColor: "#ff6c00",
    height: 50,
    borderRadius: 25,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 43,
  },
  btnTextRegister: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Roboto-Regular",
  },
  btnSingIn: {
    height: 50,
    borderRadius: 25,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextSingIn: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
    fontFamily: "Roboto-Regular",
  },
});
