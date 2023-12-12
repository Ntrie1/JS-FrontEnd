import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CharacterItem = ({
    name,
    quote,
    house,
    id
}) => {
    return(
       

        <Card className="mt-6 w-96 ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://i.pinimg.com/564x/41/47/c3/4147c37241c42d68faa883cb5ce03a6c.jpg"
            />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name }
          </Typography>
            <h2 style={{fontSize: '1.5em'}}>House</h2>
          <Typography color="pink" className="font-black" >
            {house || 'No quote available'}
          </Typography>
          <Typography className="italic">
          {quote }
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
            <Link to={`/characters/${id}`}>
          <Button>Read More</Button>
            </Link>
        </CardFooter>
      </Card>
           
    )
}

export default CharacterItem;