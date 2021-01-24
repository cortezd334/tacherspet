import React, { Component } from 'react';
import { fetchStudents} from '../actions/api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import edit from '../images/settings.png';

class Student extends Component {

    componentDidMount() {
        fetchStudents()
        .then(json => console.log(json))
    }

    render() {

        const displayStudents = () => {
            // return fetchStudents.map(student => {
            //     return <Row>
            //         <Col><p>{student.name}</p></Col>
            //         <Col><p>{student.school}</p></Col>
            //         <Col><p>{student.grade}</p></Col>
            //         <Col><img src={edit}/></Col>
            //     </Row>
            // })
        }

        return (
            <Container>
                <Row>
                    <Col><h3>Name</h3></Col>
                    <Col><h3>School</h3></Col>
                    <Col><h3>Grade</h3></Col>
                    <Col><h3></h3></Col>
                </Row>
                {displayStudents()}
            </Container>
        );
    }
}

export default Student;

// const Student = () => {

//         return (
//             <div></div>
//         );

// }