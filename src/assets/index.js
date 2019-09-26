import config from "../config";
const baseUrl = `${config.REMOTE_STORAGE_URL}/assets`;

const urlAssets = assets => ({
  uri: `${baseUrl}${assets}`
});

/* =================== ICONS ====================== */

export let iconAddressWhite = urlAssets("/icons/cyber-address-white.svg");
export let iconDobWhite = urlAssets("/icons/cyber-dob-white.svg");
export let iconEmailWhite = urlAssets("/icons/cyber-email-white.svg");
export let iconClose = urlAssets("/icons/icon-close.svg");
export let iconLoader = urlAssets("/icons/loader.svg");

/* =================== IMAGES ====================== */

export let imageLogo = urlAssets("/images/logo-cyber.png");
export let imageSalesDemoSlide3 = urlAssets("/images/sales-demo-slide-3.png");
