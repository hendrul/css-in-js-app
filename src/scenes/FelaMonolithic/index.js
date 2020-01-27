import React from "react";
import { createRenderer } from "fela";
import { Provider } from "react-fela";
import monolithic from "fela-monolithic";
import Page from "../../components/Page";

let renderer = null;
let mountNode = null;

export default () => {
  return (
    <Page
      title="FelaMonolithic"
      github="rofrischmann/fela"
      Provider={({ children }) => {
        if (!renderer) {
          renderer = createRenderer({
            enhancers: [monolithic()],
            selectorPrefix: "cij_"
          });

          mountNode = document.createElement("style");
          document.head.appendChild(mountNode);
        }

        return (
          <Provider renderer={renderer} mountNode={mountNode}>
            {children}
          </Provider>
        );
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
