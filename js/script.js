

const { createApp } = Vue;
createApp({
    data(){
        return{
            //creo contenitore di messaggi inviati 
            sentMessages: [] , 
            //creo contenitore di messaggi ricevuti 
            receivedMessages: [] ,
            //contenitore nome dell' oggetto selezionato 
            contactName: '',
            //array di oggetti
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
            
        }
         
    },
    
        methods: {
            //creo funzione per dividere messaggi inviati e ricevuti 
            formatMessages(messages) {
                // Array per i messaggi ordinati 
                const formattedMessages = []; 
                // Stato precedente (inizialmente null)
                let prevStatus = null; 
              
                for (let i = 0; i < messages.length; i++) { // Ciclo "for" che scorre gli elementi dell'array "messages"
                  const message = messages[i]; // Messaggio corrente
                  const { status } = message; // Estrapola lo stato dal messaggio corrente
              
                  if (status !== prevStatus) { // Se lo stato è diverso dallo stato precedente
                    prevStatus = status; // Aggiorna lo stato precedente con lo stato corrente
                    formattedMessages.push({ // Aggiungi un nuovo oggetto al formato dei messaggi
                      ...message, // Copia tutti i campi del messaggio corrente
                      class: status === 'sent' ? 'inviato' : 'ricevuto' // Aggiunge una proprietà "class" basata sullo stato
                    });
                  } else { // Se lo stato è lo stesso dello stato precedente
                    const lastMessage = formattedMessages[formattedMessages.length - 1]; // Ottieni l'ultimo messaggio formattato
                    lastMessage.message += '\n' + message.message; // Aggiungi il messaggio corrente al messaggio precedente con un newline
                  }
                }
              
                return formattedMessages; // Restituisci l'array dei messaggi ordinati
              },
              
              selectContact(index) {
                // Ottieni il contatto selezionato
                const selectedContact = this.contacts[index];
                
                // Aggiorna le informazioni del contatto attivo
                this.contactName = selectedContact.name;
                this.selectedAvatar = selectedContact.avatar;
              
                // ordina i messaggi del contatto selezionato
                const messages = selectedContact.messages.map(message => ({
                  ...message,
                  class: message.status === 'sent' ? 'inviato' : 'ricevuto'
                }));
              
                // Formatta i messaggi raggruppandoli per inviati e ricevuti
                const formattedMessages = this.formatMessages(messages);
                const sentMessages = formattedMessages.filter(message => message.status === 'sent');
                const receivedMessages = formattedMessages.filter(message => message.status === 'received');
              
                // Aggiorna le variabili di stato dei messaggi inviati e ricevuti
                this.sentMessages = sentMessages;
                this.receivedMessages = receivedMessages;
              
                // Seleziona l'elemento del chat nel DOM
                const chatElement = document.querySelector('.chat');
              
                // Rimuovi i messaggi precedenti dal chat
                chatElement.innerHTML = '';
              
                // Funzione per creare un elemento messaggio nel DOM
                const createMessageElement = (message, isSent) => {
                  const messageDiv = document.createElement('div');
                  messageDiv.classList.add('messaggio', isSent ? 'inviato' : 'ricevuto');
                  const messageContent = document.createElement('p');
                  messageContent.textContent = message.message;
                  messageDiv.appendChild(messageContent);
                  return messageDiv;
                };
              
                // Aggiungi i messaggi formattati al chat nel DOM
                formattedMessages.forEach(message => {
                  const isSent = message.status === 'sent';
                  const messageDiv = createMessageElement(message, isSent);
                  chatElement.appendChild(messageDiv);
                });
            }
    }

}).mount('#app');
