import Badge from 'react-bootstrap/Badge';

const Boton = ({texto, color}) => {
    return (
        <>
            <Badge bg={color} className='badge'>{texto}</Badge>
        </>
    )
}

export default Boton;