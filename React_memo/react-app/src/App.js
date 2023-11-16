// CRUD
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props){
  return <header>
    <h1><a href="/" onClick={event => {
      // 새로고침이 되지 않게 하는
      event.preventDefault(); // 기본 동작을 막는 코드
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={"/read/" + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
    // 자동으로 생성한 태그에선 리액트가 추적하기 위해 key가 있어야함
    // 반복문 안에서 prop의 key는 고유값을 가져야하므로 key입력
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Create(props){
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder='title'/></p>
      <p><textarea name="body" placeholder='body'></textarea></p>
      <p><input type="submit" value='Create'/></p>
    </form>
  </article>
}
function Update(props){
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
  return <article>
    <h2>Update</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type="text" name="title" placeholder='title' value={title} onChange={event=>{
        setTitle(event.target.value);
      }}/></p>
      <p><textarea name="body" placeholder='body' value={body}  onChange={event=>{
        setBody(event.target.value);
      }}></textarea></p>
      <p><input type="submit" value='Update'/></p>
    </form>
  </article>
}
function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1]; ↓
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id: 1, title:'html', body: 'html is ...'},
    {id: 2, title:'css', body: 'css is ...'},
    {id: 3, title:'javascript', body: 'javascript is ...'},
  ]);  
  
  let content = null;
  let contextControl = null;

  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <><li>
      <a href={'/update' + id} onClick={event=>{
          event.preventDefault();
          setMode('UPDATE');
        }}>Update</a></li>
      <li><input type='button' value='delete' onClick={() =>{
        const newTopics = [];
        for(let i=0; i<topics.length; i++) {
          if(topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME');
        setId(nextId);
        setNextId(nextId + 1);
      }} /></li>
      </>
  } else if (mode === 'CREATE'){
    content = <Create onCreate={(_title, _body) => {
      const newTopic = {id:nextId, title:_title, body:_body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  } else if (mode === 'UPDATE'){    
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(_title, _body) => {
      const newTopics = [...topics];
      const updateTopic = {id:id, title:_title, body:_body};
      
      
    for(let i=0; i<newTopics.length; i++) {
      if(newTopics[i].id === id) {
        newTopics[i] = updateTopic;
        break;
      }
    }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={_id =>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
      <ul>
        <li><a href='/create' onClick={event=>{
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
