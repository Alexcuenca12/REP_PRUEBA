/* eslint-disable react/prop-types */
import SimgleItem from "./SimgleItem";

const DisplayItems = ({ subs, eliminarItem, editItem }) => {
    return ( 
        <>
            <h2>Suscripciones</h2>
            {
                subs.map(item => (
                    <SimgleItem 
                    key={item.id}
                    id={item.id} 
                    price={item.price} 
                    type={item.type} 
                    eliminarItem={eliminarItem}
                    editItem={editItem}
                    />
                ))

            }
        </>
    );
}
 
export default DisplayItems;