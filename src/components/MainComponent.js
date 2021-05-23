import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import About from './AboutComponent';
import DishdetailComponent from './DishdetailComponent';
import {postComment, fetchDishes, fetchPromos, fetchComments, fetchLeaders, postFeedback} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import{TransitionGroup, CSSTransition} from 'react-transition-group';

 const mapStateToProps = state =>{
  return {
    dishes: state.DISHES,
    comments: state.COMMENTS,
    promotions: state.COMMENTS,
    leaders: state.LEADERS
  }
};

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  postFeedback: (feedback) => {dispatch(postFeedback(feedback))}
});


class Main extends Component{
 

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
    comments: COMMENTS,
    promotions: COMMENTS,
    leaders: LEADERS
    }
 
  }

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
 
  render(){
    
    const HomePage = () =>{
      return(
        <Home 
        dish={this.state.dishes.filter(dish => dish.featured)[0]}
        dishesLoading={this.state.dishes.isLoading}
        dishesErrMess={this.state.dishes.errMess}
        promotion={this.state.promotions.filter(promo => promo.featured)[0]}
      promosLoading={this.state.promotions.isLoading}
        promosErrMess={this.state.promotions.errMess}
        leader={this.state.leaders.filter(leader => leader.featured)[0]}
        leaderErrMess={this.state.leaders.errMess}/>
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishdetailComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
            isLoading={this.state.dishes.isLoading}
            errMess={this.state.dishes.errMess}
            comments={this.state.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            commentsErrMess={this.state.comments.errMess}
            postComment ={this.props.postComment}/>
      );
    
    };

    return (
      <div>
        <Header/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout ={300}>
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> }/>
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={() => <Contact 
          resetFeedbackForm = {this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
          <Route path='/aboutus' component={() => <About leaders = {this.state.leaders}/>} />
          <Redirect to="/home"/>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));