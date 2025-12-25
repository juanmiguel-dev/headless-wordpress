import Link from "next/link";
import { print } from "graphql/language/printer";
import gql from "graphql-tag";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { MenuItem, RootQueryToMenuItemConnection } from "@/gql/graphql";

import styles from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import HeaderClient from "./HeaderClient";

async function getData() {
  const menuQuery = gql`
    query MenuQuery {
      menuItems(where: { location: MENU_1 }) {
        nodes {
          uri
          target
          label
        }
      }
    }
  `;

  const { menuItems } = await fetchGraphQL<{
    menuItems: RootQueryToMenuItemConnection;
  }>(print(menuQuery));

  if (menuItems === null) {
    return { nodes: [] };
  }

  return menuItems;
}

export default async function Header() {
  const menuItems = await getData();
  const nodes = (menuItems.nodes as MenuItem[] || []).filter((item): item is MenuItem => !!item && !!item.uri && !!item.label);

  return (
    <HeaderClient menuItems={nodes}>
      <Navigation menuItems={nodes} />
    </HeaderClient>
  );
}
