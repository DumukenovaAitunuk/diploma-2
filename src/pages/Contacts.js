import Header from "../components/Header/Header";
import headerImage from "../assets/contacts.jpeg";

function Contacts() {
  return (
    <>
      <Header
        title="our contacts!"
        image={headerImage}>
         Contributions are made by a large number of volunteers at their own discretion. Edits are neither the responsibility of the Wikimedia Foundation 
      </Header>
    </>
  );
}

export default Contacts;