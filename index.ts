// Declares HTML element
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
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

// Funtion to display total reviews && the name of reviewer at index && checks if they are a loyaltyUser
function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
  const iconDisplay = isLoyalty ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    "review total " +
    value.toString() +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

// Calls function with reviews array
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

// --------------------------------------------------------------------------

// Declares you object
const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
} = {
  firstName: "Wade",
  lastName: "Wilson",
  isReturning: true,
  age: 35,
};

// Function to distplay if the user is returning or not
function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

// Calls function with you object
populateUser(you.isReturning, you.userName);
