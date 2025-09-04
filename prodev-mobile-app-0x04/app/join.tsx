import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navGroup}>
          <Ionicons
            name='arrow-back'
            size={25}
          />
          <Image source={require("@/assets/images/Logo.png")} />
        </View>
        <Text style={styles.largeText}>Sign in to your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Enter your email and password to sign in.
        </Text>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput
              keyboardType='email-address'
              style={styles.inputField}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome
                name='eye-slash'
                size={24}
                color='#7E7B7B'
              />
            </View>
          </View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}>
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.subTextGroup}>
          <Text style={styles.subText}>Don&apos;t have an account?</Text>
          <Text style={styles.subTextJoin}>Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  largeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
  smallText: {
    fontSize: 16,
    color: "#7E7B7B",
    marginTop: 10,
    marginBottom: 30,
  },
  formGroup: {
    marginBottom: 30,
  },
  placeholderText: {
    fontSize: 16,
    color: "#7E7B7B",
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#007BFF",
    marginTop: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#7E7B7B",
    fontSize: 16,
  },
  socialMediaButtonGroup: {
    gap: 15,
    marginBottom: 30,
  },
  socialMediaButton: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  socialMediaButtonText: {
    fontSize: 16,
    color: "#333",
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  subText: {
    color: "#7E7B7B",
    fontSize: 16,
  },
  subTextJoin: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
