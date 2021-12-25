import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import { useParams } from "react-router-dom";

const getMonster = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    return (data)
}
const getMonsterP = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => resolve(data))

    })
}

const MonsterPage = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true)
    const [monster, setMonster] = useState({
        id: 1,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    })
    useEffect(() => {
        setLoading(true)
        getMonster(params.monsterID).then(data => {
            setMonster(data)
            setLoading(false)
        })
        console.log()
    }, [params.monsterID])
    return (
        <Container>
            <Card>
                {
                    loading ? <h1>please wait I am loading...!</h1> : <Card.Body>
                        <img style={{
                            marginLeft: '30%',
                            borderRadius: "50%",
                            border: '1px solid black'
                        }} src={'https://robohash.org/' + monster.username} alt="avatar" />
                        <Card.Title>{monster.name}</Card.Title>
                        <Card.Title>{monster.username}</Card.Title>
                        <Card.Title>{monster.email}</Card.Title>
                        <Card.Title>{monster.phone}</Card.Title>
                        <Card.Title>{monster.website}</Card.Title>
                        <Link to='/monsters'>back to list</Link>
                    </Card.Body>
                }

            </Card>
        </Container>
    )
}

export default MonsterPage
