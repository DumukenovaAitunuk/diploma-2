import Header from "../components/Header/Header";
import headerImage from "../assets/books.jpg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Home() {
  return (
    <>
      <Header title="Welcome to our books shop" image={headerImage}>
        A book is a medium for recording information in the form of writing or
        images, typically composed of many pages (made of papyrus, parchment,
        vellum, or paper) bound together and protected by a cover.[1] The
        technical term for this physical arrangement is codex (plural, codices).
      </Header>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Home;
