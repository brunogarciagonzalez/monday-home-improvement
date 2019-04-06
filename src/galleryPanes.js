import React from "react";
import { Tab } from "semantic-ui-react";
import PhotosContainer from "./components/PhotosContainer.js";
import { bathrooms, kitchens, decks, carpentry } from "./imageLists.js";

export default [
  {
    menuItem: { key: "bathrooms", icon: "bath", content: "Bathrooms" },
    render: () => (
      <Tab.Pane>
        <PhotosContainer images={bathrooms} />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "kitchens", icon: "food", content: "Kitchens" },
    render: () => (
      <Tab.Pane>
        <PhotosContainer images={kitchens} />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "decks", icon: "sun", content: "Decks" },
    render: () => (
      <Tab.Pane>
        <PhotosContainer images={decks} />
      </Tab.Pane>
    )
  },
  {
    menuItem: { key: "carpentry", icon: "tree", content: "Carpentry" },
    render: () => (
      <Tab.Pane>
        <PhotosContainer images={carpentry} />
      </Tab.Pane>
    )
  }
];
