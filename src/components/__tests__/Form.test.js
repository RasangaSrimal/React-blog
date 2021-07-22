import { render, screen, cleanup} from '@testing-library/react';
import Form from '../Form';

afterEach(() => {
    cleanup();
});

test('should render Form component', () => {
    const article = {
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        id: 2,
        title: "qui est esse",
        userId: 1
      }
    render(<Form article={article}/>);
    const FormElement = screen.getByTestId('form')
    expect(FormElement).toBeInTheDocument()
    expect(FormElement).toHaveTextContent('est rerum tempore')
});