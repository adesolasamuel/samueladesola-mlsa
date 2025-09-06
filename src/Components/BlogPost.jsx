import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import Footer from "./Footer";

const siteProps = {
  name: "Samuel Adesola",
  title: "Embedded Systems and Internet of Things Engineer",
  email: "samuel.adesola@studentambassadors.com",
  gitHub: "adesolasamuel",
  instagram: "adesola8011",
  linkedIn: "samuel-adesola/",
  medium: "samueladesola",
  twitter: "AdesolaSamuel18",
  youTube: "@RolesAcademy",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div style={{ paddingTop: "6rem", minHeight: "100vh", textAlign: "center", padding: "2rem" }}>
        <h2>Blog post not found</h2>
        <Link to="/blog" style={{ color: primaryColor }}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div id="main">
      <div className="content">
        <article style={{
          paddingTop: "6rem",
          padding: "6rem 2rem 2rem",
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "1.7"
        }}>
          {/* Back button */}
          <Link 
            to="/blog" 
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: primaryColor,
              textDecoration: "none",
              marginBottom: "2rem",
              fontSize: "1rem",
              transition: "color 0.3s ease"
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#3d4660"}
            onMouseLeave={(e) => e.currentTarget.style.color = primaryColor}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              style={{ marginRight: "0.5rem" }}
            >
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Blog
          </Link>

          {/* Cover image */}
          {post.coverImage && (
            <div style={{ marginBottom: "2rem" }}>
              <img 
                src={post.coverImage}
                alt={post.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "12px"
                }}
              />
            </div>
          )}

          {/* Article header */}
          <header style={{ marginBottom: "2rem" }}>
            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#1f2937",
              marginBottom: "1rem",
              lineHeight: "1.2"
            }}>
              {post.title}
            </h1>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              fontSize: "1rem",
              color: "#6b7280",
              marginBottom: "1rem"
            }}>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div style={{ marginBottom: "1.5rem" }}>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      display: "inline-block",
                      backgroundColor: "#f3f4f6",
                      color: "#374151",
                      padding: "0.5rem 1rem",
                      borderRadius: "9999px",
                      fontSize: "0.875rem",
                      marginRight: "0.75rem",
                      marginBottom: "0.5rem"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article content */}
          <div 
            className="blog-content"
            style={{
              fontSize: "1.125rem",
              color: "#374151",
              lineHeight: "1.8"
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Medium link */}
          {post.mediumUrl && (
            <div style={{
              marginTop: "3rem",
              padding: "1.5rem",
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              <p style={{ marginBottom: "1rem", color: "#6b7280" }}>
                This article was originally published on Medium
              </p>
              <a
                href={post.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: primaryColor,
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#3d4660";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = primaryColor;
                }}
              >
                Read on Medium
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  style={{ marginLeft: "0.5rem" }}
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          )}
        </article>
      </div>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default BlogPost;
