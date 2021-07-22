import './App.css';
import {useEffect, useState} from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';
import TopBar from './components/TopBar';


function App() {

  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((response) => setArticles(response))
    .catch(error => console.log(error))
  }, [])

  const editBtn = (article) => {
    setEditArticle(article)
  }

  const updatedInformation = (article) => {
    const new_article = articles.map(myarticle => {
      if(myarticle.id === article.id) {
        return article;
      }
      else {
        return myarticle;
      }
    })
    setArticles(new_article)
  }

  const articleForm = () => {
    setEditArticle({title:'', body:''})
  }

  const addedInformation = (article) => {
    const new_articles = [article, ...articles]
    setArticles(new_articles)
  }

  const deleteBtn = (article) => {
    const new_articles = articles.filter(myarticle => {
      if(myarticle.id === article.id) {
        return false
      }
      return true
    })
    setArticles(new_articles)
  }

  return (
    <div className="App">
      <TopBar/>
      <div className = "body">
        <div className = "col">
            <button onClick = {articleForm} className = "btn btn-primary">Add article</button> 
        </div>
        <hr/>
        {editArticle ? <Form 
          article = {editArticle} 
          updatedInformation = {updatedInformation}
          addedInformation = {addedInformation}
        /> : null}
        <ArticleList articles = {articles} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
        
      </div> 
    </div>
  );
}

export default App;
