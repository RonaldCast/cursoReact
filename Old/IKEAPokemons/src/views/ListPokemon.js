import { Container, Row, Col } from 'react-bootstrap';
import CardPokemon from '../components/CardPokemon.js'
import CustomPagination from '../components/CustomPagination.js'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Capitalize from "../utils/Capitalize.js"

const ListPokemon = () => {

    const history = useHistory()
    const [resultList, setResultList] = useState({
        count: 0,
        list: []
    })

    const  [configPagination, setConfigPagination] = useState({
        totalItems: 1118,
        perPage: 60,
        currentPage: 1
    })

   const  changeCurrentPage = (key) => {
        getListPokemon(key);
        window.scrollTo(0, 0);

    }

    const getListPokemon = (current) => {
        let offset = configPagination.perPage * (current - 1)
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${configPagination.perPage}&offset=${offset}`).then((resp) => {
            setResultList({
                count: resp.data.count,
                list: resp.data.results
            })
            setConfigPagination({...configPagination, totalItems: resp.data.count,  currentPage:current })
        }).catch((e) => {
            console.log(e)
        })
    }

    useEffect(() => {
        getListPokemon(configPagination.currentPage);
    }, [])


    return (
        <Container>
            <Row className="contianerPokemon">
                <h4 className="">Pokemon list</h4>
            </Row>
            <Row>
                {resultList.list.map(item => (
                    <Col key={item.name} sm={4} md={3} style={{ marginBottom: "20px" }} >
                        <CardPokemon name={Capitalize(item.name)} 
                         to={() => { history.push(`/${item.name}`)}}
                        number={Number(item.url.substring(item.url.indexOf("/pokemon/") + "/pokemon/".length, item.url.length - 1))} />
                    </Col>
                ))}

            </Row>

            <Row style={{display:"flex", justifyContent:"center"}}>
                <CustomPagination  {...configPagination} changeCurrentPage={changeCurrentPage} />

            
            </Row>
        </Container>
    )
}

export default ListPokemon;
