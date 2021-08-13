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
import {
    BrowserRouter as Router,
    useHistory,
    Switch,
    Route,
} from "react-router-dom";
import '../Leaves.css';
import '../App.css';
import diagram from './BirthdayBotImages/Web_App_Reference_Architecture.png';
import commands1 from './BirthdayBotImages/BdayBot1.JPG';
import commands2 from './BirthdayBotImages/BdayBot2.png';


function BirthdayBot() {
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

                <Heading id="projectTitle">Birthday-Eve Bot</Heading>
                <Text id="text">
                    A Discord bot that allows members of a Discord server to send eachother birthday wishes on any day of the year with a "Happy Birthday eve eve eve eve eve eve ..." message.
                </Text>
                <Grid p={2} templateColumns="repeat(2, 1fr)" gap={6} ml="50px">
                    <GridItem w="100%" h="95%" colSpan={1}>
                        <img class="projectImage" src={commands1} />
                    </GridItem>
                    <GridItem w="80%" h="95%" colSpan={1}>
                        <img class="projectImage" src={commands2} />
                    </GridItem>
                </Grid>
                <Heading id="heading">How To Use The Bot</Heading>
                <Text id="text">
                    Once the admin of a Discord server adds the bot to their server, using the link below, they (and other members) can use any of the programmed commands to interact with the bot:
                    <Text ml="50px" mr="50px">
                        <br />'!birthday @[member's username]' - wish a happy birthday eve to the mentioned member.
                        <br />'!add birthday [YYYY-MM-DD]' - add the birthday of the user who sent the message.
                        <br />'!help birthday' - posts a list of commands and a short description of what they do.
                    </Text>
                </Text>
                <Button id="button" as="a" href="https://discord.com/oauth2/authorize?client_id=859130337326006322&scope=bot&permissions=8y.app/" target="_blank" rightIcon={<ArrowForwardIcon />} colorScheme="brand" variant="outline">
                    Add Bot To Server
                </Button>
                <Heading id="heading">Why?</Heading>
                <Text id="text">
                    When I began my internship at Best Buy, I had no familiarity with any of the tools that the team used such as Spring and AWS services.
                    In order to practice using those tools, I decided to work on a mini project that incorporated them.
                    The result is an abomination of an over-engineered discord bot that I am strangely proud of as it marks the first steps of my internship and my out-of-the-classroom experiences.
                    <br></br> <br></br>
                    II came up with the idea for making a both with this functionality after my friend wished me a happy birthday 6 months early with the appropriate amount of "eve"s following it.
                    I thought it would be funny if friends could easily send that to eachother whenever they liked.
                    Also I felt it was important to make a simple bot, as I wanted to focus on the tools i was using rather than the complexity of the bot commands.
                </Text>
                <img src={diagram} mt="50px" />
                <Heading id="heading">How it Works</Heading>
                <Text id="text">
                    This bot was made using Java, Spring Boot, and a handful of AWS services: DynamoDB, Lambda, API Gateway, and SQS. It also uses the Discord4J Java library to interact with discord objects.
                    <br></br> <br></br>
                    When the '!birthday @[]' command is read, the bot simply accesses the database (stored in DynamoDB) and finds the birthday of the person who was mentioned by parsing their discord id (snowflake, as discord calls it), from the message.
                    Once the person's birthday is retrieved, it calculates the days to the next birthday (if this year's birthday already happend, then it calculates it for next years).
                    It then uses the result of that calculation to repeatedly add "eve"s to the end of the "Happy Birthday" string.
                    <br></br> <br></br>
                    The '!add birthday' command is much more complicated (and excessive). The bot grabs the id of the person who sent the message as well as their birthday and then makes a post request to an API Gateway with the information gathered as query parameters.
                    Then, the API Gateway triggers a lambda function (written in javascript) that then takes apart the query parameters and sets them up as JSON data to send to an SQS queue.
                    The SQS queue sends this JSON data back to the Spring boot bot application wich listens to the SQS queue and takes the new data and adds it to the database.
                    <br></br> <br></br>
                    Yes, this all couldve been done with just a spring boot app connected to a database.
                    The '!add birthday' flow goes in an entire loop that does nothing except pass information around in different formats.
                    However, the purpose of this bot was not to make an efficient bot, but rather for me to learn some new tools, which I later used in my internship!
                    I also want to clarify that I do understand that this work is uneccessary, and in fact, would be a terrible choice of implementation for something like this.
                    I am aware that there is absolutely no point to using SQS for this as it will never have enough traffic to warrant a message queue and can just call methods as needed.
                    I have the code (about 5 lines) that goes straight past this entire AWS loop and straight to the database in comments.
                </Text>
                <Button id="button" as="a" href="https://github.com/margueritemb3/dota2pb" target="_blank" rightIcon={<ArrowForwardIcon />} colorScheme="brand" variant="outline">
                    See Code Repository
                </Button>
                <Heading id="heading">Road Blocks & Difficulties</Heading>
                <Text id="text">
                    This bot was not easy, as it was the first Discord bot I had made, and I was also using several other tools and services I had never touched before.
                    Because of that, the first and main difficulty was gaining familiarity with the tools, meaning that this bot took me longer than it would've for someone who had any sort of AWS or Spring experience.
                    I was trying to learn about Beans, Lambda, the Reactor Core Mono class, and tons of other parts that I had never even heard of.
                    After familiarizing myself with the AWS UI and rereading through countless Baeldung tutorials on how to build and integrate things using Spring, I was able to pull together enough of an understanding to build a functional bot.
                    <br /> <br />
                    One issue with this bot, is that it seems to misread a member's discord id if they have a nickname in that discord server.
                    I suspect that discord stores nicknames slightly differently, but I need more research and testing to figure out that issue.
                    It might require the use of regular expressions to fix this bug.
                </Text>
                <Heading id="heading">Potential Extensions</Heading>
                <Text id="text">
                    Currently this bot isn't hosted anywhere, so it only runs when it is run on my computer, which isn't practical or useful for the members of the discord that want to use this.
                    I am not sure how much this bot would be used or appreciated if it were available at all times, but I think it would still be cool, and I would still use it.
                    If I wanted to keep it on AWS like everything else, I would figure out how to host the Spring Boot app on Amazon's EC2 and probably use Cloud Formation to manage the AWS resources.
                </Text>
            </Box>
        </ div >
    );
}

export default BirthdayBot;
