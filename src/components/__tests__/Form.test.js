import { render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Form from '../Form';

afterEach(() => {
    cleanup();
});

test('should render update article form', () => {
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

test('should render add article form', () => {
    const article = {
        body: "new article",
        title: "new title",
        userId: 1
      }
    render(<Form article={article}/>);
    const FormElement = screen.getByTestId('form')
    expect(FormElement).toBeInTheDocument()
    expect(FormElement).toHaveTextContent('Add Article')
    expect(FormElement).not.toHaveTextContent('Update Article')
});

test('matches snapshot for update article form', () => {
    const article = {
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        id: 2,
        title: "qui est esse",
        userId: 1
      };
    const tree = renderer.create(<Form article={article}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('matches snapshot for add article form', () => {
    const article = {
        body: "new article",
        title: "new title",
        userId: 1
      }
    const tree = renderer.create(<Form article={article}/>).toJSON();
    expect(tree).toMatchSnapshot();
});