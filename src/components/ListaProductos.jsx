import react from 'react'

function ComponenteProductos(props) {
    
    
    return  (
        <>

        
        <ul>
            {/*dentro de llaves puedo poner código js*/}
            {
            
            props.listaC.map((producto)=>
            <li>
               {producto}
            </li>

            )
            
            }
        </ul>
    
        </>
    )
}

export default ComponenteProductos