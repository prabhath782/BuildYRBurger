import React from "react";
import sinon from "sinon";
import Adapter from 'enzyme-adapter-react-15';
import { shallow,configure } from "enzyme";
import { expect } from "code";
import configureStore from 'redux-mock-store';
import Model from "../../components/UI/Modal/Modal";
import BurgerBuilder from "./BurgerBuilder";

configure({adapter:new Adapter()})
const mockStore = configureStore();
let store;
let intialState;
let component;

xdescribe("Loading Burger content", () => {
  beforeEach(() => {
    store = mockStore(intialState)
    component = shallow(<BurgerBuilder store= {store}/>);
  });

  it("should exist the component", () => {
      expect(component.exists()).to.be.equal(true);
  });

});
