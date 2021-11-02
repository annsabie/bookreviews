const { Book } = require('../models');

const bookData = [
  {
    book_name: "Transcendent Kingdom",
    book_description: "Yaa Gyasi's stunning follow-up to her acclaimed national bestseller Homegoing is a powerful, raw, intimate, deeply layered novel about a Ghanaian family in Alabama.",
    author_name: "Yaa Gyasi",
  },
  {
    book_name: "Memorial Drive",
    book_description: "A chillingly personal and exquisitely wrought memoir of a daughter reckoning with the brutal murder of her mother at the hands of her former stepfather, and the moving, intimate story of a poet coming into her own in the wake of a tragedy.",
    author_name: "Natasha Trethewey",
  },
  {
    book_name: "The Mountains Sing",
    book_description: "The Mountains Sing tells an enveloping, multi-generational tale of the Trần family, set against the backdrop of the Việt Nam War. Both vast in scope and intimate in its telling ... Moving and riveting. - Viet Thanh Nguyen, author of The Sympathizer, winner of the Pulitzer Prize",
    author_name: "Nguyen Phan Que Mai",
  },
  {
    book_name: "Girl, Woman, Other",
    book_description: "Joyfully polyphonic and vibrantly contemporary, this is a gloriously new kind of history, a novel of our times: celebratory, ever-dynamic and utterly irresistible. ―Booker Prize citation",
    author_name: "Bernardine Evaristo",
  },
  
];

const seedBook = () => Book.bulkCreate(bookData);

module.exports = seedBook;