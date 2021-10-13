import { reactive } from "vue"

const state = reactive({
    colorMode: {
      dark: {
        primary: "#036564",
        secondary: "#CDB380",
        light: "#E8DDCB",
        dark: "#031634",
        background: "#033649",
        background800: "#012431",
      },
      light: {
        // primary: "#CDB380",
         primary: "#816D4C",
        secondary: "#F4E7D2",
        // secondary: "#0D485E",
        // light: "#033649",
        light: "#012431",
        dark: "#031634",
        // background: "#E8DDCB",
        background: "#C5B59A",
        // background800: "#E8E3CB",
        background800: "#A6916E",
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
    state.currentColorMode = name
  }
}

export default {
  state,
  methods
}