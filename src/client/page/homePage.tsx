import { ChangeEvent, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { SelectOption } from "../../type";
import { LOCATION } from "../constant";

type HomePageProps = {
  onButtonClick: (location: string, keyword: string) => void;
};

const HomePage = ({ onButtonClick }: HomePageProps) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const updateKeyword = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setKeyword(value);
  };

  const updateLocation = (locationOption: string) => {
    setLocation(locationOption);
  };

  return (
    <>
      <h3>Select A Location</h3>
      <div className="mb-2">Keyword (Optional)</div>
      <input
        className="form-control mb-3"
        onChange={updateKeyword}
        placeholder="Ex: Restaurant, Grocery Store, Camping..."
        value={keyword}
      />
      <div className="mb-2">Location (Required)</div>
      <ListGroup className="mb-3">
        {LOCATION.LOCATION_OPTIONS.map(
          (locationOption: SelectOption, index: number) => {
            const key = `location-options-location-option-${index}`;
            const { label, value } = locationOption;
            return (
              <ListGroup.Item
                action
                active={location === value}
                key={key}
                onClick={() => updateLocation(value)}
              >
                {label}
              </ListGroup.Item>
            );
          }
        )}
      </ListGroup>
      <Button
        disabled={!location}
        onClick={() => onButtonClick(location, keyword)}
      >
        Submit
      </Button>
    </>
  );
};

export { HomePage };
