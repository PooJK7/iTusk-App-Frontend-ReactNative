import React from "react";
import renderer from "react-test-renderer";
import App from "./App.js"
describe("<App />", () => {
    it('has 1 child', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree.children.length).toBe(1);
    });
    it('renders correctly across screens', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
      });
      
});
