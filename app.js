

//sort();

const books = [
  {
    author: "Jane Doe",
    bookName: "The Mystery of the Enchanted Forest",
    genre: "Mystery",
    rating: 4.5
  },
  {
    author: "John Smith",
    bookName: "Adventures in Space",
    genre: "Science Fiction",
    rating: 3.8
  },
  {
    author: "Alice Johnson",
    bookName: "Love in the Time of Rain",
    genre: "Romance",
    rating: 4.2
  },
  {
    author: "Bob Williams",
    bookName: "Coding Chronicles",
    genre: "Technology",
    rating: 4.9
  }
];

const ascSort = books.sort((a, b) => a.rating - b.rating);
// const descSort = books.sort((a, b) => b.rating - a.rating);

