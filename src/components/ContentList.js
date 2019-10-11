import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ContentList = () => (
  <div>
    <StaticQuery
      query={graphql`
        query PostQuery {
          posts: allContentfulPost {
            edges {
              node {
                id
                headline
                image {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        // console.log(data)
        return (
          <ul className="posts">
            {data.posts.edges.map(post => (
              <li className="post" key={post.node.id}>
                <div className="post-image-wrapper">
                  <img
                    src={post.node.image.file.url}
                    alt={post.node.headline}
                  />
                </div>
                <div className="post-text-wrapper">
                  <p className="title">{post.node.headline}</p>
                </div>
              </li>
            ))}
          </ul>
        )
      }}
    />
  </div>
)

export default ContentList
