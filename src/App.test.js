import { render, screen } from '@testing-library/react';
import App from './App';
import WebQuery from "./App";
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
const div = document.createElement('div');
ReactDOM.render(<WebQuery/>, div);
ReactDOM.unmountComponentAtNode(div);
});
