import React, { useState, Image } from "react";
import { Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { isEmail, isEmpty } from "validator";
import I18n from "../../../i18n";

//Components
import { PrimaryButton, LinkButton } from "../../../components/Buttons/Buttons";
import InputForm from "../../../components/InputForm/InputForm";
import FormContainer from "../../../components/FormContainer/FormContainer";

//Assets
import { imageLogo } from "../../../assets";

//API
import { login } from "../../../api/apiLogin";

export default function LoginForm(props) {
  const [email, setEmail] = useState("qusitaro@getnada.com");
  const [password, setPassword] = useState("Password1");
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitBtnTxt, setSubmitBtnTxt] = useState("Login");

  async function storeToken(token) {
    try {
      await AsyncStorage.setItem("cyberToken", token);
    } catch (error) {
      console.log(error);
    }
  }

  function signIn() {
    setErrorCode("");
    if (isEmpty(email) && isEmpty(password)) {
      setErrorMessage(I18n.t("email-and-password-empty"));
    }
    if (isEmpty(password) && !isEmpty(email) && isEmail(email)) {
      setErrorMessage(I18n.t("password-empty"));
    }
    if (isEmpty(password) && !isEmpty(email) && !isEmail(email)) {
      setErrorMessage(I18n.t("password-empty-and-invalid-email"));
    }
    if (!isEmpty(password) && !isEmpty(email) && !isEmail(email)) {
      setErrorMessage(I18n.t("invalid-email"));
    }
    if (!isEmpty(password) && isEmpty(email)) {
      setErrorMessage(I18n.t("email-empty"));
    }

    if (!isEmpty(email) && !isEmpty(password) && isEmail(email)) {
      setErrorMessage("");
      setSubmitBtnTxt(prev => prev + "...");
      login(email, password)
        .then(data => {
          return data[0].token
            ? storeToken(data[0].token).then(
                props.navigation.navigate("CYBER_HOME")
              )
            : setErrorCode(data[0].error_code);
        })
        .catch(err => {
          setSubmitBtnTxt("Login");
          console.log("login failed:", err);
        });
    }
  }

  return (
    <FormContainer title={"Login Form"} icon="ios-person">
      <React.Fragment>
        <InputForm
          onChange={text => setEmail(text)}
          value={email}
          icon="ios-person"
          placeholder="Email"
        />
        <InputForm
          onChange={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          textContentType="password"
          icon="ios-lock"
          placeholder="Password"
        />
        {errorCode ? (
          <Text style={{ color: "#fff" }}>
            {I18n.t(`error-api-code-${errorCode}`)}
          </Text>
        ) : null}
        {errorMessage ? (
          <Text style={{ color: "#fff", textAlign: "center" }}>
            {errorMessage}
          </Text>
        ) : null}
        <PrimaryButton onPress={signIn} text={submitBtnTxt} />
      </React.Fragment>
    </FormContainer>
  );
}
