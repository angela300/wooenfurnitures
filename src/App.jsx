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
    {
      id: 1,
      category: "SOFAS",
      subCategory: "L-Shaped Sofas",
      title: "6 seater brown l shaped sofa",
      discount: "-9%",
      oldPrice: 64000,
      newPrice: 58000,
      img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=60",
      inStock: true,
      onSale: true,
    },
    {
      id: 2,
      category: "SOFAS",
      subCategory: "L-Shaped Sofas",
      title: "6 seater bubble beige l shaped sofa",
      discount: "-8%",
      oldPrice: 68000,
      newPrice: 62000,
      img: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=60",
      inStock: true,
      onSale: true,
    },
    {
      id: 3,
      category: "SOFAS",
      subCategory: "L-Shaped Sofas",
      title: "6 seater classic blue l shaped sofa",
      discount: "-7%",
      oldPrice: 36000,
      newPrice: 32000,
      img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=60",
      inStock: true,
      onSale: true,
    },
    {
      id: 4,
      category: "SOFAS",
      subCategory: "Sofa set designs",
      title: "helsinki 7 seater dark grey l",
      discount: "-9%",
      oldPrice: 68000,
      newPrice: 62000,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=60",
      inStock: true,
      onSale: true,
    },
    {
      id: 5,
      category: "BEDROOM",
      subCategory: "Chester Beds",
      title: "chester bed queen size",
      discount: "-6%",
      oldPrice: 58000,
      newPrice: 56000,
      img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=60",
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
