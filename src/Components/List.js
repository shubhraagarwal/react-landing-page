import "../Styles/List.css";
import React from "react";
import { Card } from "react-bootstrap";
import Categories from "./Categories";

function Items(category) {
  return (
    <div>
      <h1 className="list-h1">{category.name}</h1>
      <Card
        bg="Dark"
        key={category.id}
        style={{ width: "18rem", backgroundColor: "#32accd" }}
        className="mb-2 card1"
      >
        <Card.Header>{category.item1}</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="Dark"
        key={category.id}
        style={{ width: "18rem", backgroundColor: "#32accd" }}
        className="mb-2 card"
      >
        <Card.Header>{category.item2}</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="Dark"
        key={category.id}
        style={{ width: "18rem", backgroundColor: "#32accd" }}
        className="mb-2 card"
      >
        <Card.Header>{category.item3}</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="Dark"
        key={category.id}
        style={{ width: "18rem", backgroundColor: "#32accd" }}
        className="mb-2 card1"
      >
        <Card.Header>{category.item10}</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="Dark"
        key={category.id}
        style={{ width: "18rem", backgroundColor: "#32accd" }}
        className="mb-2 card"
      >
        <Card.Header>{category.item4}</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="Dark"
        key={category.id}
        style={{ width: "18rem", backgroundColor: "#32accd" }}
        className="mb-2 card"
      >
        <Card.Header>{category.item5}</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="Dark"
        key={category.id}
        style={{ width: "18rem", backgroundColor: "#32accd" }}
        className="mb-2 card1"
      >
        <Card.Header>{category.item6}</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="Dark"
        key={category.id}
        style={{ width: "18rem", backgroundColor: "#32accd" }}
        className="mb-2 card1"
      >
        <Card.Header>{category.item7}</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="Dark"
        key={category.id}
        style={{ width: "18rem", backgroundColor: "#32accd" }}
        className="mb-2 card1"
      >
        <Card.Header>{category.item8}</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="Dark"
        key={category.id}
        style={{ width: "18rem", backgroundColor: "#32accd" }}
        className="mb-2 mt-2 card1"
      >
        <Card.Header>{category.item9}</Card.Header>
        <Card.Body>
          <Card.Title> Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function List() {
  return (
    <div className="List">
      {Categories.map(Items)}
      <h1 className="list-h1"> </h1>
    </div>
  );
}

export default List;
