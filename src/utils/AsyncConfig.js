import AsyncStorage from "@react-native-community/async-storage";

const storeConfig = async config => {
  try {
    await AsyncStorage.setItem("config", JSON.stringify({ ...config }));
  } catch (error) {
    console.error(error);
  }
};

const retrieveConfig = async () => {
  try {
    const value = await AsyncStorage.getItem("config");
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};

export { storeConfig, retrieveConfig };
