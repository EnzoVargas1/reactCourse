import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label, Modal, ModalHeader, 
    ModalBody, 
    Form, FormGroup, Input} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

const handleSubmit = (values, dishId) => {
  this.addComment(dishId, values.rating, values.name, values.comment);
 }


function RenderCommentForm(dishId){
    return(
      <LocalForm onSubmit={(values) => handleSubmit(values, dishId) }>
        <Row className="form-group">
        <Label htmlFor="rating" >Rating</Label>
        <Col>
        <Control.select model =".rating" name="rating"
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
      <Label for = "name">Your Name</Label>
       <Col>
       <Control.text model=".name" id="name" name="name"
         placeholder="Name" className="form-control"
         validators={{required, minLength: minLength(3),
          maxLength: maxLength(15)
          }}
         />
          <Errors
             className="text-danger"
             model =".name"
             show="touched"
              messages={{
               required:"Required",
               minLength:"Must be greater than 2 characters",
               maxLength:"Must be 15 characters or less"
               }}
           />
       </Col>
      </Row>
      <Row className="form-group">
        <Label for="comment">Comment</Label>
        <Col>
          <Control.textarea model=".comment" id="comment" name="comment"
          rows="8" className="form-control"/>
        </Col>
      </Row>
      <Row className="form-group">
        <Col>
        <Button type="submit" color="primary">
         Submit
        </Button>
        </Col>
        </Row>
      </LocalForm>
    )
    
}


export const CommentForm = () => {

    return(
      
      RenderCommentForm()
      );
};



