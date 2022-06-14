"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_1 = require("enzyme");
const RatingsAndReviews_jsx_1 = __importDefault(require("../../../../../client/src/components/ratingsReviews/RatingsAndReviews.jsx"));
describe('<RatingsAndReviews />', () => {
    test('should render correctly in debug mode', () => {
        const wrapper = (0, enzyme_1.shallow)(<RatingsAndReviews_jsx_1.default debug/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should contain loading element if data not provided:', function () {
        const wrapper = (0, enzyme_1.mount)(<RatingsAndReviews_jsx_1.default />);
        expect(wrapper.find('div')).toHaveLength(11);
    });
});