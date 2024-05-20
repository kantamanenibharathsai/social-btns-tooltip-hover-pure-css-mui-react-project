import { Box, Stack, Typography } from "@mui/material"
import homeStyles from "./Home.Styles"
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { DiGithubBadge } from "react-icons/di";
import { FaYoutube } from "react-icons/fa";

const Home = () => {
    return (
        <Box sx={homeStyles.mainContainer}>
            <Stack direction={"column"} alignItems={"center"} gap={"2rem"}>
                <Typography sx={homeStyles.heading}>Social Icons hover with Tooltip</Typography>
                <Box sx={homeStyles.childContainer}>
                    <Box component="ul" sx={homeStyles.listContainer}>
                        <Box component="li" sx={{ ...homeStyles.listItem, ...homeStyles.facebookLi }}>
                            <Box component="span" sx={homeStyles.tooltip}>
                                Facebook
                            </Box>
                            <Box component="span">
                                <RiFacebookFill className="social-icon" />
                            </Box>
                        </Box>

                        <Box component="li" sx={{ ...homeStyles.listItem, ...homeStyles.twitterLi }}>
                            <Box component="span" sx={homeStyles.tooltip}>
                                Twitter
                            </Box>
                            <Box component="span">
                                <AiOutlineTwitter />
                            </Box>
                        </Box>

                        <Box component="li" sx={{ ...homeStyles.listItem, ...homeStyles.instagramLi }}>
                            <Box component="span" sx={homeStyles.tooltip}>
                                Instagram
                            </Box>
                            <Box component="span">
                                <IoLogoInstagram />
                            </Box>
                        </Box>

                        <Box component="li" sx={{ ...homeStyles.listItem, ...homeStyles.githubLi }}>
                            <Box component="span" sx={homeStyles.tooltip}>
                                Github
                            </Box>
                            <Box component="span">
                                <DiGithubBadge />
                            </Box>
                        </Box>

                        <Box component="li" sx={{ ...homeStyles.listItem, ...homeStyles.youtubeLi }}>
                            <Box component="span" sx={homeStyles.tooltip}>
                                Youtube
                            </Box>
                            <Box component="span">
                                <FaYoutube />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}



export default Home