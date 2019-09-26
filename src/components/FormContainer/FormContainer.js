import React from "react";
import { View, Text, Image } from "react-native";
//import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./FormContainerStyles";
import { getRemoteTheme } from "../../themes";
import I18n from "../../i18n";

//Assets
import { imageLogo } from "../../assets";
import { SafeAreaView } from "react-navigation";

console.log(imageLogo);
const FormContainer = ({ children, title, icon }) => {
  const theme = getRemoteTheme();
  const themeStyles = {
    //backgroundColor: theme.brand2ndDarker
    backgroundColor: "transparent"
  };

  return (
    <View style={styles.containerPage}>
      <View style={styles.authContainer}>
        <SafeAreaView>
          <View style={styles.iconContainer}>
            <Image source={imageLogo} style={styles.topImage} />
          </View>
          <View style={[styles.formContainer, themeStyles]}>
            {/*           {icon ? (
            <View style={styles.iconContainer}>
              <Icon name={icon} size={50} color="#fff" />
            </View>
          ) : null} */}
            <Text style={styles.formTitle}>{I18n.t("login-login")}</Text>
            <React.Fragment>{children}</React.Fragment>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default FormContainer;
