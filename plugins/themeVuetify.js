import colors from 'vuetify/es5/util/colors';
export function themeVuetify() {
  return {
    secondary: colors.orange.darken1, // nav-bar colors.orange.darken1
    accent: colors.grey.darken3, // active-tab
    primary: colors.blue.darken2,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  };
}
