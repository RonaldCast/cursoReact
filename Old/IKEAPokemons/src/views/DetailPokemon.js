import { Container, Row, Col, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
import Capitalize from "../utils/Capitalize.js";

const DetailPokemon = (props) => {

    const [data, setData] = useState(null)
    const [message, setMessage] = useState("Loading...")

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`).
            then((resp) => {
               setData(resp.data)
            })
            .catch(() => {
                setMessage("Not Found")
            });
    }, [props.match.params.name])

    return (
        <Container>
            <Row className="contianerPokemon" style={{ marginBottom: "40px" }}>
                <h4> <Link to="/">Pokemons</Link> / <span>{ Capitalize(props.match.params.name)}</span></h4>
            </Row>
            <Row className="contianerDetail">
                {
                    data != null ? (
                        <>
                            <Col md={4} style={{ display: "flex", justifyContent:"center", alignContent:"center"}}>
                                <div style={{ width: "100%", display: "flex", justifyContent:"center", alignContent:"center", marginBottom: "10px" }}>
                                    <img  alt={data.name} style={{ width: '100%', maxWidth: "300px" }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} />

                                </div>
                            </Col>

                            <Col md={8}>
                                <h4>{Capitalize(data.name)}</h4>
                                {
                                    (<div style={{ marginTop: "20px" }}>
                                        {data.types.map( (x, i) => (
                                            <span key={i} className="contianerDetail--ability">
                                                {x.type.name}
                                            </span>
                                        ))}
                                    </div>)

                                }

                                <div style={{ marginTop: "20px" }}>
                                    <Table responsive="sm">
                                        <thead>
                                            <tr>
                                                <th>Attribute</th>
                                                <th style={{textAlign:"right"}}>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Experience</td>
                                                <td style={{textAlign:"right"}}>{data.base_experience}</td>
                                            </tr>
                                            <tr>
                                                <td>Height</td>
                                                <td style={{textAlign:"right"}}>{data.height}</td>
                                            </tr>
                                            <tr>
                                                <td>Weight</td>
                                                <td style={{textAlign:"right"}}>{data.weight}</td>
                                            </tr>
                                            <tr>
                                                <td>Abilities</td>
                                                <td style={{textAlign:"right"}}>{data.abilities.map( (x, i) => (
                                                     <span key={i}> {`${x.ability.name}${i + 1  === data.abilities.length ?  "" : ','}`} </span>
                                                    
                                                ))}</td>
                                            </tr>
                                            <tr>
                                                <td>No. of Moves</td>
                                                <td style={{textAlign:"right"}}>{data.moves.length}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>


                            </Col>
                        </>

                    ) : (
                        <Col> <p style={{textAlign:"center", fontSize: "1.3rem"}}>{message}</p></Col>
                    )
                }

            </Row>
        </Container>
    )
}


export default DetailPokemon;