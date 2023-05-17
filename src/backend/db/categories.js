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
    image:
      "https://ik.imagekit.io/u6itcrvxy/Headphone_Category/headphone.svg?updatedAt=1684328194779",
  },
  {
    _id: uuid(),
    categoryName: "in-ears",
    description:
      "Small headphones with similar portability to earbuds that are inserted in the ear canal itself",
    image:
      "https://ik.imagekit.io/u6itcrvxy/Headphone_Category/in-ear.svg?updatedAt=1684328176225",
  },
  {
    _id: uuid(),
    categoryName: "wireless",
    description:
      "headphones that connect to a device, such as a smartphone, stereo speaker, television, gaming console, computer, or other electronic devices without using a wire or cable.",
    image:
      "https://ik.imagekit.io/u6itcrvxy/Headphone_Category/wireless.svg?updatedAt=1684328279296",
  },
  {
    _id: uuid(),
    categoryName: "accessories",
    description:
      "Key headphone accessories include the cables, plugs, converters, and extensions that you need to hook up to your player or phone",
    image:
      "https://ik.imagekit.io/u6itcrvxy/Headphone_Category/accessories.svg?updatedAt=1684328371109",
  },
  {
    _id: uuid(),
    categoryName: "home-audio",
    description:
      "Home audio systems are audio electronics intended for home entertainment use",
    image:
      "https://ik.imagekit.io/u6itcrvxy/Headphone_Category/home-audio.svg?updatedAt=1684328439925",
  },
];
