import {Header} from './Header';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

describe('Header component tests', () => { 
    test('renders Header component', () => {
        render(<Header />, { wrapper: MemoryRouter });
        screen.getByText(/Podcaster/i);
    });
    test('renders Header component with loading', () => {
        render(<Header />, { wrapper: MemoryRouter });
        
        screen.debug();
    });
});