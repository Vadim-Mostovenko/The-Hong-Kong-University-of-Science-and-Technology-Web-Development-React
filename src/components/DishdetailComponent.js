import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

	function RenderComments({comments}) {
        if (comments != null) {
            const commentsList = comments.map(review => {
                return (
                    <li key = {review.id}>
                        <p>{review.comment}</p> 
                        <p>-- {review.author} , {new Intl.DateTimeFormat("en-US", {year: "numeric", month: "short", day: "2-digit"}).format(new Date(Date.parse(review.date)))}</p>
                    </li>
                );
            });
            return (
				<React.Fragment>
                    <h4>Comments</h4>
					<ul className="list-unstyled">
						{commentsList}
					</ul>
				</React.Fragment>
            );
		}
		else
			return (
				<div></div>
			);
    }

	function RenderDish({dish}) {
        if (dish != null) {
            return (
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle><h5>{dish.name}</h5></CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
            );
		}
		else {
            return (
                <div></div>
            );
        }
    }

	const DishDetail = (props) => {
		const dish = props.dish;
		if (dish != null) {
			return (
                <div className="container">
					<div className="row">
						<Breadcrumb>
							<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
							<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
						</Breadcrumb>
						<div className="col-12">
							<h3>{props.dish.name}</h3>
							<hr />
						</div>                
					</div>
					<div className="row">
						<div className="col-12 col-md-5 m-1">
							<RenderDish dish={props.dish} />
						</div>
						<div className="col-12 col-md-5 m-1">
							<RenderComments comments={props.comments} />
						</div>
					</div>
                </div>
            );
		} 
		else 
			return (
				<div></div>
			);
	}

export default DishDetail;