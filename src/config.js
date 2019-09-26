const ENV = "QA"; /** DEV, QA, PROD */
const BRAND_CODE_NAME = "bwbank"; //!!CONFIG simulate brand (local config)
const REMOTE_STORAGE_URL = `https://external-source.s3.eu-central-1.amazonaws.com/${BRAND_CODE_NAME}/remoteConfig`;

const config = {
  ENV,
  BRAND_CODE_NAME,
  REMOTE_STORAGE_URL,
  skipLogin: false,
  loginType: "formEmailPassword",
  cyberWebview: {
    headerActive: true
  },
  vpn: {
    headerActive: true
  },
  previousVersion: "1.0.0",
  currentVersion: "1.0.0",
  locales: [{ name: "English", code: "en" }, { name: "Français", code: "fr" }],
  urlAssets:
    ENV === "PROD"
      ? "https://s3-eu-west-1.amazonaws.com/cyber-wrapper/prod"
      : "https://s3-eu-west-1.amazonaws.com/cyber-wrapper/qa",
  benefits: {
    cyberWebview: {
      name: "Webview access",
      code: "cyberWebview",
      active: true
    },
    vpn: {
      name: "VPN feature",
      code: "vpn",
      active: true
    }
  }
};

export default config;
