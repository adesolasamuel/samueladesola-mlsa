import React from "react";

const BlogCard = ({ title, excerpt, date, readTime, mediumUrl, tags, coverImage }) => {
  return (
    <div className="blog-card" style={{
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "1rem",
      marginBottom: "0",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      border: "1px solid #e5e7eb"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    }}>
      
      {coverImage && (
        <div style={{ marginBottom: "1rem" }}>
          <img 
            src={coverImage} 
            alt={title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        </div>
      )}

      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{
          fontSize: "1rem",
          fontWeight: "600",
          color: "#1f2937",
          marginBottom: "0.5rem",
          lineHeight: "1.3",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>
          {title}
        </h3>
        
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.75rem",
          color: "#6b7280",
          marginBottom: "1rem"
        }}>
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </div>

      <p style={{
        color: "#4b5563",
        lineHeight: "1.5",
        marginBottom: "1rem",
        fontSize: "0.85rem",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      }}>
        {excerpt}
      </p>

      {tags && tags.length > 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                backgroundColor: "#f3f4f6",
                color: "#374151",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                marginRight: "0.5rem",
                marginBottom: "0.5rem"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <a
          href={mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5rem 1rem",
            backgroundColor: "#4E567E",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontSize: "0.875rem",
            fontWeight: "500",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#3d4660";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#4E567E";
            e.currentTarget.style.transform = "translateY(0)";
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
    </div>
  );
};

export default BlogCard;
