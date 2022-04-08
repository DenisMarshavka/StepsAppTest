export const useGenerateOnBoardingScreenNameByIndexKey =
  () =>
  (index = 1, commonName = 'OnBoarding') =>
    `${commonName}${index}`;
