import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  const data = [
    {
      image: "https://vlebazaar.in/image/cache/catalog/B07HGLBZ9J/OPPO-K3-Aurora-Blue-8GB-RAM-AMOLED-Display-128GB-Storage-3765mAH-Battery-B07HGLBZ9J-1100x1100.jpg",
      productName: "OPPO K3",
      price: 8000,
      rate: "★★★★☆"
},
{
      image: "https://vlebazaar.in/image/cache/catalog/-Redmi-9A-Nature-Green-32-GB-2-GB-RAM/-Redmi-9A-Nature-Green-32-GB-2-GB-RAM-1100x1100h.jpg",
      productName: "Redmi 9a coral green",
      price: 6099,
      rate: "★★★★☆"
},{
      image: "https://vlebazaar.in/image/cache/catalog/apple%204s/apple-iphone-xsg-1100x1100h.jpeg",
      productName: "Apple iPhone Xs ",
      price: 74899,
      rate: "★★★★★"
},
{
      image: "https://vlebazaar.in/image/cache/catalog/-ASUS-6Z-Black-64-GB-6-GB-RAM/-ASUS-6Z-Black-64-GB-6-GB-RAM-1100x1100h.jpg",
      productName: "ASUS 6Z",
      price: 21599,
      rate: "★★★☆☆"
},{
      image: "https://vlebazaar.in/image/cache/catalog/B07V3Q2G74/Honor-20-Midnight-Black-6GB-128GB-Storage-48m-AI-Quad-Rear-Camera-Kirin-980-Processor-B07V3Q2G74-1100x1100.jpg",
      productName: "Honor 20",
      price: 15950,
      rate: "★★★★☆"
},
{
      image: "https://vlebazaar.in/image/cache/catalog/-Infinix-S5-Lite-Quetzal-Cyan-64-GB-4-GB-RAM/-Infinix-S5-Lite-Quetzal-Cyan-64-GB-4-GB-RAM-1100x1100h.jpg",
      productName: "Infinix S5 Lite",
      price: 11999,
      rate: "★★☆☆☆"
},{
      image: "https://vlebazaar.in/image/cache/catalog/-Infinix-Note-5-Stylus-Bordeaux-Red-64-GB-4-GB-RAM/-Infinix-Note-5-Stylus-Bordeaux-Red-64-GB-4-GB-RAM-1100x1100h.jpg",
      productName: "Infinix Note 5 Stylus",
      price: 9999,
      rate: "★★★★☆"
},
{
      image: "https://vlebazaar.in/image/cache/catalog/-MarQ-by-Flipkart-M3-Smart-M3-Black32GB-2GB-RAM-2-GB-RAM/-MarQ-by-Flipkart-M3-Smart-M3-Black32GB-2GB-RAM-2-GB-RAM-1100x1100h.jpg",
      productName: "MarQ M3 Smart",
      price: 5299,
      rate: "★★★☆☆"
}
  ];

  // data.map((value, index, accArr) => console.log(value, index, accArr))
  return (
    <div className="App">
      <Nav
      count={count}
      />
      <Heading/>
      <div className='fluid-container'>
      <div className='row'>
        
      
      {data.map((card, index) => (
        
        <Profile
          key={index}
          image={card.image}
          productName={card.productName}
          price={card.price}
          rate={card.rate}
          count={count}
          setCount={setCount}
          
        />
      ))}
        </div>
      </div>
    </div>
  );
}

export default App;

// create a new component

function Profile({ image, productName, price, rate, count, setCount}) {
  function addtocart(){
    setCount(count+1);
    setAdd(false);
  }
  function removecart(){
    setCount(count-1);
    setAdd(true);
  }
  const [add, setAdd] = useState(true);
  let countt=0;

  return (
    <div className="col-md-3 col">
      <div className='card'>
      <img src={image} alt={""} />
      <h3><b>{productName}</b></h3>
      <h4>₹{price} <s>₹{price+1100}</s></h4>
      <h5 style={{color:"yellowgreen"}}>{rate}</h5>
      {add?
      <button type="button" class="btn btn-primary" style={{width:"fit-content",margin:"auto"}} onClick={()=>{addtocart()}}>Add to Cart</button>
      :
      <button type="button" class="btn btn-danger" style={{width:"fit-content",margin:"auto"}} onClick={()=>removecart()}>Remove from Cart</button>
      }
 
      </div>
    </div>
  );
}


function Heading(){
  return (
    <div id="heading">
      SHOP HERE
    </div>

  );
}

function Nav({count}){
  return(
    <div id="nav">
      <button type="button" class="btn btn-light" style={{ margin:"0.5rem"}}><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart <span id="count">{count}</span></button>
    </div>
  );
}