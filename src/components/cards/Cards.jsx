import Card from '../card/Card'

const Cards = ({ cities, onClose }) => {
    return (
        <div className="test1">
            <div className="contentCardsView">
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
            </div>
        </div>
    )
}

export default Cards
