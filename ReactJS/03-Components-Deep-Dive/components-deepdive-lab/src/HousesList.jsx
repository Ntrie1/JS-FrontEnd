export default function HousesList({ houses }) {
    console.log(houses)
    return (
        <div>
            {houses.map((house, index) => (
                <div key={index}>
                    <h2>{house.name}</h2>
                    <ul>
                        <h4>Members:</h4>
                        {house.members.map((member, i) => (
                            <li key={i}>{member.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}