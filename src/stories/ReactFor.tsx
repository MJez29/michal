import { Story } from "../interfaces/Story";
import React from "react";

export const ReactFor: Story = {
  title: "react-for",
  body: (
    <p>
      When I entered the JavaScript world I got my first exposure to a package
      manager in the form of NPM. I was amazed by all the awesome packages on
      there like React, Angular, Express and many more and how you could get so
      much functionality from simply typing npm install. At the time, one of my
      JavaScript dreams was to eventually publish a package on NPM and react-for
      brought that dream to fruitition. In essence, all the package does is
      provide react components to write for loops in JSX code, similar to
      Angular's ng-for. I strived to hold myself to a high bar when developing
      the package by writing it in TypeScript with strong types, generating
      documentation, using TSLint to keep my code looking fresh, preventing
      regressions with enzyme and mocha. Eventually I released v1.0.0 and have
      since gotten over 600 installs! A fun little fact that came out of this
      project was that a few months later one of the original creators of
      GraphQL at Facebook developed a very similar package. At the time I was
      building a GraphQL API at Shopify so it felt really cool to come up with
      the same idea as this dude. I reached out to him on Github asking him his
      thoughts and he said that my implementation looked pretty good :P
    </p>
  ),
  connections: []
};
