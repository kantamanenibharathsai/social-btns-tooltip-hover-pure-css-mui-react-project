const homeStyles = {
  mainContainer: {
    background: "#121620",
    height: "100vh",
    pt: "3rem",
  },

  heading: {
    font: "600 30px Roboto",
    color: "#fff",
  },

  childContainer: {
    background: "#201F1E",
    height: "180px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: "0px 30px",
  },

  listContainer: {
    listStyleType: "none",
    display: "flex",
    p: 0,
    m: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 1,
  },

  listItem: {
    position: "relative",
    background: "#fff",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    transition: "all 0.4s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover > span:nth-of-type(1)": {
      opacity: "1",
      pointerEvents: "auto",
      visibility: "visible",
      top: "-45px",
      background: "#fff",
    },
    "&:hover social-icon": {
      color: "#fff",
    },
  },

  tooltip: {
    position: "absolute",
    top: "0",
    font: "100 12px Roboto",
    color: "#000",
    padding: "5px 8px",
    borderRadius: "5px",
    opacity: "0",
    pointerEvents: "none",
    transition: "all 0.5s ease",
    "&::before": {
      position: "absolute",
      content: "''",
      width: "8px",
      height: "8px",
      background: "#fff",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%) rotate(45deg)",
      transition: "all 0.3s ease",
    },
  },

  facebookLi: {
    "&:hover": {
      background: "#1690F0",
    },
    "&:hover > span:nth-of-type(1)": {
      background: "#1690F0",
      opacity: "1",
      pointerEvents: "auto",
      visibility: "visible",
      top: "-45px",
      color: "#fff",
    },
    "&:hover > span:nth-of-type(2)": {
      color: "#fff",
    },
    "&:hover > span:nth-of-type(1)::before": {
      position: "absolute",
      content: "''",
      width: "8px",
      height: "8px",
      background: "#1690F0",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%) rotate(45deg)",
      transition: "all 0.3s ease",
    },
  },

  twitterLi: {
    "&:hover": {
      background: "#106AFF",
    },
    "&:hover > span:nth-of-type(1)": {
      background: "#106AFF",
      opacity: "1",
      pointerEvents: "auto",
      visibility: "visible",
      top: "-45px",
      color: "#fff",
    },
    "&:hover > span:nth-of-type(2)": {
      color: "#fff",
    },
    "&:hover > span:nth-of-type(1)::before": {
      position: "absolute",
      content: "''",
      width: "8px",
      height: "8px",
      background: "#106AFF",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%) rotate(45deg)",
      transition: "all 0.3s ease",
    },
  },

  instagramLi: {
    "&:hover": {
      background: "#B710EE",
    },
    "&:hover > span:nth-of-type(1)": {
      background: "#B710EE",
      opacity: "1",
      pointerEvents: "auto",
      visibility: "visible",
      top: "-45px",
      color: "#fff",
    },
    "&:hover > span:nth-of-type(2)": {
      color: "#fff",
    },
    "&:hover > span:nth-of-type(1)::before": {
      position: "absolute",
      content: "''",
      width: "8px",
      height: "8px",
      background: "#B710EE",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%) rotate(45deg)",
      transition: "all 0.3s ease",
    },
  },

  githubLi: {
    "&:hover": {
      background: "#283344",
    },
    "&:hover > span:nth-of-type(1)": {
      background: "#283344",
      opacity: "1",
      pointerEvents: "auto",
      visibility: "visible",
      top: "-45px",
      color: "#fff",
    },
    "&:hover > span:nth-of-type(2)": {
      color: "#fff",
    },
    "&:hover > span:nth-of-type(1)::before": {
      position: "absolute",
      content: "''",
      width: "8px",
      height: "8px",
      background: "#283344",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%) rotate(45deg)",
      transition: "all 0.3s ease",
    },
  },

  youtubeLi: {
    "&:hover": {
      background: "#FF0808",
    },
    "&:hover > span:nth-of-type(1)": {
      background: "#FF0808",
      opacity: "1",
      pointerEvents: "auto",
      visibility: "visible",
      top: "-45px",
      color: "#fff",
    },
    "&:hover > span:nth-of-type(2)": {
      color: "#fff",
    },
    "&:hover > span:nth-of-type(1)::before": {
      position: "absolute",
      content: "''",
      width: "8px",
      height: "8px",
      background: "#FF0808",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%) rotate(45deg)",
      transition: "all 0.3s ease",
    },
  },
};

export default homeStyles;
