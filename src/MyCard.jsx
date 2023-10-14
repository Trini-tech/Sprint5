import { Indicator } from "./Indicator.jsx";
import { Card, Button } from "react-bootstrap";
//import MobileStepper from "@mui/material/MobileStepper";

export function MyCard({ title, description, bgColor, image, nextStep, prevStep, step, tutorialDataLength }) {
  const cardStyle = {
    width: "20rem",
    height: "35rem",
    border: "none",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const cardImageStyle = {
    height: "60%",
    background: bgColor,
    overflow: "hidden",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  };

  const customButtonStyle = {
    width: "50px",
    height: "50px",
    fontSize: "1.5rem",
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={cardStyle}>
        <div style={cardImageStyle}>
          <Card.Img src={image} style={{ height: "100%" }} />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="d-flex justify-content-between">
              <Indicator tutorialDataLength={tutorialDataLength} step={step} />
              <div>
                {step > 0 && (
                  <Button variant="white" className="rounded-circle border border-dark" style={customButtonStyle} onClick={prevStep}>
                    <i className="bi bi-arrow-left"></i>
                  </Button>
                )}
                {step < 2 && (
                  <Button variant="dark" className="rounded-circle ms-2" style={customButtonStyle} onClick={nextStep}>
                    <i className="bi bi-arrow-right"></i>
                  </Button>
                )}
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}
