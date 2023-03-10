/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {

    constructor(props) {
        super(props);

          this.toggleModal = this.toggleModal.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
      

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal()
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <>
                
                <Button outline onClick={this.toggleModal}>
                    <span className='fa fa-edit' fa-lg>Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                     <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" defaultValue="1"
                                    placeholder="Rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </Control.select>
                                </Col>
                            </Row>
                              <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                  className="form-control"
                                  validators={{
                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                  }}
                              />
                              <Errors
                                  className="text-danger"
                                  model=".author"
                                        show="touched"
                                  messages={{
                                      required: 'Required ',
                                      minLength: 'Must be greater than 2 character',
                                      maxLength: 'Must be 15 character or less'
                                  }}
                              />
                                </Col>
                            </Row>

                             <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                    <Col md={{size:1}}>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                                    
                                    </Col>
                            </Row>
                            </LocalForm>
                </ModalBody>
                </Modal >
                </>
                    
        );
    }
 

}

export default CommentForm;


