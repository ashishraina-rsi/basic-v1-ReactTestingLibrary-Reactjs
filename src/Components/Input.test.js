import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Input from './Input';

describe('Input Element Test Suite', () => {

    it("Is searchBar Present in DOM", () => {
        const { getByTestId } = render(<Input showDiv={true}/>);
        const input = getByTestId('searchBar');
        expect(input).toBeTruthy();
    });

    test("Is h1 ( displaySearch ) Present in DOM", () => {
        const { getByTestId } = render(<Input showDiv={true}/>);
        const input = getByTestId('displaySearch');
        expect(input).toBeTruthy();
    });

    test("Is h1 ( divWeWantToShow ) not Present in DOM", () => {
        const { getByTestId } = render(<Input showDiv={true}/>);
        const input = getByTestId('divWeWantToShow');
        expect(input).toBeTruthy();
    });

    test("Is h1 ( divWeWantToShow ) Present in DOM", () => {
        const { queryByTestId } = render(<Input showDiv={false}/>);
        const input = queryByTestId('divWeWantToShow');
        expect(input).toBeFalsy();
    });

    test("is Heading showing same text as Input box", async() => {
        await act(async () => {
            const { getByTestId } = render(<Input showDiv={true}/>);
            const input = getByTestId('searchBar');
            const header = getByTestId('displaySearch');
            const inputWord = "Bogdan";
            await fireEvent.change(input,{target : {value : inputWord}} );
            expect(header.innerHTML).toBe(inputWord);
        })
    })
})