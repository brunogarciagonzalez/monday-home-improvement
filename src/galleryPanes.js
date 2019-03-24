import React from "react";
import { Tab } from "semantic-ui-react";
import Carousel from "./components/Carousel.js";
import { bathrooms, kitchens, decks, carpentry } from "./imageLists.js";

export default [
  {
    menuItem: { key: "bathrooms", icon: "bath", content: "Bathrooms" },
    render: () => (
      <Tab.Pane>
        <Carousel images={bathrooms} />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "kitchens", icon: "food", content: "Kitchens" },
    render: () => (
      <Tab.Pane>
        <Carousel images={kitchens} />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "decks", icon: "sun", content: "Decks" },
    render: () => (
      <Tab.Pane>
        <Carousel images={decks} />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "carpentry", icon: "tree", content: "Carpentry" },
    render: () => (
      <Tab.Pane>
        <Carousel images={carpentry} />
      </Tab.Pane>
    )
  }
];
