import Header from "../components/Header/Header";
import headerImage from "../assets/payment.png";

function Payment() {
  return (
    <>
      <Header
        title="welcom"
        image={headerImage}>
         A payment is the voluntary tender of money or its equivalent or of things of value by one party (such as a person or company) to another in exchange for goods, or services provided by them, or to fulfill a legal obligation. The party making the payment is commonly called the payer, while the payee is the party receiving the payment.
      </Header>
    </>
  );
}

export default Payment;