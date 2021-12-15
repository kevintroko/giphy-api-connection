import React from 'react';
import { shallow } from "enzyme";
import AddCategory from '../components/AddCategory';

describe('Fist app', () => {
        let wrapper;
    
        beforeEach(() => {    
            wrapper = shallow(<AddCategory setCategories={() => {}}/>); 
        });
        
        test('should match snapshot', () => {  
            expect(wrapper).toMatchSnapshot();
        });    
});