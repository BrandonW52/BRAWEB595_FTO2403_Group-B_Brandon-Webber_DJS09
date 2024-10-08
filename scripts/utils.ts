// imports enum
import { Permissions, LoyaltyUser } from "./enums";

import { Review } from "./interfaces";

// Declares HTML element
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");

// Funtion to display total reviews && the name of reviewer at index && checks if they are a loyaltyUser
export function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay.innerHTML =
    value.toString() +
    " review" +
    makeMultiple(value) +
    " | last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

// Function to distplay if the user is returning or not
export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning == true) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

// Displays pricing
export function showDetails(
  value: boolean | Permissions,
  element: HTMLDivElement,
  price: number
) {
  if (value) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = price.toString() + "/night";
    element.appendChild(priceDisplay);
  }
}

// Function to add or remove s from reviews count
export function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

// Function to get top two reviews
export function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}
