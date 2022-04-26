const testData = {
  lists: [
    {
      id: 0,
      name: "Köplista",
    },
    {
      id: 1,
      name: "Läslista"
    }
  ],

  entries: [
    {
      id: 0,
      belongsTo: 1,
      checked: false,
      text: "The Dream-Quest of Unknown Kadath"
    },
    {
      id: 1,
      belongsTo: 1,
      checked: false,
      text: "The Call of Cthulhu"
    },    
    {
      id: 2,
      belongsTo: 1,
      checked: false,
      text: "The Shadow over Innsmouth"
    },
    {
      id: 3,
      belongsTo: 0,
      checked: false,
      text: "Äpplen"
    },
    {
      id: 4,
      belongsTo: 0,
      checked: false,
      text: "Bananer"
    },
    {
      id: 5,
      belongsTo: 0,
      checked: false,
      text: "Apelsiner"
    },
    {
      id: 6,
      belongsTo: 0,
      checked: false,
      text: "Päron"
    }
  ]
}

export default testData