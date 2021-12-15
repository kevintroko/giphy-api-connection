import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../components/GifGridItem';

describe('Fist app', () => {
        const title = 'A title';
        const url = 'https://localhost/something.jpg';
    
        let wrapper;
    
        beforeEach(() => {    
            wrapper = shallow(<GifGridItem title={title} url={url}/>); 
        });
        
        test('should match snapshot', () => {  
            expect(wrapper).toMatchSnapshot();
        });    
});