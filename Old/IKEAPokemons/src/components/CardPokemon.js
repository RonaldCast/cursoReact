import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CardPokemon = ({name, number, to}) => {

    return (
        <Card >
            <Card.Img variant="top" style={{ maxWidth: '200px', maxHeight:"200px" }} 
             alt={name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${number}.svg`} />
            <Card.Body className="cardPokemon__body">
                <Card.Title className="cardPokemon__title">
                    {name}
                </Card.Title>
                <Button size="sm" className="btn--card" onClick={to}>Characteristics</Button>
            </Card.Body>
        </Card>
    )
}

CardPokemon.propTypes ={
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired, 
    to:PropTypes.func
}

export default CardPokemon;