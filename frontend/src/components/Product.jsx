import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          style={{ height: '250px' }}
          src={product.image}
          variant='top'
        />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          className='text-secondary text-decoration-none'
        >
          <Card.Title as='div' style={{ minHeight: '4rem' }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my3'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
