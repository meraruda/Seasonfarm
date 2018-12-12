import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import $ from 'jquery';

Enzyme.configure({ adapter: new Adapter() });
global.$ = global.jQuery = $;

require('jest-localstorage-mock');
require('jest-canvas-mock');
