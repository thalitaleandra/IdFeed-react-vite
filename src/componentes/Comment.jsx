import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({ content,  OndeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);
    function handleLikeComment (){
      setLikeCount(likeCount + 1);
    };
    function handleDeleteComment (){
        OndeleteComment(content);
     };
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={true} src="https://github.com/diego3g.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thalita Leandra</strong>
              <time title="14 de Abril às 08:13h" dateTime="2023-07-14 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}