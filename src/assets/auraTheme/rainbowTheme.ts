import { darkTheme as rainbowDarkTheme } from '@rainbow-me/rainbowkit';
import { AppColors } from './colors';

export const darkTheme = () => ({
  ...rainbowDarkTheme({
    borderRadius: 'medium',
  }),
  colors: {
    ...rainbowDarkTheme().colors,
    modalBackground: AppColors.slate[800],
  },
});
