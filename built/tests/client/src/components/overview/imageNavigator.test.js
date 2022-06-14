"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
const ImageNavigator_jsx_1 = __importDefault(require("../../../../../client/src/components/overview/ImageNavigator.jsx"));
describe('<ImageNavigator /> with thumbnails', () => {
    const thumbnails = [
        {
            id: 0,
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 6,
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 7,
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
        },
        {
            id: 8,
            url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
        },
    ];
    it('renders without crashing given the required props', () => {
        const props = {
            thumbnails: thumbnails,
            useIcons: false,
            length: thumbnails.length,
            selectedId: 2
        };
        const wrapper = (0, enzyme_1.shallow)(<ImageNavigator_jsx_1.default {...props}/>);
        expect((0, enzyme_to_json_1.default)(wrapper)).toMatchSnapshot();
    });
    it('should have expected default thumbnail properties:', function () {
        const props = {
            thumbnails: thumbnails,
            useIcons: false,
            length: thumbnails.length,
            selectedId: 2
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-item')).toHaveLength(8);
        expect(wrapper.find('.image-navigator-thumbnail')).toHaveLength(7);
        expect(wrapper.find('.image-navigator-thumbnail-selected')).toHaveLength(1);
        expect(wrapper.find('.image-navigator-thumbnail-selected').parent().props()['data-image-id']).toEqual(props.selectedId);
        expect(wrapper.find('.image-navigator-icon')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-icon.selected')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-placeholder')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(1);
    });
    it('should execute a callback:', function () {
        const mockCallBack = jest.fn();
        const props = {
            thumbnails: thumbnails,
            useIcons: false,
            length: thumbnails.length,
            selectedId: 2,
            onClick: mockCallBack
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        wrapper.find('.image-navigator-thumbnail').first().simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    it('should have not have any navigators if not overflowed', function () {
        const props = {
            thumbnails: thumbnails,
            useIcons: false,
            length: thumbnails.length,
            selectedId: 2,
            maxItems: 20
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(0);
    });
    it('should have increment arrow if overflowed', function () {
        const props = {
            thumbnails: thumbnails,
            useIcons: false,
            length: thumbnails.length,
            selectedId: 2,
            maxItems: 7
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(1);
    });
});
describe('<ImageNavigator /> with image-navigator-icons', () => {
    it('renders without crashing given the required props', () => {
        const props = {
            useIcons: true,
            length: 9,
            selectedId: 2
        };
        const wrapper = (0, enzyme_1.shallow)(<ImageNavigator_jsx_1.default {...props}/>);
        expect((0, enzyme_to_json_1.default)(wrapper)).toMatchSnapshot();
    });
    it('should have expected default image-navigator-icon properties:', function () {
        const props = {
            useIcons: true,
            length: 9,
            selectedId: 2
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-item')).toHaveLength(8);
        expect(wrapper.find('.image-navigator-thumbnail')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-thumbnail-selected')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-icon')).toHaveLength(7);
        expect(wrapper.find('.image-navigator-icon.selected')).toHaveLength(1);
        expect(wrapper.find('.image-navigator-icon.selected').parent().props()['data-image-id']).toEqual(2);
        expect(wrapper.find('.image-navigator-placeholder')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(1);
    });
    it('should execute a callback:', function () {
        const mockCallBack = jest.fn();
        const props = {
            useIcons: true,
            length: 9,
            selectedId: 2,
            onClick: mockCallBack
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        wrapper.find('.image-navigator-icon').first().simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    it('should have not have any navigators if not overflowed', function () {
        const props = {
            useIcons: true,
            selectedId: 2,
            length: 9,
            maxItems: 20
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(0);
    });
    it('should have increment arrow if overflowed', function () {
        const props = {
            useIcons: true,
            selectedId: 2,
            length: 9,
            maxItems: 7
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(1);
    });
    it('should increment if overflowed and increment arrow clicked', function () {
        const props = {
            useIcons: true,
            selectedId: 2,
            length: 7,
            maxItems: 4
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-icon')).toHaveLength(props.maxItems);
        expect(wrapper.find('.image-navigator-icon').first().parent().props()['data-image-id']).toEqual(0);
        expect(wrapper.find('.image-navigator-icon').last().parent().props()['data-image-id']).toEqual(3);
        wrapper.find('.image-navigator-increment').simulate('click');
        expect(wrapper.find('.image-navigator-icon').first().parent().props()['data-image-id']).toEqual(4);
        expect(wrapper.find('.image-navigator-icon').last().parent().props()['data-image-id']).toEqual(6);
    });
    it('should have decrement arrow if overflowed and increment arrow clicked', function () {
        const props = {
            useIcons: true,
            selectedId: 2,
            length: 7,
            maxItems: 4
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(1);
        expect(wrapper.find('.image-navigator-icon')).toHaveLength(props.maxItems);
        expect(wrapper.find('.image-navigator-icon').first().parent().props()['data-image-id']).toEqual(0);
        expect(wrapper.find('.image-navigator-icon').last().parent().props()['data-image-id']).toEqual(3);
        wrapper.find('.image-navigator-increment').simulate('click');
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(1);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-icon').first().parent().props()['data-image-id']).toEqual(4);
        expect(wrapper.find('.image-navigator-icon').last().parent().props()['data-image-id']).toEqual(6);
    });
    it('should have increment & decrement arrows if overflowed and increment arrow clicked and overflowed above and below displayed items', function () {
        const props = {
            useIcons: true,
            selectedId: 2,
            length: 9,
            maxItems: 4
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(1);
        expect(wrapper.find('.image-navigator-icon')).toHaveLength(props.maxItems);
        expect(wrapper.find('.image-navigator-icon').first().parent().props()['data-image-id']).toEqual(0);
        expect(wrapper.find('.image-navigator-icon').last().parent().props()['data-image-id']).toEqual(3);
        wrapper.find('.image-navigator-increment').simulate('click');
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(1);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(1);
        expect(wrapper.find('.image-navigator-icon').first().parent().props()['data-image-id']).toEqual(4);
        expect(wrapper.find('.image-navigator-icon').last().parent().props()['data-image-id']).toEqual(7);
    });
    it('should decrement if overflowed and decrement arrow clicked', function () {
        const props = {
            useIcons: true,
            selectedId: 2,
            length: 7,
            maxItems: 4
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(1);
        expect(wrapper.find('.image-navigator-icon')).toHaveLength(props.maxItems);
        expect(wrapper.find('.image-navigator-icon').first().parent().props()['data-image-id']).toEqual(0);
        expect(wrapper.find('.image-navigator-icon').last().parent().props()['data-image-id']).toEqual(3);
        wrapper.find('.image-navigator-increment').simulate('click');
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(1);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-icon').first().parent().props()['data-image-id']).toEqual(4);
        expect(wrapper.find('.image-navigator-icon').last().parent().props()['data-image-id']).toEqual(6);
        wrapper.find('.image-navigator-decrement').simulate('click');
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(1);
        expect(wrapper.find('.image-navigator-icon').first().parent().props()['data-image-id']).toEqual(0);
        expect(wrapper.find('.image-navigator-icon').last().parent().props()['data-image-id']).toEqual(3);
    });
    it('should select image-navigator-icon clicked', function () {
        const mockCallBack = jest.fn();
        const props = {
            useIcons: true,
            length: 9,
            selectedId: 2,
            onClick: mockCallBack
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-icon.selected')).toHaveLength(1);
        expect(wrapper.find('.image-navigator-icon.selected').parent().props()['data-image-id']).toEqual(2);
        wrapper.find('.image-navigator-icon').at(3).simulate('click');
        expect(mockCallBack.mock.calls[0][0]).toBe(3);
    });
});
describe('<ImageNavigator /> with placeholders', () => {
    it('renders without crashing given the required props', () => {
        const props = {
            thumbnails: [],
            useIcons: false,
            length: 4,
            selectedId: 2
        };
        const wrapper = (0, enzyme_1.shallow)(<ImageNavigator_jsx_1.default {...props}/>);
        expect((0, enzyme_to_json_1.default)(wrapper)).toMatchSnapshot();
    });
    it('should have expected default placeholder properties:', function () {
        const props = {
            thumbnails: [],
            useIcons: false,
            length: 4,
            selectedId: 2
        };
        const wrapper = (0, enzyme_1.shallow)(<ImageNavigator_jsx_1.default {...props}/>);
        expect(wrapper.find('.image-navigator-item')).toHaveLength(4);
        expect(wrapper.find('.image-navigator-item img')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-thumbnail')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-thumbnail-selected')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-item svg')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-icon')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-icon.selected')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-placeholder')).toHaveLength(4);
        expect(wrapper.find('.image-navigator-decrement')).toHaveLength(0);
        expect(wrapper.find('.image-navigator-increment')).toHaveLength(0);
    });
    it('should not execute a callback:', function () {
        const mockCallBack = jest.fn();
        const props = {
            thumbnails: [],
            useIcons: false,
            length: 4,
            selectedId: 2,
            onClick: mockCallBack
        };
        const wrapper = (0, enzyme_1.mount)(<ImageNavigator_jsx_1.default {...props}/>);
        wrapper.find('.image-navigator-placeholder').first().simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(0);
    });
});
