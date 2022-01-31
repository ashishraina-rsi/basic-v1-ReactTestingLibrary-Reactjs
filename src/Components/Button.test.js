import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Button from './Button';

describe('Button Element Test Suite', () => {

    it("Is Button Present in DOM", () => {
        const { getByTestId } = render(<Button />);
        const button = getByTestId('button');
        expect(button).toBeTruthy();
    });

    test("Is Button Present in DOM", () => {
        const { getAllByTestId } = render(<Button />);
        const buttonList = getAllByTestId('button');
        expect(buttonList).toHaveLength(1);
    });

    test("Is 2nd Button Present in DOM", async () => {
        await act(async () => {
            const { getAllByTestId } = render(<Button />);
            const buttonList = getAllByTestId('button');
            await fireEvent.click(buttonList[0])
            expect(getAllByTestId('button')).toHaveLength(2);
        })
        
    });
})