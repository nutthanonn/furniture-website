const device = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const SlidePerScreen = (size: number) => {
  if (size <= device.mobileL) {
    return 1;
  } else if (size <= device.tablet) {
    return 1.5;
  } else if (size <= device.laptop) {
    return 2.5;
  } else if (size <= device.laptopL) {
    return 3.5;
  } else {
    return 6;
  }
};
