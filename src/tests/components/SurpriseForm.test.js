
import { SurpriseForm } from '../../components/index'
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

describe('SurpriseForm', () => {
    test('axios is mocked', () => {
        axios.post.mockResolvedValue({});
        expect(jest.isMockFunction(axios.post)).toBe(true);
    });
    test('submits the form', async () => {
        const mockResponse = {
            data: {
                content: 'Test content'
            },
        };

        axios.post.mockResolvedValueOnce(mockResponse);

        render(<SurpriseForm />);

        const emailInput = screen.getByLabelText(/email/i);
        const nameInput = screen.getByLabelText(/name/i);
        const relativeInput = screen.getByLabelText(/relative/i);
        const themeSelect = screen.getByLabelText(/theme/i);
        const sendButton = screen.getByText(/send/i);

        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        fireEvent.change(nameInput, { target: { value: 'Test Name' } });
        fireEvent.change(relativeInput, { target: { value: 'Test Relative' } });
        fireEvent.change(themeSelect, { target: { value: 'new year' } });
        fireEvent.click(sendButton);

        expect(axios.post).toHaveBeenCalledTimes(2);
        expect(axios.post).toHaveBeenCalledWith(
            'http://localhost:5001/api/surprise/',
            {
                email: 'test@test.com',
                name: 'Test Name',
                theme: 'new year',
                relative: 'friend',
            },
        );

        await screen.findByText(/successfully sent the following message/i);
        expect(screen.getByText(/test content/i)).toBeInTheDocument();
    });


});
