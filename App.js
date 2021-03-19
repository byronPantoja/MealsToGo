import { StatusBar as ExportStatusBar } from "expo-status-bar";
import React from "react";

import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screens";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExportStatusBar style="auto" />
    </>
  );
}
