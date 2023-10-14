import styled from "styled-components";

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const IndicatorCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 2px;
  background-color: ${props => (props.active ? "#212529" : "#BDBDBD")};
  cursor: pointer;
`;

export function Indicator({ tutorialDataLength, step, setStep }) {
  const handleClick = index => {
    setStep(index);
  };
  return (
    <IndicatorContainer>
      {Array.from({ length: tutorialDataLength }).map((_, index) => (
        <IndicatorCircle key={index} active={index === step} onClick={() => handleClick(index)} />
      ))}
    </IndicatorContainer>
  );
}
