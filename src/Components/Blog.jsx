import React from "react";
import Footer from "./Footer"; // Import Footer component
import BlogCard from "./BlogCard"; // Import BlogCard component
import { blogPosts } from "../data/blogData"; // Import blog data

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

const Blog = () => {
  return (
    <div id="main">
      <div className="content">
        <section className="light" id="blog" style={{ 
          paddingTop: "6rem", 
          padding: "6rem 2rem 2rem", 
          minHeight: "calc(100vh - 6rem)",
          backgroundColor: "#f8fafc"
        }}>
          <div style={{ maxWidth: "900px", width: "100%", margin: "0 auto" }}>
            {/* Header Section */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ 
                fontSize: "2.5rem", 
                marginBottom: "1rem", 
                color: primaryColor,
                fontWeight: "700"
              }}>
                Blog
              </h2>
              <p style={{ 
                fontSize: "1.2rem", 
                lineHeight: "1.6", 
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
                Insights and thoughts on embedded systems, IoT development, and the future of connected technology.
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div style={{
              display: "grid",
              gap: "2rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))"
            }}>
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  mediumUrl={post.mediumUrl}
                  tags={post.tags}
                  coverImage={post.coverImage}
                />
              ))}
            </div>

            {/* Call to Action */}
            <div style={{ 
              textAlign: "center", 
              marginTop: "3rem",
              padding: "2rem",
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}>
              <h3 style={{ 
                color: primaryColor, 
                marginBottom: "1rem",
                fontSize: "1.5rem"
              }}>
                Want to read more?
              </h3>
              <p style={{ 
                color: "#6b7280", 
                marginBottom: "1.5rem",
                fontSize: "1rem"
              }}>
                Follow me on Medium for more articles on embedded systems and IoT development.
              </p>
              <a
                href={`https://medium.com/@${siteProps.medium}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.75rem 2rem",
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
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = primaryColor;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Follow on Medium
                <svg 
                  width="20" 
                  height="20" 
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
          </div>
        </section>
      </div>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default Blog;
