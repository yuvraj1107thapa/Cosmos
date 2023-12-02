import { Products } from './products';
import contents from './content';

 export default function Game() {
     return(
            <div className='Game'>
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                        alink={contents.url}

                    />
                ))}
            </div>
     )
 }