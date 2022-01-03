import React from "react";
import "./Postview.css";
import { Navbar, Container, Card, Button, Row, Col } from "react-bootstrap";

const Postview = () => {
  const [posts, setPost] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3005/user")
      .then((res) => res.json())
      .then((responseData) => setPost(responseData));
  }, []);

  return (
    <div className="site-container">
      <div className="page-header">
        <Navbar>
          <Container>
            <Navbar.Brand className="page-header-brand" href="#home">
              <span>InstaClone </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <img
                  className="img-dgsh"
                  src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nbyUyMGluc3RhZ3JhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60  "
                ></img>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="post-container">
        {/* loopover */}
        {posts.map((post, index) => {
          return (
            <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <card className="">
                    <Card.Header className="uper-part">
                      <label className="uper-part1"> {post.name}</label>
                      <label className="uper-part2">{post.location}</label>
                    </Card.Header>

                    <Card.Body className="text-center">
                      {/* for image */}
                      <Card.Title className="center-image">
                        <img src={post.PostImage + index} className="img" />
                      </Card.Title>

                      <card className="lower-part0">
                        <Card className="lower-part">
                          <Card.Title className="lower-part1">
                            <img src={post.logolike} className="img" />
                          </Card.Title>
                          <Card.Text className="lower-part2">
                            {new Date().toLocaleDateString()}
                          </Card.Text>
                        </Card>
                        <Button>{post.likes} likes</Button>
                      </card>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      {post.description}
                    </Card.Footer>
                  </card>
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    </div>
  );
};

export default Postview;
