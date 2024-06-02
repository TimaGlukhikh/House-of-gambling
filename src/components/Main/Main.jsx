import React from 'react'
import styles from './styles.module.scss'
import { useViewport } from '../../hook/useViewport'
import articles from '../../blog/articles'
import iconGroup from '../../assets/Image/Line_Vertical_1.png'
import iconGroup2 from '../../assets/Image/Line_Vertical_2.png'
import iconGroup3 from '../../assets/Image/Banner BG.png'
import iconGroupMob from '../../assets/Image/Line_1Mob.png'
import iconGroup2Mob from '../../assets/Image/Line_2Mob.png'
import iconGroup3Mob from '../../assets/Image/Line_3Mob.png'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
function Main() {
  const { isDesktop } = useViewport()
  return (
    <>
      <Header />
      <div className={styles.containerFullcontent}>
        {isDesktop && (
          <section className={styles.fullcontent}>
            <div className={styles.content}>
              <div className={styles.description}>
                <h1 className={styles.headerDescr}>
                  <span className={styles.part1}>HOUSE OF </span>
                  <span className={styles.part2}>GAMBLING</span>
                </h1>
                <p className={styles.text}>
                  Raise your ROI with direct advertiser
                </p>
                <button className={styles.buttonDescr}>BECOME A PARTNER</button>
              </div>
            </div>
            <div className={styles.iconBlock}>
              <div className={styles.iconAnimationDown}>
                <img
                  src={iconGroup}
                  alt="iconGroup"
                  className={styles.iconGroup}
                />
                <img
                  src={iconGroup}
                  alt="iconGroup"
                  className={styles.iconGroup}
                />
                <img
                  src={iconGroup}
                  alt="iconGroup"
                  className={styles.iconGroup}
                />
              </div>
              <div className={styles.iconAnimationUp}>
                <img
                  src={iconGroup2}
                  alt="iconGroup"
                  className={styles.iconGroup2}
                />
                <img
                  src={iconGroup2}
                  alt="iconGroup"
                  className={styles.iconGroup2}
                />
                <img
                  src={iconGroup2}
                  alt="iconGroup"
                  className={styles.iconGroup2}
                />
              </div>
              <div className={styles.iconAnimationDown}>
                <img
                  src={iconGroup3}
                  alt="iconGroup"
                  className={styles.iconGroup}
                />
                <img
                  src={iconGroup3}
                  alt="iconGroup"
                  className={styles.iconGroup}
                />
                <img
                  src={iconGroup3}
                  alt="iconGroup"
                  className={styles.iconGroup}
                />
              </div>
            </div>

            <div className={styles.blog}>
              <h2 className={styles.headerBlog}>BLOG</h2>
              <div className={styles.containerBlog}>
                <div className={styles.articleBlock}>
                  {articles.map((article, index) => (
                    <a
                      key={index}
                      href={article.link}
                      className={styles.blogArticleLink}
                    >
                      <article className={styles.blogArticle}>
                        <h3 className={styles.headerArticle}>
                          {article.title}
                        </h3>
                        <p className={styles.articleDate}>{article.date}</p>
                      </article>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        {!isDesktop && (
          <section className={styles.fullcontentMob}>
            <div className={styles.contentMob}>
              <div className={styles.descriptionMob}>
                <h1 className={styles.headerDescrMob}>
                  <span className={styles.part1Mob}>HOUSE OF </span>
                  <span className={styles.part2Mob}>GAMBLING</span>
                </h1>
                <p className={styles.textMob}>
                  Raise your ROI with direct advertiser
                </p>
                <button className={styles.buttonDescrMob}>
                  BECOME A PARTNER
                </button>
              </div>
            </div>
            <div className={styles.iconBlockMob}>
              <div className={styles.iconAnimationLeft}>
                <img
                  src={iconGroupMob}
                  alt="iconGroup"
                  className={styles.iconGroupMob}
                />
                <img
                  src={iconGroupMob}
                  alt="iconGroup"
                  className={styles.iconGroupMob}
                />
                <img
                  src={iconGroupMob}
                  alt="iconGroup"
                  className={styles.iconGroupMob}
                />
              </div>
              <div className={styles.iconAnimationRight}>
                <img
                  src={iconGroup2Mob}
                  alt="iconGroup"
                  className={styles.iconGroup2Mob}
                />
                <img
                  src={iconGroup2Mob}
                  alt="iconGroup"
                  className={styles.iconGroup2Mob}
                />
                <img
                  src={iconGroup2Mob}
                  alt="iconGroup"
                  className={styles.iconGroup2Mob}
                />
              </div>
              <div className={styles.iconAnimationLeft}>
                <img
                  src={iconGroup3Mob}
                  alt="iconGroup"
                  className={styles.iconGroupMob}
                />
                <img
                  src={iconGroup3Mob}
                  alt="iconGroup"
                  className={styles.iconGroupMob}
                />
                <img
                  src={iconGroup3Mob}
                  alt="iconGroup"
                  className={styles.iconGroupMob}
                />
              </div>
            </div>

            <div className={styles.blog}>
              <h2 className={styles.headerBlog}>BLOG</h2>
              <div className={styles.containerBlog}>
                <div className={styles.articleBlock}>
                  {articles.map((article, index) => (
                    <a
                      key={index}
                      href={article.link}
                      className={styles.blogArticleLink}
                    >
                      <article className={styles.blogArticle}>
                        <h3 className={styles.headerArticle}>
                          {article.title}
                        </h3>
                        <p className={styles.articleDate}>{article.date}</p>
                      </article>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </>
  )
}

export default Main
