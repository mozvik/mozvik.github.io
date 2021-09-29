
<script>
import { ref, reactive, inject } from "vue"
export default function() {
  const language = inject('language')
  const languageData = ref(null)
  const rawData = reactive({
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
        text: "Select language"
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
          name: "Mit csinálok",
          id: "skills",
        },
        portfolio: {
          name: "Portfólióm",
          id: "portfolio",
        },
        contact: {
          name: "Kapcsolat",
          id: "contact",
        },
      },
      switchLanguage: {
        text: "Nyelvválasztás"
      },
      switchTheme: {
        darkMode: "Sötét mód",
        lightMode: "Világos mód"
      } 
    }      
  })
    switch (language.value.selected) {
      case "hu":
        languageData.value = rawData.hu
        break;
      default://en
        languageData.value = rawData.en
        break;
    }
  return {language, languageData}

}
</script>

