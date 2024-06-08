import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { TbShoppingBag } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";

import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { useState } from "react";
import Checkout from "../pages.tsx/Checkout";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartCheckoutStatus, cartItems } from "../store/cartItems";
import { filterBySearch } from "../store/filterProducts";

function Navbar({cartQuantity}) {
    // const [checkoutStatus,setCheckoutStatus]=useState(false);
    const setCartCheckoutStatus = useSetRecoilState(cartCheckoutStatus);
    const setSearchedProduct= useSetRecoilState(filterBySearch);
    const [searchProduct,setSearchProduct]= useState<string>('');

    const cartItem=useRecoilValue(cartItems);
    console.log("cartItems with recoil: ",JSON.stringify(cartItem));

    const links=[
        {title:"Blogs",link:"/home"},
        {title:"Contact us",link:"/home"},
    ]
    console.log("cartQuantity",cartQuantity);
    return (
        <div className="flex justify-between px-10 p-2 h-[10vh] bg-slate-50">
            <Link to="/">
                <div className="flex gap-3 items-center cursor-pointer">
                    <BsShop className="w-10 h-10 text-red-700 "/>
                    <p className="font-semibold text-3xl font-serif tracking-tight">Shop<span className="text-red-700">Kart</span></p>    
                </div>
            </Link>
            <div className="flex gap-3 w-2/5">
                {/* {links.map((l)=>{
                    return <Link to={l.link}>
                        <p className="font-semibold text-slate-600 text-lg">{l.title}</p>
                    </Link>
                })} */}
                <div className="w-full flex">
                    <input type="text" className="p-2 px-6 rounded-l-lg border border-slate-600 
                    w-10/12 placeholder:text-slate-600 " placeholder="Search ShopKart" onChange={(e)=>{
                        setSearchProduct(e.target.value);
                    }}/>
                    <button type="submit" className="w-2/12 border border-slate-600 p-2 flex justify-center
                     items-center rounded-r-lg" onClick={()=>{
                         setSearchedProduct(searchProduct);
                     }}>
                        <IoSearch className="w-7 h-7 text-blue-600"/>
                    </button>
                </div>
            </div>
            <div className="flex gap-3">
                <MdOutlineNotificationsNone className="w-8 h-8"/>
                <div className="relative flex border" onClick={()=>{
                    // setCheckoutStatus(true);
                    setCartCheckoutStatus(true);
                }}>
                    <MdOutlineShoppingCart className="w-8 h-8 border"/>
                    <p className="absolute bg-green-900 text-white text-sm font-medium rounded-full w-5 h-5 text-center top-[-4px] right-[-6px]">{cartItem.length}</p>
                </div>
                <RxAvatar className="w-8 h-8"/>
            </div>
        </div>
    );
}

export default Navbar;