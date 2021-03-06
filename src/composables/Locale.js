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
              title: "BookBro",
              imageMobile: "https://picsum.photos/300/435/?rnd=2",
              imageDesktop: "https://picsum.photos/300/435/?rnd=2",
              tech: "Angular",
              brief:
                "Book finder that consumes Google Books API. My first Angular project:)",
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
                anchor: "https://mozvik.github.io/bookbro/",
              },
              buttonCode: {
                text: "Github Repository",
                icon: "akar-icons:github-outline-fill",
                anchor: "https://github.com/mozvik/bookbro",
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
                anchor: "",
              },
              buttonCode: {
                text: "Github Repository",
                icon: "akar-icons:github-outline-fill",
                anchor: "",
              },
            },
            {
              title: "Flix Buddy",
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
                anchor: "",
              },
              buttonCode: {
                text: "Github Repository",
                icon: "akar-icons:github-outline-fill",
                anchor: "",
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
            name: "Kezd??lap",
            id: "home",
            },
          about: {
            name:"R??lam",
            id: "about",
          },
          skills: {
            name: "K??szs??gek",
            id: "skills",
          },
          portfolio: {
            name: "Munk??im",
            id: "portfolio",
          },
          contact: {
            name: "Kapcsolat",
            id: "contact",
          },
        },
        homeView: {
          title1: "??dv??zl??m,", 
          title2: "Mozvik Attila vagyok",
          subTitle: "Web ??s Szoftverfejleszt??"
        },
        aboutView: {
          title: "R??LAM", 
          text1: "Szenved??lyemm?? v??lt a webfejleszt??s, ahol egyr??szt ki tudom fejezni a kreativit??somat, m??sr??szt meg tudom mutatni a programoz??i tud??somat is.",
          text2: "Szeretek alkotni ??s l??tni, ahogy egy projekt ??ltalam kel ??letre.",
          text3: "Szeretek foglalkozni anim??ci??k ??s k??l??nf??le effektusok k??sz??t??s??vel, vagy csup??n egy probl??m??ra megold??st tal??lni.",
          dlText: "??n??letrajz",
          backTitle: "R??LAM"
        },
        skillView: {
          title: "K??SZS??GEK", 
          text1: "F?? szakter??letem a front-end fejleszt??s, ",
          text2: "HTML, CSS, JavaScript.",
          text3: " Kisebb, reszponz??v web alkalmaz??sokat, ??s interakt??v fel??leteket k??sz??tek.",
          text4: "Ezen fel??l rendelkezem szerveroldali ",
          text5: "PHP",
          text6: " programnyelv ismeretekkel is.",
          backTitle: "K??SZS??GEK"
        },
        portfolioView: {
          title: "Munk??im", 
          text1: "",
          cards: [
            {
              title: "Kv??z Alkalmaz??s",
              imageMobile: "quiz-m.jpg",
              imageDesktop: "quiz.jpg",
              tech: "Vue, Vuex, Ajax",
              brief:
                "Egyszer?? kv??z alkalmaz??s Vue.js ??s Vuex ??ltal k??sz??tve.",
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
                text: "Demo ind??t??sa",
                icon: "healthicons:eye",
                anchor: "https://mozvik.github.io/vue-quiz/",
              },
              buttonCode: {
                text: "Forr??sk??d",
                icon: "akar-icons:github-outline-fill",
                anchor: "https://github.com/mozvik/vue-quiz",
              },
            },
            {
              title: "BookBro",
              imageMobile: "https://picsum.photos/300/435/?rnd=2",
              imageDesktop: "https://picsum.photos/300/435/?rnd=2",
              tech: "Angular",
              brief:
                "K??nyvkeres??, ami a Google Books API-j??t haszn??lja. Az els?? Angular munk??m:)",
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
                anchor: "https://mozvik.github.io/bookbro/",
              },
              buttonCode: {
                text: "Github Repository",
                icon: "akar-icons:github-outline-fill",
                anchor: "https://github.com/mozvik/bookbro",
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
              title: "Flix Buddy",
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
                anchor: "",
              },
              buttonCode: {
                text: "Github Repository",
                icon: "akar-icons:github-outline-fill",
                anchor: "",
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
          backTitle: "PORTF??LI??"
        },
        contactView: {
          title: "KAPCSOLAT",
          subtitle: "K??ldj??n ??zenetet",
          delivering: "??zenet k??ld??se folyamatban",
          delivered: "Az ??zenet elk??ldve",
          error: "Hiba t??rt??nt",
          name: "N??v",
          email: "E-mail",
          message: "??zenet",
          send: "K??ld??s",
          backTitle: "KAPCSOLAT"
        },
        switchLanguage: {
          en: "EN",
          hu: "HU",
        },
        switchTheme: {
          darkMode: "S??t??t m??d",
          lightMode: "Vil??gos m??d"
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