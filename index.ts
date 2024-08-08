// Declares HTML element
const reviewTotalDisplay = document.querySelector("#reviews");

// Declares reviews array
const reviews = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

// Funtion to display total reviews && the name of the last reviewer
function showReviewTotal(value: number, reviewer: string) {
  reviewTotalDisplay.innerHTML =
    "review total " + value.toString() + "| last reviewed by " + reviewer;
}

// Call function with reviews array
showReviewTotal(reviews.length, reviews[0].name);
