// Cliccando sulla chat vedo quella corrispondente;
// la chat dovrà avere header con dati relativi a chat attiva;
// La relativa chat in elenco rimane selezionata

// Istanza Vue js

var app = new Vue({
  el: '#window',
  data: {
    chat: [
        {
        img: "img/avatar_1.jpg",
        username: "Michele",
        lastAccess: "Ultimo accesso oggi 20.11.2020 alle 16.43",
        lastMessage: "Dai allora ci vediamo la prossima settimana"
      },
      {
      img: "img/avatar_2.jpg",
      username: "Fabio",
      lastAccess: "Ultimo accesso oggi 21.11.2020 alle 17.43",
      lastMessage: "Ok la prossima volta non potrai mancare"
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


    // {
    //   img: "img/avatar_2.jpg",
    //   username: "Fabio",
    //   lastAccess: "Ultimo accesso oggi 20.11.2020 alle 16.43"
    // },
    ]
  }
})
