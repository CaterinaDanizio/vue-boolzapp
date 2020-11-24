// Cliccando sulla chat vedo quella corrispondente;
// la chat dovrà avere header con dati relativi a chat attiva;
// La relativa chat in elenco rimane selezionata

// Istanza Vue js
var app = new Vue({
  el: '#window',
  data: {

    // Index chat attiva
      chatActive: 0,
      newText: "",

  // Elenco chat
    // Chat 1
      chat: [
          {
          img: "img/avatar_1.jpg",
          username: "Michele",
          lastAccess: "Ultimo accesso 20.11.2020 alle 16.43",


    // Chat 1: messaggi
          msg: [
            {type: "sent",
            text: "Ciao come stai?",
            date: "20.11.2020 ore 16.00"
            },

            {type: "ric",
             text: "Io tutto alla grande, mi sono ripresa completamente. E tu?",
             date: "20.11.2020 ore 16.03"
            },

            {type: "sent",
             text: "Io tutto alla grande, mi sono ripresa completamente. E tu?",
             date: "20.11.2020 ore 16.07"
            },

            {type: "ric",
             text: "Non c'è male...La serata di ieri è stata una bomba atomica. Peccato che non sei riuscita a venire. Come stai oggi?",
             date: "20.11.2020 ore 16.09"
            },

            {type: "sent",
             text: "Dai allora la prossima volta non puoi mancare",
             date: "20.11.2020 ore 16.11"
            },
          ],
        },

    // Chat 2
        {
        img: "img/avatar_2.jpg",
        username: "Fabio",
        lastAccess: "Ultimo accesso 21.11.2020 alle 17.43",


    // Chat 2: messaggi
        msg: [
          {type: "sent",
          text: "Stasera prendo le pizze",
          date: "21.11.2020 ore 16.03"
          },

          {type: "ric",
           text: "Ah ok perfetto...ma per che ora facciamo?",
           date: "21.11.2020 ore 16.04"
          },

          {type: "sent",
           text: "Pensavo per le 21, ok? Dimmi come la vuoi che le ordino in anticipo",
           date: "21.11.2020 ore 16.06"
          },

          {type: "ric",
           text: "Fai una capricciosa, grazie",
           date: "21.11.2020 ore 16.07",
          },

          {type: "sent",
           text: "Vaaaa benee, a più tardi. Non vedo l'ora",
           date: "21.11.2020 ore 16.09"
          },
        ],
       },

    // Chat 3
      {
      img: "img/avatar_3.jpg",
      username: "Samuele",
      lastAccess: "Ultimo accesso oggi 23.11.2020 alle 21.43",

    // Chat 3: messaggi
      msg: [
        {type: "ric",
        text: "Ho preso un cagnolino e ho bisogno di chiederti qualche consiglio",
        date: "19.11.2020 ore 22.15"
        },

        {type: "sent",
         text: "Noooo davvero? Spettacolo...come si chiama? Dove l'hai preso?",
         date: "19.11.2020 ore 22.17"
        },

        {type: "ric",
         text: "L'ho chiamata Nala perchè sembra una piccola leonessa. L'ho presa in canile, è una meticcia",
         date: "19.11.2020 ore 22.25"
        },

        {type: "ric",
         text: "Quando puoi ci sentiamo che ti racconto",
         date: "19.11.2020 ore 22.26"
        },

        {type: "sent",
         text: "Volentieri, ci conto",
         date: "19.11.2020 ore 22.27"
        },
      ],
      },

      // Chat 4

      {
      img: "img/avatar_6.jpg",
      username: "Sara",
      lastAccess: "Ultimo accesso 24.11.2020 alle 18.43",

      msg: [
        {type: "ric",
        text: "Ti devo raccontare dell'altra sera",
        date: "24.11.2020 ore 16.03"
        },

        {type: "sent",
         text: "Cos'è successo? Voglio i dettagli",
         date: "24.11.2020 ore 16.04"
        },

        {type: "ric",
         text: "Ehehehe sono uscita con un tipo nuovo, affascinante...abbiamo passato una bella serata",
         date: "24.11.2020 ore 16.10"
        },

        {type: "ric",
         text: "Dopo tanti perdigiorno...finalmente uno decente",
         date: "24.11.2020 ore 16.11"
        },

        {type: "sent",
         text: "Dobbiamo sentirci assolutamente, devo sapere tutto",
         date: "24.11.2020 ore 16.15"
        },

        {type: "sent",
         text: "Non sto nella pelleeeee",
         date: "24.11.2020 ore 16.15"
        },

        {type: "ric",
         text: "E io non vedo l'ora di raccontarti tutto. Ti chiamo oggi pomeriggio",
         date: "24.11.2020 ore 16.20"
        },

        {type: "sent",
         text: "Ottimo, dopo le 20 mi trovi a casa",
         date: "24.11.2020 ore 16.27"
        },
       ],
      },
    ],
  },

  methods: {
       chatSelect: function (index) {
         return this.chatActive = index;
       },

       add: function() {
         this.chat[this.chatActive].msg.push(
           {
            text: this.newText,
            type: "sent"
          }),
           this.newText = "";
          },

       rispGen: function(){
          this.chat[this.chatActive].msg.push (
            {
             text: "ok",
             type: "ric"
          });
        },
      timeout: function () {
       setTimeout(this.rispGen, 1000)
      }
    }
});
