import { Routes, Route } from "react-router-dom";
import { TopScreen } from './TopScreen'
import { NavigationBar } from './NavigationBar'
import { RollerImage } from './RollerImage'
import { RollerImage1 } from './RollerImage1'
import { RollerImage2 } from './RollerImage2'
import { RollerImage3 } from './RollerImage3'
import { RollerImage4 } from './RollerImage4'
import { RollerImage5 } from './RollerImage5'
import { ProductCategoryItems } from './ProductCategoryItems'
import { ActualProduct } from "./ActualProduct";
import { TrackOrder } from "./TrackOrder";
import { AboutUs } from "./AboutUs";
import { MyAccount } from "./MyAccount";
import { Checkout } from "./Checkout";
import {Compare} from "./Compare";
import { Wish } from "./Wish";
import './App.css'

export default function App() {
const products = [
  // ================= SOFAS =================
  {
    id: 1,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "modern fabric sofa",
    discount: "-10%",
    oldPrice: 55000,
    newPrice: 49500,
    img: "/wooenfurnitures/items/sofas/sofa1.png",
    inStock: true,
    onSale: true,
  },
  {
    id: 2,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "luxury L-shaped sofa",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/sofas/sofa2.png",
    inStock: true,
    onSale: true,
  },
    {
    id: 3,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "Grey L-shaped sofa",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/sofas/sofa3.png",
    inStock: true,
    onSale: true,
  },
    {
    id: 4,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "Chester sofa",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/sofas/sofa4.png",
    inStock: true,
    onSale: true,
  },
    {
    id: 5,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "luxury 3-Seater sofa",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/sofas/sofa5.png",
    inStock: true,
    onSale: true,
  },
    {
    id: 6,
    category: "SOFAS",
    subCategory: "Standard Sofas",
    title: "Standard Recliner sofa",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/sofas/sofa6.png",
    inStock: true,
    onSale: true,
  },

  // ================= BEDS =================
  {
    id: 7,
    category: "BEDROOM",
    subCategory: "Modern Beds",
    title: "queen size upholstered bed",
    discount: "-7%",
    oldPrice: 48000,
    newPrice: 44600,
    img: "/wooenfurnitures/items/beds/bed1.png",
    inStock: true,
    onSale: true,
  },
  {
    id: 8,
    category: "BEDROOM",
    subCategory: "Modern Beds",
    title: "king size wooden bed frame",
    discount: "-9%",
    oldPrice: 65000,
    newPrice: 59000,
    img: "/wooenfurnitures/items/beds/bed2.png",
    inStock: true,
    onSale: true,
  },
  {
    id: 9,
    category: "BEDROOM",
    subCategory: "Modern Beds",
    title: "Standard king size bed",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/beds/bed3.png",
    inStock: true,
    onSale: true,
  },
    {
    id: 10,
    category: "BEDROOM",
    subCategory: "Modern Beds",
    title: "Comfy dense king size bed",
    discount: "-8%",
    oldPrice: 72000,
    newPrice: 66000,
    img: "/wooenfurnitures/items/beds/bed4.png",
    inStock: true,
    onSale: true,
  },
  // ================= DRAWERS =================
  {
    id: 11,
  category: "LIVING ROOM",   // ✅ changed
  subCategory: "Drawer Units",
    title: "modern 5 drawer chest",
    discount: "-6%",
    oldPrice: 32000,
    newPrice: 30000,
    img: "/wooenfurnitures/items/drawers/drawers1.png",
    inStock: true,
    onSale: true,
  },

  // ================= TV STANDS =================
  {
    id: 12,
    category: "LIVING ROOM",
    subCategory: "TV Stands",
    title: "modern floating tv stand",
    discount: "-8%",
    oldPrice: 35000,
    newPrice: 32200,
    img: "/wooenfurnitures/items/tvstands/tvstand1.png",
    inStock: true,
    onSale: true,
  },

];

  return (
    <>
      <Routes>
        <Route path="/" element={<>
          <TopScreen />
          <NavigationBar products={products} />
          <RollerImage />
          <RollerImage1 />
          <RollerImage2 />
          <RollerImage3 />
          <RollerImage4 />
          <RollerImage5 />
        </>} />
        <Route path="/checkout" element={<>
                   <TopScreen />
                    <NavigationBar  products={products}/>
                    <Checkout />      
                    <RollerImage4 />
                    <RollerImage5 /> </>} />
                            <Route path="/TrackOrder" element={<>
                   <TopScreen />
                    <NavigationBar  products={products}/>
                    <TrackOrder />      
                    <RollerImage4 />
                    <RollerImage5 /> </>} />
                                                <Route path="/MyAccount" element={<>
                   <TopScreen />
                    <NavigationBar  products={products}/>
                    <MyAccount />      
                    <RollerImage4 />
                    <RollerImage5 /> </>} />
                                                <Route path="/AboutUs" element={<>
                   <TopScreen />
                    <NavigationBar  products={products}/>
                    <AboutUs />      
                    <RollerImage4 />
                    <RollerImage5 /> </>} />

                                                                    <Route path="/Compare" element={<>
                   <TopScreen />
                    <NavigationBar  products={products}/>
                    <Compare />      
                    <RollerImage4 />
                    <RollerImage5 /> </>} />


                                                                    <Route path="/Wish" element={<>
                   <TopScreen />
                    <NavigationBar  products={products}/>
                    <Wish />      
                    <RollerImage4 />
                    <RollerImage5 /> </>} />
        <Route path="/category/:category" element={<>
          <TopScreen />
          <NavigationBar products={products} />
          <ProductCategoryItems /><RollerImage4 /> <RollerImage5 /></>} />
        <Route
          path="/category/:category/:subCategory"
          element={<>
            <TopScreen />
            <NavigationBar products={products} />
            <ProductCategoryItems /><RollerImage4 /> <RollerImage5 /></>}
        />

        <Route path="/product/:title" element={<>
          <TopScreen />
          <NavigationBar products={products} />
          <ActualProduct /><RollerImage4 /> <RollerImage5 /></>} />
      </Routes>
    </>
  );
}
