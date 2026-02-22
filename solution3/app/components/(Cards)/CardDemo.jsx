import Card, { CardHeader, CardBody, CardFooter } from "./Card"

// Card.Header = CardHeader;
// Card.Body = CardBody;
// Card.Footer = CardFooter;

// console.log('Card.Header:', Card.Header);
// console.log('Card:', Card);

export default function CardDemo ()  {
  return (
    <div className="flex m-4 gap-2 shadow-amber-300 w-full ">
      <Card className=""> 
        <Card.Header title="Hello" className="bg-blue-50">
        </Card.Header>
        <Card.Body>Hello Body</Card.Body>
        <Card.Footer>Hello Footer</Card.Footer>
      </Card>

      <Card>
        <Card.Header title="World" className="bg-blue-50">
        </Card.Header>
        <Card.Body>Body World</Card.Body>
        <Card.Footer>Footer World</Card.Footer>
      </Card>
    </div>
  );
}
