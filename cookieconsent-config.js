// HTML Stylesheet: <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.css">
// HTML Script import: <script type="module" src="./cookieconsent-config.js"></script>

import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

    CookieConsent.run({
       root: 'body',
       autoShow: true,
      // disablePageInteraction: true,
       hideFromBots: true,
      // mode: 'opt-in',
      // revision: 0,

      cookie: {
        name: 'cc_cookie',
         domain: location.hostname,
         path: '/',
         sameSite: "Lax",
         expiresAfterDays: 365,
      },

      guiOptions: {
        consentModal: {
          layout: 'cloud inline',
          position: 'bottom center',
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          equalWeightButtons: true,
          flipButtons: false
        }
      },

      onFirstConsent: ({cookie}) => {
        console.log('onFirstConsent fired', cookie);
        loadGTM();
      },

      onConsent: ({cookie}) => {
        console.log('onConsent fired!', cookie);
        loadGTM();
      },

      onChange: ({changedCategories, changedServices}) => {
        console.log('onChange fired!', changedCategories, changedServices);
      },

      onModalReady: ({modalName}) => {
        console.log('ready:', modalName);
      },

      onModalShow: ({modalName}) => {
        console.log('visible:', modalName);
      },

      onModalHide: ({modalName}) => {
        console.log('hidden:', modalName);
      },

      categories: {
        necessary: {
          enabled: true,  // this category is enabled by default
          readOnly: true  // this category cannot be disabled
        },
        // analytics: {
        //   autoClear: {
        //     cookies: [
        //       {
        //         name: /^_ga/,   // regex: match all cookies starting with '_ga'
        //       },
        //       {
        //         name: '_gid',   // string: exact cookie name
        //       }
        //     ]
        //   },
        //   services: {
        //     ga: {
        //       label: 'Google Analytics',
        //       onAccept: () => {
        //         loadGTM();
        //       },
        //       onReject: () => {
        //         // Handle the rejection
        //       }
        //     },
        //     youtube: {
        //       label: 'Youtube Embed',
        //       onAccept: () => {},
        //       onReject: () => {}
        //     },
        //   }
        // },
        ads: {}
      },

      language: {
        default: 'cs',
        translations: {
          cs: {
            consentModal: {
              title: 'Cookies pro Zahradanastrese.cz',
              description: 'Na našich webových stránkách používáme cookies, abychom vám usnadnili a zlepšili váš online zážitek. Pokračováním v prohlížení našich stránek souhlasíte s jejich používáním.',
              acceptAllBtn: 'Přijmout všechny',
              acceptNecessaryBtn: 'Odmítnout všechny',
              showPreferencesBtn: 'Podrobné nastavení',
            },
            preferencesModal: {
              title: 'Podrobné nastavení cookies',
              acceptAllBtn: 'Přijmout všechny',
              acceptNecessaryBtn: 'Odmítnout všechny',
              savePreferencesBtn: 'Přijmout pouze vybrané',
              closeIconLabel: 'Close modal',
              serviceCounterLabel: 'Služba|Služby',
              sections: [
                {
                  title: 'Vaše nastavení soukromí',
                  description: `V tomto panelu můžete vyjádřit své preference týkající se zpracování vašich osobních údajů. Svá rozhodnutí můžete kdykoli přezkoumat a změnit znovu otevřením tohoto panelu prostřednictvím poskytnutého odkazu. Pokud nesouhlasíte se specifickými zpracovatelskými aktivitami uvedenými níže, přepněte příslušné přepínače do polohy vypnuto nebo použijte tlačítko "Odmítnout vše" a potvrďte, že chcete své volby uložit.`,
                },
                {
                  title: 'Nezbytně nutné soubory cookies',
                  description: 'Tyto soubory zajišťují správné fungování webu a nelze je zakázat.',
                  linkedCategory: 'necessary'
                },
                // {
                //   title: 'Analytické a marketingové cookies',
                //   description: 'Zajišťují měření návštěvnosti webu a interakce pomocí služeb google analytics a google ads.<br /><br /> Povolením cookies pro vložená videa z YouTube souhlasíte s tím, že YouTube může na vaše zařízení umístit cookies, když na našich webových stránkách sledujete vložená videa z YouTube. Tyto cookies jsou YouTube používány ke sledování vašeho chování při sledování videí, preferencí a interakcí s jejich obsahem. To může zahrnovat shromažďování údajů pro personalizovanou reklamu, doporučení videí a analytiku.',
                //   linkedCategory: 'analytics',
                //   cookieTable: {
                //     caption: 'Cookies',
                //     headers: {
                //       name: 'Cookie',
                //       domain: 'Doména',
                //       desc: 'Popis'
                //     },
                //     body: [
                //       {
                //         name: '_ga',
                //         domain: location.hostname,
                //         desc: 'Cookie používána službou Google Analytics k rozlišení jednotlivých uživatelů',
                //       },
                //       {
                //         name: '_gid',
                //         domain: location.hostname,
                //         desc: 'Cookie používána službou Google Analytics k rozlišení jednotlivých uživatelů během 24 hodin po návštěvě',
                //       }
                //     ]
                //   }
                // },
                // // {
                // //   title: 'Targeting and Advertising',
                // //   description: 'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
                // //   linkedCategory: 'ads',
                // // },
                {
                  title: 'Více informací',
                  description: 'Pro jakékoli dotazy týkající se naší politiky o cookies a vašich voleb nás můžete <a href="#contact-form">kontaktovat.</a>'
                }
              ]
            }
          }
        }
      }
    });

function loadGTM() {
    // if (!window.googleAnalyticsLoaded) {
    //     window.googleAnalyticsLoaded = true;
    //     // Load the Google Analytics script
    //     var gaScript = document.createElement('script');
    //     gaScript.async = true;
    //     gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-04YJSCS19F'; // Replace 'G-XXXXXXXX' with your Google Analytics ID
    //     document.head.appendChild(gaScript);
    
    //     // Initialize Google Analytics after the script is loaded
    //     gaScript.onload = function() {
    //         window.dataLayer = window.dataLayer || [];
    //         function gtag() { dataLayer.push(arguments); }
    //         gtag('js', new Date());
    
    //         gtag('config', 'G-04YJSCS19F'); // Replace 'G-XXXXXXXX' with your Google Analytics ID
    //     };
    // }
}
