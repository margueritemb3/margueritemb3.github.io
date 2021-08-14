import React from 'react';
import {
    Box,
    VStack,
    Grid,
    GridItem,
    Heading,
    Button,
    Text
} from '@chakra-ui/react';
import {
    ArrowForwardIcon,
    ArrowDownIcon
} from '@chakra-ui/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../Leaves.css';
import '../Leaves copy.css';
import '../App.css';
import placeholderGif from '../quonk.gif';
import SmoothScroll from 'smooth-scroll';
import patchBot from './PatchBotImages/Patch_Bot.JPG';
import bdayBot from './BirthdayBotImages/BdayBot.jpg';
import puzzle from './PuzzleGameImages/Puzzle_Partial.JPG';

function Home() {
    let scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000
    });
    return (
        <div class="branches" id="home">
            <div id="leaves">
                {[...Array(30).keys()].map((i) => (<i key={i}></i>))}
            </div>
            <div id="leavesleft">
                {[...Array(15).keys()].map((i) => (<i key={i}></i>))}
            </div>
            <Box>
                <Grid minH={["30vh", "40vh", "100vh", "100vh", "100vh"]}>
                    <VStack spacing={8}>
                        <Heading id="name">Marguerite</Heading>
                        <Text id="subtitle">blossoming software engineer</Text>
                        <a id="downButton" data-scroll href="#projects"><ArrowDownIcon w={[5, 6, 8, 9, 10]} h={10} /></a>
                    </VStack>
                </Grid>
            </Box>
            <div id="projects" />
            <Box id="projectBox">
                <Grid minH={["100vh", "130vh", "100vh", "55vh", "50vh"]} p={[1, 1, 1, 3, 3]} templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} gap={6}>
                    <GridItem colSpan={1}>
                        <VStack spacing={8}>
                            <img class="projectImage" src={patchBot} width="65%" />
                        </VStack>
                    </GridItem>
                    <GridItem id="gridItem" w={["90%", "84%", "80%", "80%", "80%"]} h="95%" colSpan={[1, 1, 1, 2, 2]}>
                        <div id="projectHeader">
                            Dota 2 Patch Bot
                        </div>
                        <div id="projectText">
                            A Discord bot that posts updates and news about the video game, Dota 2.
                            It posts a link to the official updates to a specified Discord channel in a Discord server and also creates a role in that server to allow certain people to be alerted when a new update is posted.
                            The bot makes calls to the Steam Web API every 2 minutes to check for Dota 2 news and updates.
                            Built using Javascript and Discord.js.
                        </div>
                        <VStack>
                            <Button id="button" rightIcon={<ArrowForwardIcon />} colorScheme="brand" variant="outline">
                                <Link to="/patchbot">Learn More</Link>
                            </Button>
                        </VStack>
                    </GridItem>
                </Grid>
            </Box>
            <Box id="projectBox">
                <Grid minH={["100vh", "130vh", "100vh", "55vh", "50vh"]} p={[1, 1, 1, 3, 3]} templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} gap={6}>
                    <GridItem id="gridItem" w={["90%", "84%", "80%", "80%", "80%"]} h="95%" colSpan={[1, 1, 1, 2, 2]}>
                        <div id="projectHeader">
                            Grid Puzzle Game
                        </div>
                        <div id="projectText">
                            A randomly generated grid puzzle game that is inspired by some of my favorite Nonogram and Picross puzzle games.
                            The player can click on the squares in the grid to change their color.
                            The goal is to color the correct squares following the clues printed on the left side and top of the grid that correspond to the number of colored squares in sequence in each row/column.
                            Built using Javascript and p5.js
                        </div>
                        <VStack spacing={8}>
                            <Button id="button" rightIcon={<ArrowForwardIcon />} colorScheme="brand" variant="outline" mt="100px">
                                <Link to="/puzzlegame">Learn More</Link>
                            </Button>
                        </VStack>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <VStack>
                            <img class="projectImage" src={puzzle} width="60%" />
                        </VStack>
                    </GridItem>
                </Grid>
            </Box>
            <Box id="projectBox">
                <Grid minH={["100vh", "130vh", "100vh", "55vh", "50vh"]} p={[1, 1, 1, 3, 3]} templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} gap={6}>
                    <GridItem colSpan={1}>
                        <VStack>
                            <img class="projectImage" src={bdayBot} width="65%" />
                        </VStack>
                    </GridItem>
                    <GridItem id="gridItem" w={["90%", "84%", "80%", "80%", "80%"]} h="95%" colSpan={[1, 1, 1, 2, 2]}>
                        <div id="projectHeader">
                            Birthday-Eve Bot
                        </div>
                        <div id="projectText">
                            A Discord bot that allows members of a Discord server to wish eachother a "Happy Birthday" on any day of the year with a personalized "Happy Birthday eve eve eve eve eve eve..." message.
                            The Bot stores member data such as discord id and birthday in DynamoDB and retrieves it in order to hand-craft a loving birthday wish from a friend (that will never be annoying).
                            Built in Java and Spring using various AWS services.
                        </div>
                        <VStack>
                            <Button id="button" rightIcon={<ArrowForwardIcon />} colorScheme="brand" variant="outline">
                                <Link to="/birthdaybot">Learn More</Link>
                            </Button>
                        </VStack>
                    </GridItem>
                </Grid>
            </Box>
        </div >
    );
}

export default Home;
