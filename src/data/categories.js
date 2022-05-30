import detectiveImage from "../assets/detective.jpg";
import adventuresImage from "../assets/adventures.jpg";
import fantasyImage from "../assets/fantasy.jpg";
import novelImage from "../assets/novel.jpg";
import scientificImage from "../assets/scientific.jpg";
import folkloreImage from "../assets/folklore.jpg";
import humorImage from "../assets/humor.jpg";
import guideImage from "../assets/guide.jpg";
import childrenImage from "../assets/children.jpg";
import documentaryImage from "../assets/documentary.jpg";
import businessImage from "../assets/business.jpg";
import religiousImage from "../assets/religious.jpg";
import educationalImage from "../assets/educational.jpg";
import pschologyImage from "../assets/pschology.jpg";
import mativationImage from "../assets/mativation.jpg";
import foreignImage from "../assets/foreign.jpg";
import poetryImage from "../assets/poetry.jpg";
import technicImage from "../assets/technic.jpg";



const categories = [
  {
    categoryId: "Detective",
    title: "Detective genre",
    image: detectiveImage,
    desciption: "A detective is an investigator, usually a member of a law enforcement agency. They often collect information to solve crimes by talking to witnesses and informants, collecting physical evidence, or searching records in databases. This leads them to arrest criminals and enable them to be convicted in court"
  },
  {
    categoryId: "Fantastic",
    title: "Fantastic genre",
    image: fantasyImage,
    desciption: "Fantasy is a genre of speculative fiction involving magical elements, typically set in a fictional universe and sometimes inspired by mythology and folklore. Its roots are in oral traditions, which then became fantasy literature and drama. From the twentieth century, it has expanded further into various media, including film, television, graphic novels, manga, animations and video games."
  },
  {
    categoryId: "adventures",
    title: "Adventures genre",
    image: adventuresImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "novel",
    title: "Novel ganre",
    image: novelImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "scientific",
    title: "Scientific genre",
    image: scientificImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "folklore",
    title: "Folklore genre",
    image: folkloreImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "humor",
    title: "Humor genre",
    image: humorImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "guide",
    title: "Guide genre",
    image: guideImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "poetry",
    title: "Poetry genre",
    image: poetryImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "children's",
    title: "Children's genre",
    image: childrenImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },

  {
    categoryId: "documentary",
    title: "Documentary genre",
    image: documentaryImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "business litrature",
    title: "business litrature",
    image: businessImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "religious",
    title: "Religious literature",
    image: religiousImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "educational books",
    title: "Educational books",
    image: educationalImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "pschology",
    title: "Pschology genre",
    image: pschologyImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
  {
    categoryId: "mativation",
    title: "mativation genre",
    image: mativationImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  }, 
  {
    categoryId: "foreign",
    title: "foreign literature",
    image: foreignImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },

  {
    categoryId: "technic",
    title: "technic genre",
    image: technicImage,
    desciption: "Adventure fiction is a type of romance that usually presents danger, or gives the reader a sense of excitement."
  },
];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category =>  category.categoryId === categoryId
    )
  ];
}