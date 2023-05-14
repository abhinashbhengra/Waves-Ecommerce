import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "headphone",
    description:
      "They are electroacoustic transducers, which convert an electrical signal to a corresponding sound.",
  },
  {
    _id: uuid(),
    categoryName: "in-ears",
    description:
      "Small headphones with similar portability to earbuds that are inserted in the ear canal itself",
  },
  {
    _id: uuid(),
    categoryName: "wireless",
    description:
      "headphones that connect to a device, such as a smartphone, stereo speaker, television, gaming console, computer, or other electronic devices without using a wire or cable.",
  },
  {
    _id: uuid(),
    categoryName: "accessories",
    description:
      "Key headphone accessories include the cables, plugs, converters, and extensions that you need to hook up to your player or phone",
  },
  {
    _id: uuid(),
    categoryName: "home-audio",
    description:
      "Home audio systems are audio electronics intended for home entertainment use",
  },
];
