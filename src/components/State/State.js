import ImgOne from "../../../src/images/mountains.png";
import ImgTwo from "../../../src/images/more.png";
import ImgThree from "../../../src/images/more3.png";
import ImgThree2 from "../../../src/images/more3-2.png";
import ImgThree3 from "../../../src/images/more3-3.png";

export const date = [
  {
    page: {
      id: 1,
      title: "Всегда ли цели терапии СД2 на поверхности?",
      image: ImgOne,
      colorText: "rgb(13, 49, 156)",
      circles: [
        {
          text: "Цель по HbA1c",
          positionBlok: { top: 258, left: 557 },
          sizeRound: { height: 60, width: 60 },
          flexDirection: null,
        },
        {
          text: "Гипогликемия",
          positionBlok: { top: 376, left: 175 },
          sizeRound: { height: 40, width: 40 },
          flexDirection: "column-reverse",
        },
        {
          text: "Осложнения СД",
          positionBlok: { top: 487, left: 358 },
          sizeRound: { height: 30, width: 30 },
          flexDirection: "column-reverse",
        },
        {
          text: "СС риски",
          positionBlok: { top: 472, left: 753 },
          sizeRound: { height: 20, width: 20 },
          flexDirection: "column-reverse",
        },
      ],
    },
  },
  {
    page: {
      id: 2,
      title: "Основа терапии — патогенез СД2",
      image: ImgTwo,
      circles: null,
      colorText: "#fff",
    },
  },
  {
    page: {
      id: 3,
      title: "Звенья патогенеза СД2",
      image: ImgThree,
      circles: null,
      colorText: "#fff",
      slider: [
        { title: "Dima", image: ImgThree },
        { title: 26, image: ImgThree2 },
        { title: "Babichev", image: ImgThree3 },
      ],
    },
  },
];
