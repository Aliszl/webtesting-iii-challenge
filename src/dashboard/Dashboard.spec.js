// Test away
// Test away!
import React from 'react';
// import renderer from 'react-test-renderer';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import { exportAllDeclaration } from '@babel/types';

// STEP 2 set up cleaning up in afterEach
afterEach(rtl.cleanup);

// STEP 3 take care of repetitive operations inside
// a beforeEach function
let wrapper;
let unlocked =()=>wrapper.queryByText("Unlocked");
let Open =()=>wrapper.queryByText("Open");

let LockGate = () =>{
    return wrapper.queryByText('Lock Gate');
}
let CloseGate = () =>{
    return wrapper.queryByText('Close Gate');
}
let Closed = () =>{
    return wrapper.queryByText('Closed');
}
let Locked = () =>{
    return wrapper.queryByText('Locked');
}
let OpenGate = () =>{
    return wrapper.queryByText('Open Gate');
}
let UnlockGate = () =>{
    return wrapper.queryByText('Unlock Gate');
}
beforeEach(() => {
  // we want the "wrapper" recreated at every test
  wrapper = rtl.render(<Dashboard />)
});

it('renders without crashing', () => {
  wrapper.debug();
});

//make a trivial test

describe("Dashboard component renders", () => {

    it ("renders without crashing", ()=>{
        wrapper.debug();
        expect(wrapper.container).toMatchSnapshot();
    });
    
    it ("renders an unlocked test node", ()=>{
        expect (unlocked()).toBeInTheDocument();
        expect (unlocked()).toBeInTheDocument();
    })
    
    it ("renders open in test node", ()=>{
        expect (Open()).toBeInTheDocument();
        expect (Open()).toBeVisible();
    })
    it ("renders open in test node", ()=>{
        expect (LockGate()).toBeInTheDocument();
        expect (LockGate()).toBeVisible();
        expect(LockGate()).toBeDisabled();
    })
    it ("renders open in test node", ()=>{
        expect (CloseGate()).toBeInTheDocument();
        expect (CloseGate()).toBeVisible();
    })
})