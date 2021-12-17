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
        
        test('should have a p with the title', () => {  
            const p = wrapper.find('p');
            expect(p.text()).toBe(title);
        }); 
        
        test('should have and image equal to the url and alt of props', () => {  
            const img = wrapper.find('img');
            expect(img.props().src).toBe(url);
            expect(img.prop('alt')).toBe(title);
        });
        
        test('should class name', () => {  
            const div = wrapper.find('div');
            const className = div.prop('className');
            expect(className.includes('animate__fadeIn')).toBe(true);
            
        });
});