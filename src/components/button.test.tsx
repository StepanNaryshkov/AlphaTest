import Button, {Props} from "./button";
import {render, screen, fireEvent} from "@testing-library/react";

const buildComponent = (props: Props) => {
  return render(<Button {...props}/>);
};

describe('Button component', () => {
  test('should render Button', () => {
    const props = {
      text: 'Example',
      handleClick: () => {}
    }

    buildComponent(props);
    expect(screen.getByText('Example')).toBeTruthy();
  });

  test('should call handleClick after clicking', () => {
    const handleClick = jest.fn();
    const props = {
      text: 'Example',
      handleClick
    }

    const {getByTestId} = buildComponent(props);
    fireEvent.click(getByTestId('btn'));
    expect(handleClick).toBeCalled();
  });
})
