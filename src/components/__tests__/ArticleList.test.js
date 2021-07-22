import { render, screen, cleanup} from '@testing-library/react';
import ArticleList from '../ArticleList';

afterEach(() => {
    cleanup();
});

test('should render ArticleList component', () => {
    const article = {
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        id: 2,
        title: "qui est esse",
        userId: 1
      }
    render(<ArticleList article={article}/>);
    const ArticleListElement = screen.getByTestId('article')
    expect(ArticleListElement).toBeInTheDocument()
});