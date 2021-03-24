import React from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info.card.components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #f7eae5;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  background-color: #f7e9e4;
  padding: 8px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  background-color: #797979;
  padding: 20px;
`;

export const RestaurantScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
