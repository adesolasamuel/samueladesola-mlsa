/**
 * Publications component
 *
 * Academic publications and scholarly contributions.
 * Formatted in an academic citation style suitable for
 * a PhD-ready research portfolio.
 */

import React from "react";

const publicationList = [
  {
    title:
      "Comparative Analysis of CNN ResNet and Vision Transformers for Plant Type and Disease Recognition for Generalist Farmland Robots",
    authors:
      "S. D. Adesola, O. K. Ajayi, S. Du, F. S. Bala, D. Mbachu, O. M. Yusuf",
    venue:
      "2024 IEEE 5th International Conference on Electro-Computing Technologies for Humanity (NIGERCON), pp. 1–4, IEEE, 2024.",
    type: "Conference Paper",
    url: "https://ieeexplore.ieee.org/document/10926843",
  },
  {
    title:
      "Development of Vehicle Digital Image Model for Traffic Light Control Applications Using Machine Vision",
    authors: "J. D. Jiya, A. A. Salihu, M. Aminu, S. D. Adesola",
    venue:
      "International Journal of Research Publication and Reviews (IJRPR), Vol. 6, Issue 7, 2025.",
    type: "Journal Article",
    url: "https://ijrpr.com/uploads/V6ISSUE7/IJRPR50532.pdf",
  },
  {
    title:
      "A Deep Learning Dataset for Groundnut Plant Arachis hypogaea",
    authors: "S. D. Adesola, S. Odeh, J. Animashaun, O. Musawu",
    venue: "Zenodo, August 2024. DOI: 10.5281/zenodo.13147130",
    type: "Dataset",
    url: "https://zenodo.org/records/13147130",
  },
  {
    title:
      "A Deep Learning Dataset for Soy Beans Glycine max",
    authors: "S. D. Adesola, J. Odeh, O. Animashaun, M. Syntiche",
    venue: "Zenodo, July 2024. DOI: 10.5281/zenodo.12845109",
    type: "Dataset",
    url: "https://zenodo.org/records/12845109",
  },
];

const Publications = () => {
  return (
    <section className="padding" id="publications">
      <h2 style={{ textAlign: "center" }}>Publications</h2>
      <p style={{ textAlign: "center", marginBottom: "0.5rem" }}>
        <a
          href="https://scholar.google.com/citations?hl=en&user=sruE6z8AAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4E567E", fontWeight: 600 }}
        >
          View full profile on Google Scholar &rarr;
        </a>
      </p>
      <div className="publicationsList">
        {publicationList.map((pub, index) => (
          <div className="publicationItem" key={pub.title}>
            <span className="pubNumber">[{index + 1}]</span>
            <div className="pubContent">
              <a href={pub.url} target="_blank" rel="noopener noreferrer">
                <h3 className="pubTitle">{pub.title}</h3>
              </a>
              <p className="pubAuthors">{pub.authors}</p>
              <p className="pubVenue">{pub.venue}</p>
              <span className="pubType">{pub.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
