import React , {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishdetailComponent extends Component{

constructor(props){
    super(props)
    this.state = {
        selectedDish: this.props.selectedDish
    }
}


    renderDish(dish){
     
        if(dish != null){
            return(
                <Card>
                    <CardImg top src= {this.props.dish.image} alt ={this.props.dish.name}/>
                        <CardBody>
                       <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                       </CardBody>
                </Card>
            );
        }
        else{
            return(
                console.log("didn't work")
     
            );
        }
    }

    render(){
        return(
            <div className = "container">
            <div className ="col-12 col-md-5 mt-1">
                {this.renderDish(this.state.selectedDish)}
            </div>
        </div>
        );
    }


}

export default DishdetailComponent;