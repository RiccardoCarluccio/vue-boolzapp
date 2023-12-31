"use-strict"

// const CHAT_LIST = document.getElementById("chat-list");
const MAIN_CONTAINER = document.getElementById("main-container");

Vue.createApp({
  data() {
    return {
      contatti: [
        {
          name: "Michele",
          avatar: "_1",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di dargli da mangiare",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "received",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Luisa",
          avatar: "_4",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
      ],
      selectedChatIndex: 0,
    }
  },
  methods: {
    selectChat(index) {   //linkato all'"open-chat" in "chat-list"
      this.selectedChatIndex = index;
      console.log(this.selectedChatIndex);  //log test
    },
    sendMessage(sendText) {
      newMessage = {
          date: "placeholder",
          message: `${sendText}`,
          status: "sent",
        };
        this.contatti[this.selectedChatIndex].messages.push(newMessage);

        setTimeout(this.answerMessage, 1000);

      this.sendText = "";
    },
    answerMessage() {
      newAnswer = {
        date: "placeholder",
        message: "ok",
        status: "received",
      };

      this.contatti[this.selectedChatIndex].messages.push(newAnswer);
    },
  }
}).mount(MAIN_CONTAINER);