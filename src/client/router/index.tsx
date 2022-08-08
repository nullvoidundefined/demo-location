import { Routes, Route, Navigate } from "react-router-dom";

import { MessageCard, Layout } from "../component";
import {
  HomePageMediator,
  LocationDetailPageMediator,
  LocationListPageMediator,
} from "../mediator";

const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePageMediator />} />
      <Route path="location-detail" element={<LocationDetailPageMediator />} />
      <Route path="location-list" element={<LocationListPageMediator />} />
    </Route>
    <Route
      path="*"
      element={
        <MessageCard
          icon="error"
          text="This page does not exist"
          title="Oops!"
        />
      }
    />
  </Routes>
);

export { Router };
