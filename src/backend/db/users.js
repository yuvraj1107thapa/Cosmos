import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Yuvraj",
    lastName: "Thapa",
    username: "yuvrajthapa",
    password: "yuvraj123",
    bio: "Speak truth, feel love, be free.",
    avatarUrl: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Negi",
    username: "adarshnegi",
    password: "adarsh123",
    bio: "Aspiring Enginneer",
    avatarUrl: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vinay",
    lastName: "Chand Ramola",
    username: "vinaychandramola",
    password: "vinay123",
    bio: "Aspiring Enginneer",
    avatarUrl: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Sashwat",
    lastName: "Gusain",
    username: "sashwatgusain",
    password: "sashwat123",
    bio: "Aspiring Enginneer",
    avatarUrl: "",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];