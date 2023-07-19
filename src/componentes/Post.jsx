import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({  author, content,  publishedAt }) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);
  const [newCommentText, setNewCommentText] = useState('');
  function handleCrateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }
  function deleteComment(commentToDelete){
        const commentWithoutDeleteOne = comments.filter(comment => {
          return comment != commentToDelete;
        })
        setComments(commentWithoutDeleteOne);
  }
  function handleNewCommentInvalid (){
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }
  const isNewCommentEmpy = newCommentText.length === 0;
  // const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
  //   locale: ptBR,
  // });
  // const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  //   locale: ptBR,
  //   addSuffix: true
  // });
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        {/* <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time> */}
       
      </header>

      <div className={styles.content}>
      {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>
      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpy}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
      {comments.map(comment => {
          return (
          <Comment 
          key={comment} 
          content={comment} 
          OndeleteComment={deleteComment}
          />
          )
        })}
      </div>
    </article>
  )
}