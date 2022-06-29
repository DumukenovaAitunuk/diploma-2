import sleepImage from "../assets/detective1.jpg";
import falconImage from "../assets/detective2.jpg";
import expressImage from "../assets/detective3.jpg";
import noneImage from "../assets/detective4.jpg";
import akroydImage from "../assets/detective5.jpg";
import holmesImage from "../assets/detective6.jpg";
import morgueImage from "../assets/detective7.jpg";
import snowmanImage from "../assets/detective8.jpg";
import floorImage from "../assets/detective9.jpg";
import brassImage from "../assets/fantasy1.jpg";
import nightImage from "../assets/fantasy2.jpg";
import buriedImage from "../assets/fantasy3.jpg";
import mountImage from "../assets/fantasy4.jpg";
import ringImage from "../assets/fantasy5.jpg";
import otherImage from "../assets/fantasy6.jpg";
import sorcererImage from "../assets/fantasy7.jpg";
import worldImage from "../assets/fantasy8.jpg";
import polkImage from "../assets/fantasy9.jpg";




const products = [
  {
    image: sleepImage,
    productId: "book",
    categoryId: "Detective",
    title: "The big sleep",
    description: `The iconic first novel from crime fiction master Raymond Chandler, featuring Philip Marlowe, the "quintessential urban private eye" (Los Angeles Times).

    A dying millionaire hires private eye Philip Marlowe to handle the blackmailer of one of his two troublesome daughters, and Marlowe finds himself involved with more than extortion. Kidnapping, pornography, seduction, and murder are just a few of the complications he gets caught up in.`,
    price: 3,
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
    price: 1,
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
    description: `What It's About: Sir Arthur Conan Doyle's Sherlock Holmes tales are rightly ranked among the seminal works of mystery and detective fiction. The handsome packaging and splendid illustrations in this limited edition collection more than befit that classic status. Included are all four full-length Holmes novels and more than forty short masterpieces—from The Adventures of Sherlock Holmes to The Case Book of Sherlock Holmes.`,
    price: 2,
  },
  {
    image: morgueImage,
    productId: "book6",
    categoryId: "Detective",
    title: "The Murders in the Rue Morgue",
    description: `The Murders in the Rue Morgue is a short story by Edgar Allan Poe published in Graham's Magazine in 1841. It has been recognized as the first modern detective story; Poe referred to it as one of his "tales of ratiocination".`,
    price: 4,
  },
  {
    image: snowmanImage,
    productId: "book7",
    categoryId: "Detective",
    title: "The Snowman",
    description: `Oslo in November. The first snow of the season has fallen. A boy named Jonas wakes in the night to find his mother gone. Out his window, in the cold moonlight, he sees the snowman that inexplicably appeared in the yard earlier in the day. Around its neck is his mother's pink scarf. Hole suspects a link between a menacing letter he's received and the disappearance of Jonas's mother - and of perhaps a dozen other women".`,
    price: 3,
  },

  {
    image: floorImage,
    productId: "book8",
    categoryId: "Detective",
    title: "Killing Floor",
    description: ` Ex-military policeman Jack Reacher is a drifter. He's just passing through Margrave, Georgia, and in less than an hour, he's arrested for murder. Not much of a welcome. All Jack knows is that he didn't kill anybody. At least not here. Not lately. But he doesn't stand a chance of convincing anyone.`,
    price: 5,
  },
  {
    image: brassImage,
    productId: "book1",
    categoryId: "Fantastic",
    title: "The City of Brass, by S. A. Chakraborty",
    description: ` The first novel in Chakraborty’s trilogy is set in 18th-century Cairo, where a thief-slash-exorcist named Nahri accidentally summons a djinn warrior. Together, they travel to the “city of brass,” a magical metropolis called Daevabad. Nahri’s story continues in two fast-paced sequels, The Kingdom of Copper and The Empire of Gold, while a spinoff story compilation, The River of Silver, is forthcoming this October.`,
    price: 16,
  },
  {
    image: nightImage,
    productId: "book2",
    categoryId: "Fantastic",
    title: "The Night Circus, by Erin Morgenstern",
    description: ` The only book on this list written during National Novel Writing Month, Morgenstern’s debut novel is an atmospheric fairy tale about Le Cirque des Rêves—a traveling magical circus that only appears at night in Victorian England. The nonlinear story is full of surprising secrets that keep coming until the very end.`,
    price: 12,
  },
  {
    image: buriedImage,
    productId: "book3",
    categoryId: "Fantastic",
    title: "The Buried Giant, by Kazuo Ishiguro",
    description: ` The author of Never Let Me Go has only written one fantasy novel, but he knocked it out of the park. In the Dark Ages after the death of King Arthur, a mysterious “mist” prevents Britons from storing long-term memories. An elderly couple, convinced that a son they can barely remember is missing, journeys across the country to find him, where they stumble upon ogres, a dragon, and Sir Gawain.     `,
    price: 15,
  },
  {
    image: mountImage,
    productId: "book4",
    categoryId: "Fantastic",
    title: "The Library at Mount Char, by Scott Hawkins",
    description: `Carolyn and her eleven siblings live together in the house of their father, a seemingly immortal man whose library grants them special powers. To say anything else would spoil this riveting, one-of-a-kind novel full of surprises and paced like a thriller.`,
    price: 15,
  },
  {
    image: ringImage,
    productId: "book5",
    categoryId: "Fantastic",
    title: "Ring Shout, by P. Djèlí Clark",
    description: `In Clark’s harrowing novella, white supremacists summon demonic entities when The Birth of a Nation premiers in 1915. Seven years later in Georgia, three battle-ready Black women armed with a sword, a rifle, and explosives come together at Stone Mountain to stop a demon-infested Ku Klux Klan from bringing about an apocalypse.`,
    price: 12,
  },
  {
    image: otherImage,
    productId: "book6",
    categoryId: "Fantastic",
    title: "The Other City, by Michal Ajvaz",
    description: ` Translated into English in 2009, The Other City is a challenging but immensely rewarding novel set in Prague, where an unnamed narrator discovers a purple book written in an indecipherable language; he then realizes that there’s another, surreal version of the city existing in the same space as the familiar one. His midnight travels through this “other city” are rich with Borgesian and Dalíesque imagery, resulting in a reading experience you’ll never forget.`,
    price: 15,
  },

   {
    image: sorcererImage,
    productId: "book7",
    categoryId: "Fantastic",
    title: "The Sorcerer of the Wildeeps, by Kai Ashante Wilson",
    description: `Another strange forest is at the center of The Sorcerer of the Wildeeps, Kai Ashante Wilson’s 2015 novella about two men descended from dead gods. They lead an expedition through the Wildeeps, where multiple worlds overlap and magical creatures stalk their party. It’s a captivating world, expanded upon even further in 2016 by a followup novella, A Taste of Honey.`,
    price: 11,
  },
  {
    image: worldImage,
    productId: "book8",
    categoryId: "Fantastic",
    title: "The Unfinished World, by Amber Sparks",
    description: ` Amber Sparks plays with form, genre, and archetypes in this nuanced collection of short stories. An assortment of knights, werewolves, astronauts, librarians, time-travelers, and dinosaurs haunt these pages, but never as tropes—despite their fantastical premises, each story is grounded in emotional realism.`,
    price: 16,
  },
  {
    image: polkImage,
    productId: "book9",
    categoryId: "Fantastic",
    title: "Witchmark, by C.L. Polk",
    description: `Winner of the 2019 World Fantasy Award for Best Novel, Witchmark is set in a secondary world similar to Edwardian England and ruled by noble families with magical powers. The setup is fantastic and the characters are nuanced, but the book really shines in the latter half, thanks to a series of revelations you’ll never see coming.`,
    price: 16,
  },

 
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter((product) => product.categoryId === categoryId);
  }

  return products;
}

export function getProduct(productId) {
  return products[
    products.findIndex((product) => product.productId === productId)
  ];
}
export default products;