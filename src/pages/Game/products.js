 import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';

 export function Products(props) {
     return(
        <a href={props.alink} className="topLink">
         <div className='productList'>
             <div key={props.id} className='productCard'>
                 <img src={props.image} alt='product-img' className='productImage'></img>
             


                 <div className='productCard__content'>
                     <h3 className='productName'>{props.name}</h3>
                     <div className='displayStack__1'>
                         <div className='productPrice'>{props.price}</div>
                         <div className='productSales'>{props.totalSales} Active Players</div>
                     </div>
                     <div className='displayStack__2'>
                         <div className='productRating'><div className='productSales'> Rating  </div>
                             {[...Array(props.rating)].map((index) => (
                                 <FaStar id={index + 1 } key={index} />
                             ))}
                         </div>
                       
                     </div>
                 </div>
             </div>
         </div>
         </a>
     )
 }