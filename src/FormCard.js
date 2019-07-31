import React from 'react'
import {Col , Button, ButtonGroup, Card, CardBody, CardTitle, Form, FormGroup, Input, Label} from "reactstrap";


export default (props) => {
    return (
                    <Form onSubmit={props.handleSubmit} className="bg-white">
                        <div>
                            <CardTitle className="font-weight-bolder text-center">Add A mosque to Map</CardTitle>
                                <Label for="Mosque name"></Label>
                                <Input onChange={props.handleChange}
                                       type="text"
                                       name="name"
                                       value={props.info.name}
                                       id="name"
                                       placeholder="Enter mosque name"/>
                                <Label for="city"></Label>
                                <Input onChange={props.handleChange}
                                       type="text"
                                       name="city"
                                       id="city"
                                       value={props.info.city}
                                       placeholder="City name"
                                />
                                <Label for="region"></Label>
                                <Input onChange={props.handleChange}
                                       type="text"
                                       name="region"
                                       id="region"
                                       value={props.info.region}
                                       placeholder="City name"
                                />

                                <Label for="Description"></Label>
                                <Input onChange={props.handleChange}
                                       type="textarea"
                                       name="desc"
                                       id="message"
                                       value={props.info.desc}
                                       placeholder="Enter a description"
                                />

                                <br/>
                                <h6>Does this mosque holds Jumm'ah</h6>
                                <ButtonGroup>
                                    <Button color="primary"
                                            onClick={() => props.handleRadio(false)}> Yes </Button>
                                    <Button color="primary" onClick={() => props.handleRadio(true)}> No </Button>
                                </ButtonGroup>
                                <p>Selected: {props.info.hasJum ? <p>This mosque holds Jumm'ah</p> :
                                    <p>This mosque does NOT hold Jumm'ah</p>}</p>

                            <Button className="submit" color="secondary" type="submit">Save Mosque</Button>
                            <Button className="submit" onClick={props.clearForm} color="secondary">Clear form</Button>


                        </div>
                       </Form>


    );
}

