import sleepImage from "../assets/detective1.jpg";
import  falconImage from "../assets/detective2.jpg";
import expressImage from "../assets/detective3.jpg";
import noneImage from "../assets/detective4.jpg";
import  akroydImage from "../assets/detective5.jpg";
import  holmesImage from "../assets/detective6.jpg";

const products = [
  {
    image: sleepImage,
    productId: "book",
    categoryId: "Detective",
    title: "The big sleep",
    description: `The iconic first novel from crime fiction master Raymond Chandler, featuring Philip Marlowe, the "quintessential urban private eye" (Los Angeles Times).

    A dying millionaire hires private eye Philip Marlowe to handle the blackmailer of one of his two troublesome daughters, and Marlowe finds himself involved with more than extortion. Kidnapping, pornography, seduction, and murder are just a few of the complications he gets caught up in.`,
    price: 0.63,
  },
  {
    image: falconImage,
    productId: "book1",
    categoryId: "Detective",
    title: "The Maltese Falcon",
    description: `What It's About: A coolly glittering gem of detective fiction that has haunted three generations of readers, from one of the greatest mystery writers of all time.

    A treasure worth killing for. Sam Spade, a slightly shopworn private eye with his own solitary code of ethics. A perfumed grafter named Joel Cairo, a fat man name Gutman, and Brigid O'Shaughnessy, a beautiful and treacherous woman whose loyalties shift at the drop of a dime.`,
    price: 3,
  },
  {
    image: expressImage,
    productId: "book2",
    categoryId: "Detective",
    title: "Murder on the...",
    description: `What It's About: Just after midnight, a snowdrift stops the famous Orient Express in its tracks as it travels through the mountainous Balkans. The luxurious train is surprisingly full for the time of the year but, by the morning, it is one passenger fewer. An American tycoon lies dead in his compartment, stabbed a dozen times, his door locked from the inside...`,
    price: 2,
  },
  {
    image: noneImage,
    productId: "book3",
    categoryId: "Detective",
    title: "And Then There Were None",
    description: `What It's About: First, there were ten—a curious assortment of strangers summoned as weekend guests to a little private island off the coast of Devon. Their host, an eccentric millionaire unknown to all of them, is nowhere to be found. All that the guests have in common is a wicked past they're unwilling to reveal—and a secret that will seal their fate...`,
    price:1,
  },
  {
    image: akroydImage,
    productId: "book4",
    categoryId: "Detective",
    title: "The Murder of Roger Akroyd",
    description: `What It's About: 'Key in the lock all right, sir. On the inside. Mr Ackroyd must have locked himself in,'

    Poor Roger Ackroyd. He knew that the woman he loved had been harbouring a guilty secret - she poisoned her first husband. And yesterday she killed herself.`,
    price: 3,
  },
  {
    image: holmesImage,
    productId: "book5",
    categoryId: "Detective",
    title: "The Complete Sherlock Holmes",
    description: `What It's About: Sir Arthur Conan Doyle’s Sherlock Holmes tales are rightly ranked among the seminal works of mystery and detective fiction. The handsome packaging and splendid illustrations in this limited edition collection more than befit that classic status. Included are all four full-length Holmes novels and more than forty short masterpieces—from The Adventures of Sherlock Holmes to The Case Book of Sherlock Holmes.`,
    price:2,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId);    
  }

  return products;
}


export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}