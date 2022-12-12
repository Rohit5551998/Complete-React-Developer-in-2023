import { Outlet, Route, Routes } from 'react-router-dom';

// import Directory from './components/directory/directory.component';
import Home from './routes/home/home.component';

// const App = () => {
// Moved to Home Component
// const categories = [
//   {
//     "id": 1,
//     "title": "hats",
//     "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
//   },
//   {
//     "id": 2,
//     "title": "jackets",
//     "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
//   },
//   {
//     "id": 3,
//     "title": "sneakers",
//     "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
//   },
//   {
//     "id": 4,
//     "title": "womens",
//     "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
//   },
//   {
//     "id": 5,
//     "title": "mens",
//     "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
//   }
// ];

// return (
//   <Directory categories={categories} />
// );
// }
const Navigation = () => {
  return (
    <div>
      <div>
        <h1> I am the Navigation Bar.</h1>
      </div>
      <Outlet />
    </div>
  );
}

const Shop = () => {
  return (
    <div>
      <h1>I am the Shop Component.</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* <Route path='/home' element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
