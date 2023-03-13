const { createApp } = Vue
  
  createApp({

    // dentro data() abbiamo un oggetto che ci restituisce tutte le informazioni
    // che potremmo inserire, manipolare e leggere dal document
    data() {
      return {
        // dentro questo oggetto possiamo inserire tutte le proprietà che vogliamo
        title: "Primo approccio a Vue",
        nome: "Gabriel",
        alunni: ["luca", "edoardo", "niccolò"],
        umore: "bene",
        titleClass: 'red',
        inputUtente: "",
      }
    },


    methods: {
      // qui possiamo scrivere le nostre funzioni
      // da utilizzare nella nostra pagina
      // ricordiamoci che questi sono metodi
      // dell'oggetto methods{}
      // in quanto tali vanno separati con la virgola
      changeTitleClass() {
        // prendere ciò che è scritto dentro l'input
        // inserirlo come classe del titolo

        // non modifichiamo più direttamente gli elementi in pagina
        // modifichiamo invece le proprietà di data()
        // che verranno aggiornate in pagina

        // Vue ci permette di accedere alle proprietà
        // dell'oggetto restituito in data() con
        this.titleClass = this.inputUtente;
        
      },
      // ^ ecco la virgola che li separa


      // funzione che al click del titolo ne cambia il testo
      changeText() {
        
        this.title = this.inputUtente;
        
      },

    },

}).mount('#app');