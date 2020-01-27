import React from "react";
import { JssProvider } from "react-jss";
import Page from "../../components/Page";
import { jss } from "./jss";

export default () => {
  return (
    <Page
      title="ReactJss"
      github="cssinjs/jss"
      Provider={({ children }) => {
        return <JssProvider jss={jss}>{children}</JssProvider>;
      }}
      load={onLoad => {
        Promise.all([
          import("./Block"),
          import("./DifferentBlocks"),
          import("./Probe")
        ]).then(([block, differentBlocks, probe]) => {
          onLoad({
            block: block.default,
            differentBlocks: differentBlocks.default,
            probe: probe.default
          });
        });
      }}
    />
  );
};
