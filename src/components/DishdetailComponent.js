
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export class DishDetail extends Component {

  
  constructor(props) {
    super(props);

this.state = {

}

  }

  renderDish(dish) {
    if (dish != null) {
        return(
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
            
         );
    }
    else {
        return(
            <div></div>
        );
    }
}


  renderComments(comments) {
    if (comments != null) {
       const commentItems = comments.comments.map((comment) => {
        return (
                   <ul className='list-unstyled'>
                    <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>--{comment.author},
                      &nbsp;
                      {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                      }).format(new Date(Date.parse(comment.date)))}
                      </p>
                    </li>
                   </ul>          
        );
       });
       return(
        <div className='row'>
          <h4>Comments</h4>
          {commentItems}
        </div>
      
       );
    }else {
      return <div></div>
    }
  }

    render() {
     return(
        <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-5 m-1'>
              {this.renderDish(this.props.selectedDish)}
              </div>
                <div className='col-12 col-md-5 m-1'>
              {this.renderComments(this.props.selectedDish)}
              </div>
          </div>
        </div>
     );
  }  
  

}
export default DishDetail;