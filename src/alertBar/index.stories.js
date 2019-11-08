/* eslint-disable no-unused-vars */
// eslint-disable no-unused-vars
import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, object } from "@storybook/addon-knobs";

import Card from "./index";
/*
import CardContent from './card-content'
// import Table from '../table'

const styles = {
  position: 'absolute',
  marginLeft: '50%',
  transform: 'translate(-50%, 50%)',
  width: '70%',
}
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>
*/
storiesOf("Card", module)
  //.addDecorator(CenterDecorator)
  //.addDecorator(withInfo)
  //.addDecorator(withKnobs)
  .add("Card Simples", () => <Card>{text("children", "Card Simples")}</Card>);
