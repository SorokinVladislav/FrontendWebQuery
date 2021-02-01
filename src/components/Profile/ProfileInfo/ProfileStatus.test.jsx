import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer"


describe("ProfileStatus component", () => {
    test("Status from props shoul be in the state", () => {
        const component = create (<ProfileStatus status="Vladka"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Vladka");
    });


    test("After creation span should be displayed", () => {
        const component = create (<ProfileStatus status="Vladka"/>);
        const root = component.root;
        expect( () => {
            let input = root.findByType("input");
        }).toThrow();
    });


    test("After creation span should contains correct status", () => {
        const component = create (<ProfileStatus status="Vladka"/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("Vladka");
    });

    test("Input should be displayed in editMode instead of span", () => {
        const component = create (<ProfileStatus status="Vladka"/>);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe("Vladka");
    });

    test("Call back sjould be called", () => {
        const mockCallBack = jest.fn();
        const component = create (<ProfileStatus status="Vladka" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1);
    });
})