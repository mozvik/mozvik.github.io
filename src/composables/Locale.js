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
        homeView: {
          title1: "Hello, I'm", 
          title2: "Attila Mozvik",
          subTitle: "Web & Software Developer"
        },
        aboutView: {
          title: "ABOUT", 
          text1: "I have a serious passion for web development, that provides me the opportunity of both creativity and programming.",
          text2: "I love experimenting with UI animations and effects, build something, or just solving problems.",
          dlText: "Download CV",
          backTitle: "ABOUT"
        },
        skillView: {
          title: "SKILLS", 
          text1: "My main area of expertise is front-end development, ",
          text2: "HTML, CSS, JavaScript,",
          text3: " Building small web applications, animations, and interactive layouts.",
          text4: "I also have back-end knowledge of ",
          text5: "PHP",
          text6: ".",
          backTitle: "SKILLS"
        },
        portfolioView: {
          title: "My Recent Projects", 
          text1: "",
          cards: [
            {
              title: "Quiz Application",
              imageMobile: "quiz-m.jpg",
              imageDesktop: "quiz.jpg",
              tech: "Vue, Vuex, Ajax",
              brief:
                "Simple Quiz Application made with Vue.js & Vuex state management",
              description:
                "",
              technology: [
                {
                  icon: "logos:html-5",
                  width: 24,
                },
                {
                  icon: "logos:css-3",
                  width: 24,
                },
                {
                  icon: "logos:vue",
                  width: 30,
                },
              ],
              buttonDemo: {
                text: "View Demo",
                icon: "healthicons:eye",
                anchor: "https://mozvik.github.io/vue-quiz/",
              },
              buttonCode: {
                text: "Github Repository",
                icon: "akar-icons:github-outline-fill",
                anchor: "https://github.com/mozvik/vue-quiz",
              },
            },
            {
              title: "Puzzle Slider",
              imageMobile: "https://picsum.photos/300/435/?rnd=2",
              imageDesktop: "https://picsum.photos/300/435/?rnd=2",
              tech: "Vue, Vuex, Ajax",
              brief:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id quis porro?",
              description:
                "",
              technology: [
                {
                  icon: "logos:html-5",
                  width: 24,
                },
                {
                  icon: "logos:css-3",
                  width: 24,
                },
                {
                  icon: "logos:vue",
                  width: 30,
                },
              ],
              buttonDemo: {
                text: "View Demo",
                icon: "healthicons:eye",
                anchor: "https://mozvik.github.io/vue-quiz/",
              },
              buttonCode: {
                text: "Github Repository",
                icon: "akar-icons:github-outline-fill",
                anchor: "https://github.com/mozvik/vue-quiz",
              },
            },
           
            {
              title: "Recipe Book App",
              imageMobile: "https://picsum.photos/300/435/?rnd=4",
              imageDesktop: "https://picsum.photos/300/435/?rnd=4",
              tech: "Angular",
              brief:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti laboriosam!",
              description:
                "",
              technology: [
                {
                  icon: "logos:angular-icon",
                  width: 26,
                },
                {
                  icon: "logos:php",
                  width: 50,
                },
              ],
              buttonDemo: {
                text: "View Demo",
                icon: "healthicons:eye",
                anchor: "https://mozvik.github.io/vue-quiz/",
              },
              buttonCode: {
                text: "Github Repository",
                icon: "akar-icons:github-outline-fill",
                anchor: "https://github.com/mozvik/vue-quiz",
              },
            },
            {
              title: "EsoGuides - Gaming Website",
              imageMobile: "https://picsum.photos/300/435/?rnd=5",
              imageDesktop: "https://picsum.photos/300/435/?rnd=5",
              tech: "React",
              brief:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti laboriosam!",
              description:
                "",
              technology: [
                {
                  icon: "logos:react",
                  width: 26,
                },
                {
                  icon: "logos:php",
                  width: 50,
                },
              ],
              buttonDemo: {
                text: "View Demo",
                icon: "healthicons:eye",
                anchor: "https://esoguides.hu",
              },
              buttonCode: {
                text: "",
                icon: "",
                anchor: "",
              },
            },
          ],
          backTitle: "PORTFOLIO"
        },
        contactView: {
          title: "CONTACT",
          subtitle: "Get in touch",
          delivering: "Delivering your message",
          delivered: "Your message has been delivered",
          error: "Error occurred",
          name: "Name",
          email: "E-mail",
          message: "Message",
          send: "Send",
          backTitle: "CONTACT"
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
            name: "Munkáim",
            id: "portfolio",
          },
          contact: {
            name: "Kapcsolat",
            id: "contact",
          },
        },
        homeView: {
          title1: "Üdvözlöm,", 
          title2: "Mozvik Attila vagyok",
          subTitle: "Web és Szoftverfejlesztő"
        },
        aboutView: {
          title: "RÓLAM", 
          text1: "Szenvedélyemmé vált a webfejlesztés, ahol egyrészt ki tudom fejezni a kreativitásomat, másrészt meg tudom mutatni a programozói tudásomat is.",
          text2: "Szeretek alkotni és látni, ahogy egy projekt általam kel életre.",
          text3: "Szeretek foglalkozni animációk és különféle effektusok készítésével, vagy csupán egy problémára megoldást találni.",
          dlText: "Önéletrajz",
          backTitle: "RÓLAM"
        },
        skillView: {
          title: "KÉSZSÉGEK", 
          text1: "Fő szakterületem a front-end fejlesztés, ",
          text2: "HTML, CSS, JavaScript.",
          text3: " Kisebb, reszponzív web alkalmazásokat, és interaktív felületeket készítek.",
          text4: "Ezen felül rendelkezem szerveroldali ",
          text5: "PHP",
          text6: " programnyelv ismeretekkel is.",
          backTitle: "KÉSZSÉGEK"
        },
        portfolioView: {
          title: "Munkáim", 
          text1: "",
          cards: [
            {
              title: "Kvíz Alkalmazás",
              imageMobile: "quiz-m.jpg",
              imageDesktop: "quiz.jpg",
              tech: "Vue, Vuex, Ajax",
              brief:
                "Egyszerű kvíz alkalmazás Vue.js és Vuex által készítve.",
              description:
                "",
              technology: [
                {
                  icon: "logos:html-5",
                  width: 24,
                },
                {
                  icon: "logos:css-3",
                  width: 24,
                },
                {
                  icon: "logos:vue",
                  width: 30,
                },
              ],
              buttonDemo: {
                text: "Demo indítása",
                icon: "healthicons:eye",
                anchor: "https://mozvik.github.io/vue-quiz/",
              },
              buttonCode: {
                text: "Forráskód",
                icon: "akar-icons:github-outline-fill",
                anchor: "https://github.com/mozvik/vue-quiz",
              },
            },
            {
              title: "Képkirakó játék",
              imageMobile: "https://picsum.photos/300/435/?rnd=2",
              imageDesktop: "https://picsum.photos/300/435/?rnd=2",
              tech: "Vue, Vuex, Ajax",
              brief:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt id quis porro?",
              description:
                "",
              technology: [
                {
                  icon: "logos:html-5",
                  width: 24,
                },
                {
                  icon: "logos:css-3",
                  width: 24,
                },
                {
                  icon: "logos:vue",
                  width: 30,
                },
              ],
              buttonDemo: {
                text: "View Demo",
                icon: "healthicons:eye",
                anchor: "https://mozvik.github.io/vue-quiz/",
              },
              buttonCode: {
                text: "Github Repository",
                icon: "akar-icons:github-outline-fill",
                anchor: "https://github.com/mozvik/vue-quiz",
              },
            },
          
            {
              title: "Recipe Book App",
              imageMobile: "https://picsum.photos/300/435/?rnd=4",
              imageDesktop: "https://picsum.photos/300/435/?rnd=4",
              tech: "Angular",
              brief:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti laboriosam!",
              description:
                "",
              technology: [
                {
                  icon: "logos:angular-icon",
                  width: 26,
                },
                {
                  icon: "logos:php",
                  width: 50,
                },
              ],
              buttonDemo: {
                text: "View Demo",
                icon: "healthicons:eye",
                anchor: "https://mozvik.github.io/vue-quiz/",
              },
              buttonCode: {
                text: "Github Repository",
                icon: "akar-icons:github-outline-fill",
                anchor: "https://github.com/mozvik/vue-quiz",
              },
            },
            {
              title: "EsoGuides - Gaming Website",
              imageMobile: "https://picsum.photos/300/435/?rnd=5",
              imageDesktop: "https://picsum.photos/300/435/?rnd=5",
              tech: "React",
              brief:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, deleniti laboriosam!",
              description:
                "",
              technology: [
                {
                  icon: "logos:react",
                  width: 26,
                },
                {
                  icon: "logos:php",
                  width: 50,
                },
              ],
              buttonDemo: {
                text: "View Demo",
                icon: "healthicons:eye",
                anchor: "https://esoguides.hu",
              },
              buttonCode: {
                text: "",
                icon: "",
                anchor: "",
              },
            },
          ],
          backTitle: "PORTFÓLIÓ"
        },
        contactView: {
          title: "KAPCSOLAT",
          subtitle: "Küldjön üzenetet",
          delivering: "Üzenet küldése folyamatban",
          delivered: "Az üzenet elküldve",
          error: "Hiba történt",
          name: "Név",
          email: "E-mail",
          message: "Üzenet",
          send: "Küldés",
          backTitle: "KAPCSOLAT"
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
    currentLanguage: "en"
})

const computed = {
  setLang(lang) {
    state.currentLanguage = lang
    return state.langData[lang]
  },
  currentLanguageData() {
    return state.langData[state.currentLanguage]
  }
}

export default {
    state,
    computed
}