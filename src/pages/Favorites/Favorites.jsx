// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CardAdvert from "../../components/CardAdvert/CardAdvert";
// import { getAllFavouritesThunk } from "../../redux/thunks/getAllFavouritesThunk";
// import "./Favourites.sass";

// const Favourites = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllFavouritesThunk());
//   }, []);
//   const cards = useSelector((state) => state.getFavorite);

//   return (
//     <section className="container advertisement cards-pet">
//       <div className="cards-pet__cards">
//         <div className="cards-pet__row">
//           {cards?.map((card) => {
//             return (
//               <CardAdvert
//                 id={card.id}
//                 title={card.title}
//                 content={card.content}
//                 key={`card-${card.id}`}
//                 name={card.title}
//                 price={card.price}
//                 images={card.images}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Favourites;
