import React from "react";
import sinon from "sinon";
import Adapter from 'enzyme-adapter-react-15';
import { shallow,configure } from "enzyme";
import { expect } from "code";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ContactDetails  from "./ContactDetails";

configure({adapter:new Adapter()})
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;
const intialState= {ingredients:{
    salad:0,
    cheese:0,
    bacon:0,
    meat:0
}};
let component;

describe("Loading Burger content", () => {
  beforeEach(() => {
    store = mockStore(intialState)
    component = shallow(<ContactDetails store= {store}/>);
  });

  it("should exist the component", () => {
      expect(component.exists()).to.be.equal(true);
  });

});
