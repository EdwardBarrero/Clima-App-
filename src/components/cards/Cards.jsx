import Card from '../card/Card'

const Cards = ({ cities, onClose }) => {
    return (
        <>
            {cities.map(c => <Card
                key={c.id}
                id={c.id}
                max={c.max}
                min={c.min}
                name={c.name}
                img={c.img}
                onClose={() => onClose(c.id)}
            />
            )}
        </>
    )
}

export default Cards
