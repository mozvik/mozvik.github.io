import { reactive } from "vue"

const state = reactive({
    langData: {
      en: {
        navItems:{ 
          home: {
            name: "Home",
            id: "home",
            },
          about: {
            name:"About",
            id: "about",
          },
          skills: {
            name: "Skills",
            id: "skills",
          },
          portfolio: {
            name: "Portfolio",
            id: "portfolio",
          },
          contact: {
            name: "Contact",
            id: "contact",
          },
        },
        switchLanguage: {
          en: "EN",
          hu: "HU",
        },
        switchTheme: {
          darkMode: "Dark mode",
          lightMode: "Light mode"
        } 
      },
      hu: {
        navItems:{ 
          home: {
            name: "Kezdőlap",
            id: "home",
            },
          about: {
            name:"Rólam",
            id: "about",
          },
          skills: {
            name: "Készségek",
            id: "skills",
          },
          portfolio: {
            name: "Portfólió",
            id: "portfolio",
          },
          contact: {
            name: "Kapcsolat",
            id: "contact",
          },
        },
        switchLanguage: {
          en: "EN",
          hu: "HU",
        },
        switchTheme: {
          darkMode: "Sötét mód",
          lightMode: "Világos mód"
        } 
        }
    },
    currentLang: "en"
})

const computed = {
    setLang(lang) {
        state.currentLang = lang
        return state.langData[lang]
    },
}

export default {
    state,
    computed
}