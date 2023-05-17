import styled from "styled-components";

interface CircleProps {
  minute: number;
}

const CircleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
`;

const CircleSvg = styled.svg`
  transform: rotate(-90deg);
`;

const CircleText = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.125rem;
  font-weight: bold;
`;

const Circle: React.FC<CircleProps> = ({ minute }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const progress = (minute * circumference) / 90;

  let text;
  if (minute === 0) {
    text = "0";
  } else if (minute < 45) {
    text = `${minute}`;
  } else if (minute === 45) {
    text = "HT";
  } else if (minute < 90) {
    text = `${minute}`;
  } else {
    text = "FT";
  }

  return (
    <CircleContainer>
      <CircleSvg width="80" height="80">
        <circle
          stroke="gray"
          fill="transparent"
          strokeWidth="2"
          r={radius}
          cx="40"
          cy="40"
        />
        <circle
          stroke="green"
          fill="transparent"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          r={radius}
          cx="40"
          cy="40"
        />
      </CircleSvg>
      <CircleText>{text}</CircleText>
    </CircleContainer>
  );
};

export default Circle;