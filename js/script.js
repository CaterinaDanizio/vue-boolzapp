// Cliccando sulla chat vedo quella corrispondente;
// la chat dovrà avere header con dati relativi a chat attiva;
// La relativa chat in elenco rimane selezionata

// Istanza Vue js

var app = new Vue({
  el: '#window',
  data: {
      chatActive: 0,
      chat: [
          {
          img: "img/avatar_1.jpg",
          username: "Michele",
          lastAccess: "Ultimo accesso oggi 20.11.2020 alle 16.43",
          lastMessage: "",
// Creo un array che contenga i messaggi della chat con ogni singolo user
          indexMsg: 0,
          msg: [
            {message1: "Ciao come stai?",
            message2: "Io tutto alla grande, mi sono ripresa completamente. E tu?",
            message3: "Non c'è male...La serata di ieri è stata una bomba atomica. Peccato che non sei riuscita a venire. Come stai oggi?",
            message4: "Dai allora la prossima volta non puoi mancare"
          },
          ],
        },
        {
        img: "img/avatar_2.jpg",
        username: "Fabio",
        lastAccess: "Ultimo accesso oggi 21.11.2020 alle 17.43",
        lastMessage: "Fai una capricciosa, grazie",

        indexMsg: 0,
        msg: [
          {message1: "Stasera prendo le pizze",
          message2: "Ah ok perfetto...ma per che ora facciamo?",
          message3: "Pensavo per le 21, ok? Dimmi come la vuoi che le ordino in anticipo",
          message4: "Fai una capricciosa, grazie",
          message5: "Vaaaa benee, a più tardi"
        },
        ],
      },
      {
      img: "img/avatar_3.jpg",
      username: "Samuele",
      lastAccess: "Ultimo accesso oggi 22.11.2020 alle 17.43",
      lastMessage: "Sei la migliore ever"
    },
      {
      img: "img/avatar_4.jpg",
      username: "Luisa",
      lastAccess: "Ultimo accesso oggi 24.11.2020 alle 18.43",
      lastMessage: "Dove sei?"
    },
  ],
},

methods: {
     chatSelect: function (index) {
       this.chatActive = index;
     },
  },
})
