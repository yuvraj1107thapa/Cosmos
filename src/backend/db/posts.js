import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
    "You know, it's funny; when you look at someone through rose-colored glasses, all the red flags just look like flags.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "adarshnegi",
    createdAt: "02 Nov, 2020",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Listen Morty, I hate to break it to you, but what people calls love is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "shaswatgusain",
    createdAt: "17 March,2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "It's my birthday today!",
    image:
      "https://i.postimg.cc/7hMK3XFL/81099539-2630035780421097-5486488887171743744-n.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "vinaycramola",
    createdAt: "27 July, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "All these souls, lost and alone. I can save them! I can cure them! Theres no need to stop me!",
    image: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "mark123",
    createdAt: "19 Jan, 2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    // content: "The road not taken!",
    image:
      "https://i.postimg.cc/vZWZH8NK/photo-2023-11-29-20-27-53.jpg",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "yuvrajthapa",
    createdAt: "29 November, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Brought this amazing shoes today",
    image: "https://www.livemint.com/lm-img/img/2023/07/27/1600x900/Upma_1690480638092_1690480658080.png",
      likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "shaswatgusain",
    createdAt: "25 May, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Minion loves banana!, what do you love?",
    image:
      "https://res.cloudinary.com/dgoldjr3g/image/upload/v1688034579/NegProjects/SocialMedia/minion_hcx9lh.jpg",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "vinaycramola",
    createdAt: "11 June, 2023",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Hard one, team. But what a tournament. You guys made us believe. Really really believe. Not our day, But I ❤ you. Onwards and upwards. #india #worldcupfinal",
    image: "",
    likes: {
      likeCount: 11,
      likedBy: [],
      dislikedBy: [],
    },
    comment: [],
    username: "yuvrajthapa",
    createdAt: "19 Nov, 2023",
    updatedAt: formatDate(),
  },
];
