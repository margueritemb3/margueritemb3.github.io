import React from 'react';
import {
    Box,
    VStack,
    Grid,
    GridItem,
    Heading,
    Button,
    Link,
    Text
} from '@chakra-ui/react';
import {
    ArrowForwardIcon,
    ArrowBackIcon,
    ArrowRightIcon,
    ChevronRightIcon
} from '@chakra-ui/icons';
import { useHistory } from "react-router-dom";
import '../Leaves.css';
import '../App.css';
import commands from './PatchBotImages/Patch_Bot_Command.JPG';
import help from './PatchBotImages/Patch_Bot_Help.JPG';
import update1 from './PatchBotImages/Patch_Bot_Update1.JPG';
import update2 from './PatchBotImages/Patch_Bot_Update2.JPG';


function PatchBot() {
    let history = useHistory();
    return (
        <div class="branches" id="projectPage">
            <div id="leaves">
                {[...Array(30).keys()].map((i) => (<i key={i}></i>))}
            </div>
            <div id="leavesleft">
                {[...Array(30).keys()].map((i) => (<i key={i}></i>))}
            </div>
            <Button id="backButton" onClick={() => history.push('/')} leftIcon={<ArrowBackIcon />} colorScheme="brand" variant="outline" />
            <Box id="projectSection">
                <Heading id="projectTitle">Dota 2 Patch Bot</Heading>
                <Text id="text">
                    A Discord bot that checks for updates and news about the video game, Dota 2, and posts links to the official news/updates in a specified discord channel.
                </Text>
                <Grid p={2} templateColumns="repeat(2, 1fr)" gap={6} ml="50px">
                    <GridItem w="100%" h="95%" colSpan={1}>
                        <img class="projectImage" src={update1} />
                    </GridItem>
                    <GridItem w="80%" h="95%" colSpan={1}>
                        <img class="projectImage" src={commands} />
                    </GridItem>
                </Grid>
                <Heading id="heading">How To Use The Bot</Heading>
                <Text id="text">
                    Once the admin of a Discord server adds the bot to their server, using the link below, they (and other members) can use any of the programmed commands to interact with the bot and set it up:
                    <Text id="textTab">
                        <br />'!patch' - reposts the most recent Dota 2 update.
                        <br />'!patch help' - posts a list of commands and a short description of what they do.
                        <br />'!patch subscribe' - tells the bot to send automatic updates to the channel that this command was sent in.
                        <br />'!patch notify' - adds the role of 'Dota2PatchBotNotification' to the user who sent this command.
                    </Text>
                </Text>
                <Button id="button" as="a" href="https://discord.com/oauth2/authorize?client_id=836767045084512306&scope=bot&permissions=8" target="_blank" rightIcon={<ArrowForwardIcon />} colorScheme="brand" variant="outline">
                    Add Bot To Server
                </Button>
                <Heading id="heading">How it Works</Heading>
                <Text id="text">
                    This bot was built using Javascript and the Discord.js library.
                    It uses the Google Firestore NoSQL document database to store Discord server data and keep track of already-posted updates.
                    In the database, there is a collection of documents, each for a Discord server, each storing the channel id of the channel that is subscribed and the role id of the role that the bot uses to notify members.
                    There is also a document that keeps track of the id of the last-posted update so that it doesn't repeat itself.
                    This database is necessary so that the bot does not lose this information every time it crashes, is restarted, or gets updated.
                    The bot is hosted on Heroku, which automatically restarts the bot if it ever crashes, automatically deploys updates from GitHub, and produces error logs, for convenient Discord bot management.
                    The bot makes calls to the Steam Web API to get information on Dota 2 updates.
                    The GetNewsForApp part of the API allows 4 request arguments: 'appid' (the id of the game, for Dota 2 it's 570), 'count' (how many game updates to return), 'maxlength' (the length of the news entries), and 'format' (in this case, .json).
                    The entities returned have a 'feed_type' attribute which differentiate between official news (marked with a '1'), and game client updates (marked with a '0'), which allows the bot to identify the news that users/players care about.
                    <br /> <br />
                    When the '!patch' command is sent, the bot responds by posting the most recent non-client update by making a request to the Steam Web API for the last 100 pieces of Dota 2 news and looking through the list for the first entity with a 'feed_type' of '1'.
                    <br /> <br />
                    The '!patch subscribe' command first checks if the member who wrote the message is an admin, and if not, returns an error message.
                    I wanted to prevent non-admins from changing the channel as that could cause chaos in a Discord server.
                    The bot then checks to see if a Discord role called 'Dota2PatchBotNotification' already exists, and if not, it makes a new one, storing the role id and the channel id in the database.
                    <br /> <br />
                    When a member of a server uses the '!patch notify' command, it checks to see if a 'Dota2PatchBotNotification' role id exists in the database, and if it doesn't, this indicates that the bot has not been subscribed to a channel yet, and it responds with an error message.
                    Otherwise, it adds the role id to the user's list of roles.
                    <br /> <br />
                    Meanwhile, another function runs every 2 minutes that calls the Steam Web API, with the same request as the '!patch' command and checks to see if there is any new news/updates.
                    It does this by looking for the newest non-client update/news and comparing that id with the id stored in the database and if they are the same, it doesn't make a new post.
                    If they are not the same, however, this indicates that the newest update is not one we have read before, so it posts it and updates the database.
                </Text>
                <Button id="button" as="a" href="https://github.com/margueritemb3/dota2pb" target="_blank" rightIcon={<ArrowForwardIcon />} colorScheme="brand" variant="outline">
                    See Code Repository
                </Button>
                <Heading id="heading">Why?</Heading>
                <Text id="text">
                    As an avid Dota 2 player and the Dota 2 Competitive Lead at the University of Minnesota, Twin Cities, I am deeply involved in the Dota 2 community.
                    Whenever new updates come out, there is often a delay before many people find out, because unless someone is constantly monitoring the steam databases or APIs, they will hear from a friend, who heard from another friend, and so on.
                    As Discord is a popular platform for all kinds of gamers, including Dota 2 players, I thought a great way to solve this problem would be to make a Discord bot that conveniently monitors steam updates, so players don't have to.
                </Text>
                <Heading id="heading">Road Blocks & Difficulties</Heading>
                <Text id="text">
                    At first, the server & last patch data was gathered when the bot started running.
                    This was convenient for testing purposes and focusing on command functionality, but it also meant that the bot would lose all data any time it crashed, was turned off, restarted, or updated.
                    This is of course an issue as it requires the server admin to resubscribe the bot anytime it is restarted and it reposts the most recent news every time it is restarted (even if it has already been posted).
                    To solve this, the bot was connected to a database (google firestore, because its free), which was more complicated, but made the bot durable.
                </Text>
                <Heading id="heading">Potential Extensions</Heading>
                <Text id="text">
                    Add the ability to subscribe to other games.
                    There Steam Web API has update information on all of the games on the Steam distribution service, making it easy to access information on many games.
                    Would require a bit of a database rework to keep track of the id of the last news posted for multiple games as well as each Discord servers' games they are subscribed to.
                    <br /> <br />
                    Add the ability to ask the bot for the last 'n' updates.
                    Would be similar to the current '!patch' command, except it would post the n most recent news entities.
                    Would need to query for a factor of 'n' results (as opposed to the current 100) such as 'n * 50' or 'n * 100', as there needs to be enough news items to respond to the command with the correct amount.
                </Text>
            </Box>
        </ div >
    );
}

export default PatchBot;
