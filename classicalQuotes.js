const quotes = [
  {
    author: "Manilius",
    work: "Astronomica",
    poetry: true,
    citation: "1.7-10",
    quote: `You, Caesar, First Citizen and Father of 
    your country, who rule a world obedient to your
    august laws and merit the heaven granted to your
    sire, yourself a god, are the one who inspires
    this purpose and gives me strength for such
    lofty themes.`,
  },
  {
    author: "Theocritus",
    work: "Anthologia Palatina",
    poetry: true,
    citation: "9.434 (= testimonia 8)",
    quote: `The Chian is another man, but I, 
    Theocritus, who wrote these poems, am one of 
    the great populace of Syracuse, the son of 
    Praxagoras and renowned Philinna;
    and the Muse I have adopted is no alien.`,
  },
  {
    author: "Antipater of Thessalonica",
    work: "Anthologia Palatina",
    poetry: true,
    citation: "7.18",
    quote: `Do not judge the man by the stone. 
    Simple is the tomb to look on, but holds the 
    bones of a great man. You shall know Alcman 
    the supreme striker of the Laconian lyre, 
    possessed by the nine Muses. Here he lies,
    a cause of dispute to two continents:
    whether he be a Lydian or a Spartan. 
    Minstrils have many mothers.`,
  },
  {
    author: "Statius",
    work: "Silvae",
    poetry: true,
    citation: "1.3.34-38",
    quote: `What shall I sing to begin with or halfway? 
    On what ending shall I fall silent? Shall I wonder
    at gilded beams or Moorish doorposts everywhere or
    marble lucent with colors or water discharged 
    through every bedchamber? Eyes draw me one way, 
    mind another.`,
  },
  {
    author: "Cicero",
    work: "Pro Roscio",
    poetry: false,
    citation: "17",
    quote:
      "If hot coals, when thrown into water, are at once cooled and extinguished, do not the fiery arrows of slander, when brought up against a life of the greatest innocence and purity, immediately fall to the ground and lose their fire?",
  },
  {
    author: "Antiphon",
    work: "Prosecution of the Stepmother for Poisoning",
    poetry: false,
    citation: "18-19",
    quote:
      "After supper was over, the two naturally set about pouring libations and sprinkling some frankincense to secure the favor of heaven, as the one was offering sacrifice to Zeus Ctesius and entertaining the other, and his companion was supping with a friend and on the point of putting out to sea. But Philoneos' mistress, who poured the wine for the libation, while they offered their prayers -- prayers never to be answered, gentlemen -- poured in the poison with it.",
  },
  {
    author: "Appian",
    work: "Roman History",
    poetry: false,
    citation: "3.1-2",
    quote:
      "When Sulpicius said that he did not have the authority to make a decision in the matter of peace, and secretly wrote to the Senate telling them that it was to Rome's advantage to be at war with Philip, the Senate prevented an agreement being made and sent ten thousand infantry and one thousand cavalry to help the Aetolians, who used them to capture Ambracia, although they sailed away shortly after and Philip recovered it.",
  },
  {
    author: "Livy",
    work: "Ab Urbe Condita",
    poetry: false,
    citation: "7.20.8-9",
    quote:
      "The people were moved, not so much by their present claims as by their ancient merits, and chose rather to forget an injury than a kindness. So peace was granted to the people of Caere, and it was resolved that a truce of a hundred years be made, and recorded on a table of bronze.",
  },
  {
    author: "Terence",
    work: "Phormio",
    poetry: true,
    citation: "260-262",
    quote: `Should I not be angry with him? I can't 
    wait for him to show his face, so I can tell him 
    that his easygoing father has become an 
    extremely harsh one and it's all his fault.`,
  },
  {
    author: "Longinus",
    work: "On The Sublime",
    poetry: false,
    citation: "1.20.2-3",
    quote:
      "Then to prevent the speech coming to a halt by running over the same ground - for immobility expresses inertia, while emotion, being a violent movement of the soul, demands disorder - he leaps at once into further asyndeta and anaphoras. 'By his manner, his looks, his voice, when he strikes with insult, when he strikes like an enemy, when he strikes with his knuckles, when he strikes you like a slave.' Here the orator does just the same as the aggressor, he belabors the minds of the jury with blow after blow.",
  },
  {
    author: "Aeneas Tacticus",
    work: "On the Defense of Fortified Positions",
    poetry: false,
    citation: "20.1-2",
    quote:
      "To prevent deception of the kinds just mentioned, in the first place the general ought before dining to give personal attention to the locking of the gate, and not carelessly to trust to anyone else, while in dangerous situations he must be extremely vigilant about this. Next, the bar should have three or four strips of iron from end to end, for thus it cannot be sawed through.",
  },
  {
    author: "Diodorus Siculus",
    work: "Library of History",
    poetry: false,
    citation: "11.2.3-4",
    quote:
      "Then, dividing his army, he sent in advance a sufficient number of men both to bridge the Hellespont and to dig a canal through Athos at the neck of the Cherronesus, in this way not only making the passage safe and short for his forces but also hoping by the magnitude of his exploits to strike the Greeks with terror before his arrival.",
  },
  {
    author: "Cicero",
    work: "De Officiis",
    poetry: false,
    citation: "1.55",
    quote:
      "But of all the bonds of fellowship, there is none more noble, none more powerful than when good men of congenial character are joined in intimate friendship; for really, if we discover in another that moral goodness on which I dwell so much, it attracts us and makes us friends to the one in whose character it seems to dwell.",
  },
  {
    author: "Quintus Smyrnaeus",
    work: "Posthomerica",
    poetry: true,
    citation: "5.45-48",
    quote: `Numberless tribes of hardworking men
    living in fair cities and overseen by Justice
    turned their hands to their various tasks as the
    barns were loaded with abundant crops and the
    black earth flourished.`,
  },
  {
    author: "Homer",
    work: "Iliad",
    poetry: true,
    citation: "5.657-659",
    quote: `Sarpedon struck him square on the neck,
    and the grevious point passed clean through,
    and down on his eyes came the darkness of night
    and enfolded him.`,
  },
  {
    author: "Polyaenus of Sardis",
    work: "Anthologia Palatina",
    poetry: true,
    citation: "9.1",
    quote: `A cruel viper struck the nursing udder of
    a doe which had newly calved as it hung down
    full of milk. Her fawn sucked the teat
    contaminated by poison.`,
  },
  {
    author: "Cicero",
    work: "Letters to Brutus",
    poetry: false,
    citation: "I.11 (=16)",
    quote:
      "To me, on the other hand, he voluntarily promised and gave HS 2,000,000 out of his own funds and, what is worth much more, put himself in my way and joined me.",
  },
];

export default quotes;
