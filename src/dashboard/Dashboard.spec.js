// Test away
import React from "react";

import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";


// STEP 2 set up cleaning up in afterEach
afterEach(rtl.cleanup);

// STEP 3 take care of repetitive operations inside
// a beforeEach function
let wrapper;
let Unlocked = () => {
  return wrapper.queryByText("Unlocked");
};
let Open = () => {
  return wrapper.queryByText("Open");
};
let LockGate = () => {
  return wrapper.queryByText("Lock Gate");
};
let CloseGate = () => {
  return wrapper.queryByText("Close Gate");
};
let Closed = () => {
  return wrapper.queryByText("Closed");
};
let Locked = () => {
  return wrapper.queryByText("Locked");
};
let OpenGate = () => {
  return wrapper.queryByText("Open Gate");
};
let UnlockGate = () => {
  return wrapper.queryByText("Unlock Gate");
};
beforeEach(() => {
  // we want the "wrapper" recreated at every test
  wrapper = rtl.render(<Dashboard />);
});

it("renders without crashing", () => {
  wrapper.debug();
});

//Test for how it will initially load

describe("Dashboard component renders", () => {
  it("renders without crashing", () => {
    wrapper.debug();
    expect(wrapper.container).toMatchSnapshot();
  });
  it("renders Close Gate in test node", () => {
    expect(CloseGate()).toBeInTheDocument();
    expect(CloseGate()).toBeVisible();
  });

  it("renders open in test node", () => {
    expect(Open()).toBeInTheDocument();
    expect(Open()).toBeVisible();
    expect(OpenGate()).toBe(null);
   
  });

  it("renders an Unlocked in test node", () => {
    expect(Unlocked()).toBeInTheDocument();
    expect(Unlocked()).toBeVisible();
  });

  it("renders Lock Gate in test node", () => {
    expect(LockGate()).toBeInTheDocument();
    expect(LockGate()).toBeVisible();
    expect(LockGate()).toBeDisabled();
  });
});

//Interactive tests
describe("Dashboard component on clicking Close Gate", () => {
  it("clicking Close Gate changes open to closed", () => {
    rtl.fireEvent.click(CloseGate());

    expect(Unlocked()).toBeInTheDocument(); //unchanged
    expect(Unlocked()).toBeVisible(); //unchanged

    expect(Closed()).toBeInTheDocument();
    expect(Closed()).toBeVisible();

    expect(LockGate()).toBeVisible();
    expect(LockGate()).toBeInTheDocument();

    expect(OpenGate()).toBeVisible(); // close Gate changes to Open Gate
    expect(OpenGate()).toBeInTheDocument(); // close Gate changes to Open Gate

    expect(CloseGate()).toBe(null); // close Gate changes to Open Gate so close Gate is null
  });

    it("clicking Open Gate changes closed to open", () => {
        rtl.fireEvent.click(CloseGate());
      rtl.fireEvent.click(OpenGate());

      expect(Unlocked()).toBeInTheDocument(); //unchanged
      expect(Unlocked()).toBeVisible(); //unchanged

      expect(Open()).toBeInTheDocument();
      expect(Open()).toBeVisible();

      expect (LockGate()).toBeVisible();
      expect (LockGate()).toBeInTheDocument();
      expect(LockGate()).toBeDisabled();

      expect(CloseGate()).toBeVisible(); 
      expect(CloseGate()).toBeInTheDocument(); 

      expect(OpenGate()).toBe(null); // close Gate changes to Open Gate so close Gate is null
    });
});

it("clicking Lock Gate", () => {
  rtl.fireEvent.click(CloseGate());
  rtl.fireEvent.click(LockGate());

  expect(Locked()).toBeInTheDocument(); 
  expect(Locked()).toBeVisible();

  expect(Closed()).toBeInTheDocument();
  expect(Closed()).toBeVisible();

  expect (UnlockGate()).toBeVisible();
  expect (UnlockGate()).toBeInTheDocument();
  expect(UnlockGate()).toBeEnabled();

  expect(OpenGate()).toBeVisible(); 
  expect(OpenGate()).toBeInTheDocument(); 
  expect(OpenGate()).toBeDisabled();
});

