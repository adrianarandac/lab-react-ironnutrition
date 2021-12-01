import React from "react";
import { Card, Col, Button } from "antd";

const FoodBox = (props) => {
  const { name, calories, image, servings } = props.food;



  function handleDelete() {
    console.log()
    props.deleteCB(props.index)
    
  }
  return (
    <div id={props.index}>
      <Col>
        <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
          <img src={image} height={60} alt={"images"} />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {calories * servings} </b> kcal
          </p>
          <Button type="primary" onClick={handleDelete}>
            {" "}
            Delete{" "}
          </Button>
        </Card>
      </Col>
    </div>
  );
};

export default FoodBox;
