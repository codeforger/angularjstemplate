const subjectList = [
  {
    id: 0,
    name: "Biology",
    description: {
      short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elit quis velit egestas dapibus. Aliquam dapibus feugiat ultrices. Nunc.",
      long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel arcu non tellus finibus elementum. Phasellus mollis dolor aliquet vestibulum imperdiet. Donec mollis lobortis tincidunt. Etiam vehicula sapien in mattis ullamcorper. Mauris maximus lectus vitae arcu porta elementum. Aliquam vel elit et quam rhoncus posuere quis sit amet orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum."
    },
    topics: [
      'Animals',
      'Macromolecules',
      'Diffusion and osmosis',
      'Homeostasis',
      'Cell biology',
      'Virology',
      'Immunology',
      'Evolution',
      'Taxonomy',
      'Botany',
      'Zoology',
      'Paleontology',
      'Biodiversity',
    ],
  },
  {
    id: 1,
    name: "Mathematics",
    description: {
      short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elit quis velit egestas dapibus. Aliquam dapibus feugiat ultrices. Nunc.",
      long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel arcu non tellus finibus elementum. Phasellus mollis dolor aliquet vestibulum imperdiet. Donec mollis lobortis tincidunt. Etiam vehicula sapien in mattis ullamcorper. Mauris maximus lectus vitae arcu porta elementum. Aliquam vel elit et quam rhoncus posuere quis sit amet orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum."
    },
    topics: [
      'Algebra',
      'Calculus and analysis',
      'Geometry and topology',
      'Combinatorics',
      'Logic',
      'Number theory',
      'Mathematical physics',
      'Computation',
      'Statistics',
      'Operations',
    ],
  },
  {
    id: 2,
    name: "Science",
    description: {
      short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elit quis velit egestas dapibus. Aliquam dapibus feugiat ultrices. Nunc.",
      long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel arcu non tellus finibus elementum. Phasellus mollis dolor aliquet vestibulum imperdiet. Donec mollis lobortis tincidunt. Etiam vehicula sapien in mattis ullamcorper. Mauris maximus lectus vitae arcu porta elementum. Aliquam vel elit et quam rhoncus posuere quis sit amet orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum."
    },
  },
  {
    id: 3,
    name: "Health",
    description: {
      short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elit quis velit egestas dapibus. Aliquam dapibus feugiat ultrices. Nunc.",
      long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel arcu non tellus finibus elementum. Phasellus mollis dolor aliquet vestibulum imperdiet. Donec mollis lobortis tincidunt. Etiam vehicula sapien in mattis ullamcorper. Mauris maximus lectus vitae arcu porta elementum. Aliquam vel elit et quam rhoncus posuere quis sit amet orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum."
    },
  },
  {
    id: 4,
    name: "English",
    description: {
      short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elit quis velit egestas dapibus. Aliquam dapibus feugiat ultrices. Nunc.",
      long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel arcu non tellus finibus elementum. Phasellus mollis dolor aliquet vestibulum imperdiet. Donec mollis lobortis tincidunt. Etiam vehicula sapien in mattis ullamcorper. Mauris maximus lectus vitae arcu porta elementum. Aliquam vel elit et quam rhoncus posuere quis sit amet orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum."
    },
  },
  {
    id: 5,
    name: "Geography",
    description: {
      short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elit quis velit egestas dapibus. Aliquam dapibus feugiat ultrices. Nunc.",
      long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel arcu non tellus finibus elementum. Phasellus mollis dolor aliquet vestibulum imperdiet. Donec mollis lobortis tincidunt. Etiam vehicula sapien in mattis ullamcorper. Mauris maximus lectus vitae arcu porta elementum. Aliquam vel elit et quam rhoncus posuere quis sit amet orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum."
    },
  },
  {
    id: 6,
    name: "History",
    description: {
      short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elit quis velit egestas dapibus. Aliquam dapibus feugiat ultrices. Nunc.",
      long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel arcu non tellus finibus elementum. Phasellus mollis dolor aliquet vestibulum imperdiet. Donec mollis lobortis tincidunt. Etiam vehicula sapien in mattis ullamcorper. Mauris maximus lectus vitae arcu porta elementum. Aliquam vel elit et quam rhoncus posuere quis sit amet orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum."
    },
  },
  {
    id: 7,
    name: "Computer Science",
    description: {
      short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elit quis velit egestas dapibus. Aliquam dapibus feugiat ultrices. Nunc.",
      long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel arcu non tellus finibus elementum. Phasellus mollis dolor aliquet vestibulum imperdiet. Donec mollis lobortis tincidunt. Etiam vehicula sapien in mattis ullamcorper. Mauris maximus lectus vitae arcu porta elementum. Aliquam vel elit et quam rhoncus posuere quis sit amet orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum."
    },
  },
  {
    id: 8,
    name: "Art",
    description: {
      short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elit quis velit egestas dapibus. Aliquam dapibus feugiat ultrices. Nunc.",
      long: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel arcu non tellus finibus elementum. Phasellus mollis dolor aliquet vestibulum imperdiet. Donec mollis lobortis tincidunt. Etiam vehicula sapien in mattis ullamcorper. Mauris maximus lectus vitae arcu porta elementum. Aliquam vel elit et quam rhoncus posuere quis sit amet orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum."
    },
  }
];
