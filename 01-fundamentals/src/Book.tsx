interface BookProps {
  img: string;
  title: string;
  author: string;
}


const Book = ({img, title, author}: BookProps) => {

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>
    </article>
  );
};

export default Book;
