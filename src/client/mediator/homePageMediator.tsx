import { useNavigate } from "react-router-dom";

import { HomePage } from "../page";

const HomePageMediator = () => {
  const navigate = useNavigate();

  const navigateToLocationList = (location: string, keyword: string) => {
    if (location.length) {
      const encodedLocation = encodeURIComponent(location);
      let query: string = `?location=${encodedLocation}`;
      if (keyword?.length) {
        query = query.concat(`&keyword=${keyword}`);
      }
      navigate(`/location-list${query}`);
    }
  };

  return <HomePage onButtonClick={navigateToLocationList} />;
};

export { HomePageMediator };
