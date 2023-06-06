import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Audio-technica - ath - m50x",
    description: "Closed-Back Studio Headphone",
    price: 11999,
    rating: 5,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/audio_technica/AudioTechnica00.png?updatedAt=1682678158403",
    categoryName: "headphone",
    _isBestSeller: true,
    _isNewLaunch: true,
  },
  {
    _id: uuid(),
    title: "Shure",
    description: "in-ear headphones",
    price: 40000,
    rating: 3,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/shure/Shure05.png?updatedAt=1682678150987",
    categoryName: "headphone",
    _isNewLaunch: true,
  },
  {
    _id: uuid(),
    title: "Cort 6 String",
    description: "description",
    price: 30000,
    rating: 3.5,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/sennheiser/Sennheiser05.png?updatedAt=1682678162340",
    categoryName: "in-ears",
    _isNewLaunch: true,
  },
  {
    _id: uuid(),
    title: "KZ Acoustics",
    description: "description",
    price: 25000,
    rating: 4.2,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/kz_acoustics/KZAcoustics07.png?updatedAt=1682678143506",
    categoryName: "in-ears",
    rating: 4,
    _isBestSeller: true,
    _isNewLaunch: true,
  },
  {
    _id: uuid(),
    title: "Heading",
    description: "description",
    price: 10000,
    rating: 3,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/audio_technica/AudioTechnica00.png?updatedAt=1682678158403",
    categoryName: "wireless",
    _isBestSeller: true,
  },
  {
    _id: uuid(),
    title: "Heading",
    description: "description",
    price: 56000,
    rating: 5,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/audio_technica/AudioTechnica00.png?updatedAt=1682678158403",
    categoryName: "wireless",
    rating: 4.3,
    _isBestSeller: true,
  },
  {
    _id: uuid(),
    title: "Heading",
    description: "description",
    price: 45000,
    rating: 4.5,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/audio_technica/AudioTechnica00.png?updatedAt=1682678158403",
    categoryName: "accessories",
  },
  {
    _id: uuid(),
    title: "Heading",
    description: "description",
    price: 68000,
    rating: 4.5,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/audio_technica/AudioTechnica00.png?updatedAt=1682678158403",
    categoryName: "accessories",
    _isBestSeller: true,
  },
  {
    _id: uuid(),
    title: "Heading",
    description: "description",
    price: 43000,
    rating: 4.3,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/audio_technica/AudioTechnica00.png?updatedAt=1682678158403",
    categoryName: "home-audio",
    _isBestSeller: true,
  },
  {
    _id: uuid(),
    title: "Heading",
    description: "description",
    price: 32000,
    rating: 4,
    image:
      "https://ik.imagekit.io/u6itcrvxy/heaphone_collection/audio_technica/AudioTechnica00.png?updatedAt=1682678158403",
    categoryName: "home-audio",
    _isNewLaunch: true,
  },
];
