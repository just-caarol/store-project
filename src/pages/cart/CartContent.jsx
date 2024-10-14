import CartContentList from "./CartContentList";
import CartContentTable from "./CartContentTable";

function CartContent(props) {
  return (
    <>
      <CartContentTable {...props} />
      <CartContentList {...props} />
    </>
  );
}

export default CartContent;
