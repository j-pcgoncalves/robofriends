import Card from "./Card";
import { Robot } from "../actions";

type CardListProps = {
    robots: Robot[];
}

const CardList = ({ robots }: CardListProps) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;