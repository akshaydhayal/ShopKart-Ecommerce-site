import { useRecoilValue } from "recoil";
import Filters from "../components/Filters";
import Products from "../components/Products";
import { cartCheckoutStatus } from "../store/cartItems";
import Checkout from "./Checkout";

function Home({setCartQuantity,}: {setCartQuantity: React.Dispatch<React.SetStateAction<number>>}) {
  const checkoutStatus = useRecoilValue(cartCheckoutStatus);
  console.log("checkoutStataus in home page: ", checkoutStatus);
  return (
    <div className="pt-4">
      {checkoutStatus && <Checkout />}
      {!checkoutStatus && (
        <div className="flex w-screen">
          {/* <div className="w-1/3 md:w-2/5 lg:w-1/5 border"> */}
          <div className="hidden sm:block sm:w-1/3 lg:w-1/5 border">
          {/* <div className="w-1/3 lg:w-1/5 border"> */}
            <Filters />
          </div>
         
          <div className="w-full md:w-3/5 lg:w-4/5">
          {/* <div className="w-2/3 md:w-3/5 lg:w-4/5"> */}
            <Products setCartQuantity={setCartQuantity} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;