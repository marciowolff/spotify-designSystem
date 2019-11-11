import React from "react";

import { storiesOf } from "@storybook/react";

import Media from "./index";

storiesOf("Media", module)
  .add("Sem imagem", () => (
    <div style={{ width: "200px" }}>
      <Media />
    </div>
  ))
  .add("Com título", () => (
    <div style={{ width: "200px" }}>
      <Media title="título" />
    </div>
  ))
  .add("Com título e descrição", () => (
    <div style={{ width: "200px" }}>
      <Media title="título" description="Descrição" />
    </div>
  ))
  .add("Com Imagem", () => (
    <div style={{ width: "200px" }}>
      <Media
        title="titulo media"
        imageUrl="test.jpg"
        description="descricao media"
      />
    </div>
  ));
