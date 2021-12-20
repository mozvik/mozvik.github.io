import { reactive } from "vue"

const state = reactive({
    colorMode: {
      dark: {
        primary: "#036564",
        secondary: "#CDB380",
        light: "#E8DDCB",
        // dark: "#031634",
        dark: "#114A60",
        background: "#033649",
        background800: "#012431",
        shadow: "rgba(3, 22, 52 , .5)",
      },
      light: {
         primary: "#afafaf",
        // primary: "#816D4C",
        //secondary: "#F4E7D2",
         secondary: "#e5e6eb",
        light: "#303131",
        //light: "#012431",
        dark: "#031634",
        //background: "#A59271",
        background: "#848383",
        background800: "#696969",
        //background800: "#A6916E",
        shadow: "rgba(1, 36, 49 , .25)",
      }
    },
    currentColorMode: "dark"
})

const methods = {
  setColorTheme(name) {
    let bodyStyles = document.body.style
    bodyStyles.setProperty('--primary', state.colorMode[name].primary)
    bodyStyles.setProperty('--secondary', state.colorMode[name].secondary)
    bodyStyles.setProperty('--light', state.colorMode[name].light)
    bodyStyles.setProperty('--dark', state.colorMode[name].dark)
    bodyStyles.setProperty('--background', state.colorMode[name].background)
    bodyStyles.setProperty('--background800', state.colorMode[name].background800)
    bodyStyles.setProperty('--shadow', state.colorMode[name].shadow)
    state.currentColorMode = name
  }
}

export default {
  state,
  methods
}