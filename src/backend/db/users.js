import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstname: "Adarsh",
    lastname: "Negi",
    username: "adarshnegi",
    password: "adarsh123",
    bio: "I'm adarsh negi!",
    avatarUrl: "https://i.pinimg.com/736x/25/06/12/2506122efe083594e72df9e3fc418362.jpg",
      // "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804932/NegProjects/SocialMedia/76_zofevc.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstname: "Yuvraj",
    lastname: "Thapa",
    username: "yuvrajthapa",
    password: "yuvraj123",
    bio: "Speak truth, feel love, be free.",
    // website: "",
      // "https://website.netlify.app/",
    avatarUrl:
      "https://i.postimg.cc/Jnyw0Phh/photo-2023-11-29-20-23-21.jpg",

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
    password: "shaswatgusain123",
    bio: "Aspiring Enginneer",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7KuBMAcEeieLyyDuevCmBLIfj_kNAexKKkyFAf7ig40cT3O8uyRZpzhTskjRqGEGPHM&usqp=CAU",
      // "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/87_tlp0ec.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Vinay ",
    lastname: "Ramola",
    username: "vinaycramola",
    password: "vinay123",
    bio: "Aspring Enginneer",
    avatarUrl: "https://i.pinimg.com/736x/45/83/83/458383d22df0d8e58564edb600b3cacf.jpg",
      // "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/62_qogeol.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Mark",
    lastname: "Zuckerberg",
    username: "mark123",
    password: "mark123",
    bio: "Meta CEO",
    avatarUrl: "https://media.glamourmagazine.co.uk/photos/6138b2992b5bbea00829320c/1:1/w_1280,h_1280,c_limit/mark-zuckerberg_glamour_26jan16_pa_b.jpg",
      // "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/10_yrt7lk.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstname: "Bill",
    lastname: "Gates",
    username: "billgates",
    password: "bill123",
    bio: "Microsoftttttttttttt",
    avatarUrl: "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
      // "https://res.cloudinary.com/dgoldjr3g/image/upload/v1686804933/NegProjects/SocialMedia/11_zmzmjz.jpg",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
