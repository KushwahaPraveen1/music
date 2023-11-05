import React from "react";

export const themes = {
    light: {
        // theme: "#07689f",
        // subTheme: "#a2d5f2",
        component: {
            background: "transparent",
    color: "#2b2024",
    backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
    border: "2px solid rgba(255, 255, 255, 0.359)",
    backdropFilter: "blur(10px)",
    webkitBackdropFilter: "blur(10px)",
    borderRadius: "12px",
    boxShadow: "0 10px 40px 0 rgba(139, 89, 189, 0.684)",
          },
          
        button:{
            onHover:{
                backgroundColor:"#a2d5f2",
                color:"#191919"
            },
            contained:{
                backgroundColor: "#07689f",
                color:"#fafafa"
            },
            outlined:{
                backgroundColor:"transparent",
                color:"#191919"
            }
        },
        volume:{
            color:"#07689f"
        }
    },
    dark: {
        theme:"#4ecca3",
        subTheme: "#a2d5f2",
        component:{
            backgroundColor: "#232931",
            color: "#eeeeee",
        },
        button:{
            onHover:{
                backgroundColor:"#a2d5f2",
                color:"#fafafa"
            },
            contained:{
                backgroundColor: "#07689f",
                color:"black"
            },
            outlined:{
                backgroundColor:"transparent",
                color:"#fafafa"
            }
        },
        volume:{
            color:"#07689f"
        }
    }
};

export const ThemeContext = React.createContext(
    themes.light
);

/*
export const ThemeProvider = (props) => {
    const [theme,setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}*/
