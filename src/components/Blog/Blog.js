import styles from './Blog.module.css';
import imgJpg1x from '../../assets/images/blog/blog.jpg';

function Blog() {
  return (
    <>
      <section className={styles.blog} id={'blog'}>
        <div className={styles.blogContainer}>
          <div className={styles.blogItem}>
            <picture>
                {/* <source srcSet={`${imgWebp1x} 1x, ${imgWebp2x} 2x`} />
                <source srcSet={`${imgJpg1x} 1x, ${imgJpg2x} 2x`} /> */}
                <img className={styles.blogImg} src={imgJpg1x} alt="blog" />
            </picture>
          </div>
          <div className={styles.blogItem}>
            <div className={styles.blogDescription}>
                <p className={styles.blogSubtitle}>April 16 2020</p>
                <h2 className={styles.blogTitle}>Blog Post One</h2>
                <p className={styles.blogText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam
                aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?
                </p>
                <button type="button" className={styles.blogBtn}>Read Our Blog</button>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}

export default Blog;