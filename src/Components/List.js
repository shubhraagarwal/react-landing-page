import "../Styles/List.css";
import React from "react";
import { Card } from "react-bootstrap";
import Categories from "./Categories";

function Items(category) {
  return (
    <div>
            <h1 className="list-h1" id={category.id} >            
              {" "}
              {category.name}{" "}
            </h1>
      <div className="card-category">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.item1}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/2907428/pexels-photo-2907428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.item2}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.item3}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/90893/pexels-photo-90893.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.item4}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="card-category">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1346342/pexels-photo-1346342.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.item5}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.item6}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/5591660/pexels-photo-5591660.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.item7}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.item8}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="card-category2">
        <Card style={{ width: "18rem", marginLeft: "3rem" }} className="card9">
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/698854/pexels-photo-698854.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.item9}</Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", marginLeft: "5.2rem" }}
          className="card10"
        >
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Card.Body>
            <Card.Title>{category.name}</Card.Title>
            <Card.Text>{category.item10}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="List">
      {Categories.map(Items)}
    </div>
  );
}

export default List;
