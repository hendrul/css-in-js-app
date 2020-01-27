import React from "react";
import Page from "../../components/Page";

export default () => {
  return (
    <Page
      title="StyledComponents"
      github="styled-components/styled-components"
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
