import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstname: "Yuvraj",
    lastname: "Thapa",
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
    firstname: "Adarsh",
    lastname: "Negi",
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
    firstname: "Shaswat",
    lastname: "Gusain",
    username: "shaswatgusain",
    password: "shaswat123",
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
    firstname: "Vinay",
    lastname: "Chand Ramola",
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
];