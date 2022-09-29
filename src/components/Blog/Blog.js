import styles from './Blog.module.css';
import blogWebp1x from '../../assets/images/blog/blog.webp';
import blogWebp2x from '../../assets/images/blog/blog@2x.webp';
import blogJpg1x from '../../assets/images/blog/blog.jpg';
import blogJpg2x from '../../assets/images/blog/blog@2x.jpg';

function Blog() {
  return (
    <>
      <section className={styles.blog} id={'blog'}>
        <div className={styles.blogContainer}>
          <div className={styles.blogItem}>
            <picture>
                <source srcSet={`${blogWebp1x} 1x, ${blogWebp2x} 2x`} />
                <source srcSet={`${blogJpg1x} 1x, ${blogJpg2x} 2x`} />
                <img className={styles.blogImg} src={blogJpg1x} alt='blog' />
            </picture>
          </div>
          <div className={styles.blogItem}>
            <div className={styles.blogDescription}>
                <p className={styles.blogSubtitle}>April 16 2020</p>
                <h2 className={styles.blogTitle}>Blog Post One</h2>
                <p className={styles.blogText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam
                aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?
                </p>
                <button type='button' className={styles.blogBtn}>Read Our Blog</button>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}

export default Blog;