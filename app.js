

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

// const ascSort = books.sort((a, b) => a.rating - b.rating);
// const descSort = books.sort((a, b) => b.rating - a.rating);
const nums = [3,4,5,6,7, 3, 49]
const redused = nums.reduce((acc, book) => acc + book)

const maxVal = nums.reduce((max, curVal) => {
  if (curVal > max) return curVal;
  return max
})

const maxVal2 = nums.reduce((max, curVal) => {
  return Math.max(max, curVal)
})

const minVal = nums.reduce((max, curVal) => {
  return Math.min(max, curVal)
})