import { BiSolidMessage } from 'react-icons/bi';
import styled from 'styled-components';

const StyledQuestionCard = styled.div`
  background: #fff; // Example background color
  padding: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); // Example shadow
  border-radius: 8px; // Rounded corners
  margin: 1rem; // Space around the card
  text-align: center; // Center the text

  svg {
    color: #000; // Example icon color
    margin-bottom: 0.5rem; // Space below the icon
    font-size: 2rem; // Larger icon size
  }

  strong {
    display: block; // Make strong tag block for spacing
    margin-bottom: 0.5rem; // Space below the strong tag
    color: #333; // Example text color
    font-size: 1.25rem; // Larger font size
  }

  p {
    color: #666; // Lighter text color
    margin-bottom: 1rem; // Space below the paragraph
  }

  button {
    background-color: orange;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px; // Rounded button edges
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

const QuestionCard = () => {
return (
<StyledQuestionCard>
<BiSolidMessage />
<strong>Do you have more questions?</strong>
<p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
<button>Shoot a Direct Mail</button>
</StyledQuestionCard>
);
}

export default QuestionCard;
