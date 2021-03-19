import React from "react";
import styled from "styled-components/native";
// import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: #f7e9e4;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: #f7e9e4;
  padding: 20px;
`;

const RestaurantName = styled.Text`
  padding-left: 21px;
  padding-bottom: 20px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Coffee for Peace",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80.com/free-food-photo/nicely-served-burgers/",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantName>{name}</RestaurantName>
    </RestaurantCard>
  );
};
