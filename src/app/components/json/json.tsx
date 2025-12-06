
import { useEffect, useState } from "react";
type Data = {
    name: string
    age: number
}

const Json = () => {
    const [data, setData] = useState<Data[] | null>(null)

    useEffect(() => {
        fetch('/data/s1.json')
            .then((res) => res.json())
            .then((json) => setData(json))
    }, [])

    if (!data) return <p>Chargement...</p>

    return (
        <ul>
            {data.map((obj) => (
                <li>
                    <h3>Nom : {obj.name}</h3>
                    <p>Âge : {obj.age}</p>
                </li>
            ))}
        </ul>
    )
}

export default Json