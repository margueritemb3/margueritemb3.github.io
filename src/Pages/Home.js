import React from 'react';
import {
    Box,
    VStack,
    Grid,
    GridItem,
    Heading,
    Button
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../Leaves.css';
import '../Leaves copy.css';
import '../App.css';
import '../Branches.css';
import placeholderGif from '../quonk.gif';
import flowers2 from '../Branches/flowers (2).png';
import flowers5 from '../Branches/flowers (5).png';

function Home() {
    return (
        <>
            <div id="leaves">
                {[...Array(15).keys()].map((i) => (<i key={i}></i>))}
            </div>
            <div id="leavesleft">
                {[...Array(15).keys()].map((i) => (<i key={i}></i>))}
            </div>
            <img class="branch" id="image1" src={flowers2} alt=" flowers1" />
            <img class="branch" id="image2" src={flowers5} alt=" flowers2" />
            <Box textAlign="center" fontSize="xl" mt="-28px" pb="30px">
                <Grid minH="100vh" p={3}>
                    <VStack spacing={8}>
                        <Heading id="name" pt="400px" color="brand.600">Marguerite</Heading>
                    </VStack>
                </Grid>
            </Box>
            <Box id="projectBox" fontSize="xl" bg="brand.200" color="brand.500">
                <Grid minH="50vh" p={3} templateColumns="repeat(3, 1fr)" gap={6}>
                    <GridItem w="100%" h="95%" colSpan={1}>
                        <VStack spacing={8}>
                            <img src={placeholderGif} alt="image placeholder" width="80%" />
                        </VStack>
                    </GridItem>
                    <GridItem w="90%" h="95%" colSpan={2}>
                        <div id="projectHeader">
                            Dota 2 Patch Bot
                        </div>
                        <div id="projectText" color="brand.200">
                            A Discord bot that posts updates and news about the video game, Dota 2.
                            It posts a link to the official updates to a specified Discord channel in a Discord server and also creates a role in that server to allow certain people to be alerted when a new update is posted.
                            The bot makes calls to the Steam Web API every 2 minutes to check for Dota 2 news and updates.
                            Built using Javascript and Discord.js.
                        </div>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme="brand" variant="outline" mt="100px">
                            <Link to="/patchbot">Learn More</Link>
                        </Button>
                    </GridItem>
                </Grid>
            </Box>
            <Box id="projectBox" fontSize="xl" bg="brand.200" color="brand.500">
                <Grid minH="50vh" p={3} templateColumns="repeat(3, 1fr)" gap={6}>
                    <GridItem w="90%" h="95%" colSpan={2} pl="50px">
                        <div id="projectHeader">
                            Grid Puzzle Game
                        </div>
                        <div id="projectText" color="brand.100">
                            A randomly generated grid puzzle game that is inspired by some of my favorite Nonogram and Picross puzzle games.
                            The player can click on the squares in the grid to change their color.
                            The goal is to color the correct squares following the clues printed on the left side and top of the grid that correspond to the number of colored squares in sequence in each row/column.
                            Built using Javascript and p5.js
                        </div>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme="brand" variant="outline" mt="100px">
                            <Link to="/puzzlegame">Learn More</Link>
                        </Button>
                    </GridItem>
                    <GridItem w="100%" h="95%" colSpan={1}>
                        <VStack spacing={8}>
                            <img src={placeholderGif} alt="image placeholder" width="80%" />
                        </VStack>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}

export default Home;
