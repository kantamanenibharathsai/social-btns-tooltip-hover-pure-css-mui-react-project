export const flexProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const tooltipProperties = {
  opacity: 1,
  pointerEvents: "auto",
  visibility: "visible",
  top: "-45px",
  color: "#fff",
};

export const tooltipTriangle = {
  position: "absolute",
  content: "''",
  width: "9px",
  height: "9px",
  bottom: "-4px",
  left: "50%",
  transform: "translate(-50%) rotate(45deg)",
  transition: "all 0.6s ease",
};

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
    p: "0px 30px",
    ...flexProperties,
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
    transition: "all 0.6s ease",
    ...flexProperties,
    flexDirection: "column",
    cursor: "pointer",
    "& .social-icon": {
      fontSize: "20px",
    },
    "&:hover > span:nth-of-type(1)": {
      // opacity: 1,
      // pointerEvents: "auto",
      // visibility: "visible",
      // top: "-45px",
      // background: "#fff",
    },
    "&:hover social-icon": {
      color: "#fff",
    },
  },

  tooltip: {
    position: "absolute",
    top: 0,
    font: "100 13px Roboto",
    color: "#000",
    padding: "6px 10px",
    borderRadius: "5px",
    opacity: 0,
    pointerEvents: "none",
    transition: "all 0.6s ease",
    "&::before": {
      ...tooltipTriangle,
      background: "#fff",
    },
  },

  facebookLi: {
    "&:hover": {
      background: "#1690F0",
    },
    "&:hover > span:nth-of-type(1)": {
      ...tooltipProperties,
      background: "#1690F0",
    },
    "&:hover > span:nth-of-type(2)": {
      color: "#fff",
    },
    "&:hover > span:nth-of-type(1)::before": {
      ...tooltipTriangle,
      background: "#1690F0",
    },
  },

  twitterLi: {
    "&:hover": {
      background: "#106AFF",
    },
    "&:hover > span:nth-of-type(1)": {
      ...tooltipProperties,
      background: "#106AFF",
    },
    "&:hover > span:nth-of-type(2)": {
      color: "#fff",
    },
    "&:hover > span:nth-of-type(1)::before": {
      ...tooltipTriangle,
      background: "#106AFF",
    },
  },

  instagramLi: {
    "&:hover": {
      background: "#B710EE",
    },
    "&:hover > span:nth-of-type(1)": {
      ...tooltipProperties,
      background: "#B710EE",
    },
    "&:hover > span:nth-of-type(2)": {
      color: "#fff",
    },
    "&:hover > span:nth-of-type(1)::before": {
      ...tooltipTriangle,
      background: "#B710EE",
    },
  },

  githubLi: {
    "&:hover": {
      background: "#283344",
    },
    "&:hover > span:nth-of-type(1)": {
      ...tooltipProperties,
      background: "#283344",
    },
    "&:hover > span:nth-of-type(2)": {
      color: "#fff",
    },
    "&:hover > span:nth-of-type(1)::before": {
      ...tooltipTriangle,
      background: "#283344",
    },
  },

  youtubeLi: {
    "&:hover": {
      background: "#FF0808",
    },
    "&:hover > span:nth-of-type(1)": {
      ...tooltipProperties,
      background: "#FF0808",
    },
    "&:hover > span:nth-of-type(2)": {
      color: "#fff",
    },
    "&:hover > span:nth-of-type(1)::before": {
      ...tooltipTriangle,
      background: "#FF0808",
    },
  },
};

export default homeStyles;
