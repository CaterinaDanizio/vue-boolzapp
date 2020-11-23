// Cliccando sulla chat vedo quella corrispondente;
// la chat dovrà avere header con dati relativi a chat attiva;
// La relativa chat in elenco rimane selezionata

// Istanza Vue js
var app = new Vue({
  el: '#window',
  data: {

    // Index chat attiva
      chatActive: 0,

  // Elenco chat
    // Chat 1
      chat: [
          {
          img: "img/avatar_1.jpg",
          username: "Michele",
          lastAccess: "Ultimo accesso oggi 20.11.2020 alle 16.43",

    // Chat 1: messaggi
          msg: [
            {type: "sent",
            text: "Ciao come stai?"
            },

            {type: "ric",
             text: "Io tutto alla grande, mi sono ripresa completamente. E tu?"
            },

            {type: "sent",
             text: "Io tutto alla grande, mi sono ripresa completamente. E tu?"
            },

            {type: "ric",
             text: "Non c'è male...La serata di ieri è stata una bomba atomica. Peccato che non sei riuscita a venire. Come stai oggi?"
            },

            {type: "sent",
             text: "Dai allora la prossima volta non puoi mancare"
            },
          ],
        },

    // Chat 2
        {
        img: "img/avatar_2.jpg",
        username: "Fabio",
        lastAccess: "Ultimo accesso oggi 21.11.2020 alle 17.43",


    // Chat 2: messaggi
        msg: [
          {type: "sent",
          text: "Stasera prendo le pizze"
          },

          {type: "ric",
           text: "Ah ok perfetto...ma per che ora facciamo?"
          },

          {type: "sent",
           text: "Pensavo per le 21, ok? Dimmi come la vuoi che le ordino in anticipo"
          },

          {type: "ric",
           text: "Fai una capricciosa, grazie"
          },

          {type: "sent",
           text: "Vaaaa benee, a più tardi"
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
        text: "Ho preso un cagnolino e ho bisogno di chiederti qualche consiglio "
        },

        {type: "sent",
         text: "Noooo davvero? Spettacolo...come si chiama? Dove l'hai preso?"
        },

        {type: "ric",
         text: "L'ho chiamata Nala perchè sembra una piccola leonessa. L'ho presa in canile, è una meticcia"
        },

        {type: "ric",
         text: "Quando puoi ci sentiamo che ti racconto"
        },

        {type: "sent",
         text: "Volentieri"
        },
      ],
      },

      // Chat 4

      {
      img: "img/avatar_4.jpg",
      username: "Luisa",
      lastAccess: "Ultimo accesso oggi 24.11.2020 alle 18.43",

      msg: [
        {type: "ric",
        text: "Ti devo raccontare dell'altra sera"
        },

        {type: "sent",
         text: "Cos'è successo? Voglio i dettagli"
        },

        {type: "ric",
         text: "Ehehehe sono uscita con un tipo nuovo, affascinante...abbiamo passato una bella serata"
        },

        {type: "ric",
         text: "Dopo tanti perdigiorno...finalmente uno decente"
        },

        {type: "sent",
         text: "Dobbiamo sentirci assolutamente, devo sapere tutto"
        },
      ],
    },
  ],
},

methods: {
     chatSelect: function (index) {
       return this.chatActive = index;
     },
  },
})
