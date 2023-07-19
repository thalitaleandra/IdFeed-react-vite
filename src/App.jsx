import { Header } from "./componentes/Header";
import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./componentes/Sidebar";
import { Post } from "./componentes/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/thalitaleandra.png',
      name: 'Thalita Leandra',
      role: 'Eng Software'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-15-07 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-14-07 20:00:00'),
  },
];
function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar/>
      <main>
      {posts.map(post => {
          return ( 
          <Post 
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
           />
           )
        })}
      </main>
      </div>
    </div>
  )
}

export default App
