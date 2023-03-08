import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Cardd(){
    return(
        <>
            <Container style={{paddingTop: "2rem", paddingBottom: "2rem", marginTop: "20rem"}}>
            <Row>
               <Col>
                    <Card style={{width: "18rem"}}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg"/>
                        <Card.Body>
                            <Card.Title>product</Card.Title>
                            <Card.Text>Lorem10</Card.Text>
                            <Button variant="primary">learn more</Button>
                        </Card.Body>
                    </Card>
               </Col>

               <Col>
                    <Card style={{width: "18rem"}}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg"/>
                        <Card.Body>
                            <Card.Title>product</Card.Title>
                            <Card.Text>Lorem10</Card.Text>
                            <Button variant="primary">learn more</Button>
                        </Card.Body>
                    </Card>
               </Col>

               <Col>
                    <Card style={{width: "18rem"}}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg"/>
                        <Card.Body>
                            <Card.Title>product</Card.Title>
                            <Card.Text>Lorem10</Card.Text>
                            <Button variant="primary">learn more</Button>
                        </Card.Body>
                    </Card>
               </Col>
 
            </Row>
        </Container>
        </>
    )
        
}