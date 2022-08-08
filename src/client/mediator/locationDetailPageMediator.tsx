import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingCard } from "../component";
import { LocationDetailPage } from "../page";
import { Location } from "../../type";

import { getLocationDetail } from "../service";

const LocationDetailPageMediator = () => {
  const [locationDetail, setLocationDetail] = useState<Location | undefined>();

  const navigate = useNavigate();

  const handleGetLocationDetailError = (error: string) => {
    console.log(error);
  };

  const updateLocationDetail = (newLocationDetail: Location) => {
    setLocationDetail(newLocationDetail);
  };

  useEffect(() => {
    const placeId = new URLSearchParams(window.location.search).get("placeId");
    if (placeId) {
      getLocationDetail(
        window.location.search,
        updateLocationDetail,
        handleGetLocationDetailError
      );
    } else {
      navigate("/home");
    }
  }, [navigate]);

  if (!locationDetail) {
    return <LoadingCard />;
  } else {
    const {
      formatted_phone_number: formattedPhoneNumber,
      name,
      rating,
      reviews,
    } = locationDetail;
    return (
      <LocationDetailPage
        formattedPhoneNumber={formattedPhoneNumber}
        name={name}
        rating={rating}
        reviews={reviews}
      />
    );
  }
};

export { LocationDetailPageMediator };
