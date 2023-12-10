# Data analysis (What)

Data abstraction: What is it shown?

In this section, we present our inspection and analysis on domain data of interest (e.g. soccer team's performance in worldcup 2022). First, we are going to gently introduce our chosen data and attributes. We will touch upon how we inspected and preprocessed data in a conceptual point of view accordingly as a next step. Further, we will be describing our data we are coping with by means of Munzner's taxonomy.

## Domain  Data  Specification
```
Here you  should  describe  the  data  that  you  will  use,  its main characteristics and how it relates to the domain you are treating. Describe data specifics. How you deal with the data from a conceptual point of view (missing values/ errors), and if you apply any preprocessing to generate derived parameters. Here file formats and specific implementation details are NOT  relevant, they belong to the implementation section, if relevant at all. You  should  mention  the  more  conceptual aspects that will influence your visual  design. You do not need to describe each individual feature but rather describe them in a summarized way, according to what relevant information they capture.
``` 
### Understanding the data of interest
FIFA Worldcup 2022 datasets comprise play-performance records at a different granularity levels (E.g. players, teams, and matches including penalties) as well as match records in the past from 1930 to 2018. The datasets also included twitter tweets, and historical performance records, but it was out of our scope. 

Player datasets contain a myriad of performance attributes in evaluating each player across various facets of the game. The topics include defence, Goal-Creating Actions, Goalkeeping, ball possessions, passing, shooting, and playingtime. Speaking of null values, players, Ismail Mohamad, Kevin Rodriguez, and Yahya Jabrane had missing records of their performance details. They were however present in the player stats. Derived attributes such as "pct" or attributes from playing time had 14 to 20 percent null values. Moreover, when considering metrics per 90 minutes, Noa Lang and Pablo Sarabia were absent. Among goalkeepers, Wéverton's actions contained missing values. Null values do not necessarily mean the error in collection but rather they were absent. These absence will be handled noting as info absence and we will not remove them from our dashboared, since they do not hinder for our visualization project.

Team datasets do not contain missing values on the other hand. The attributes in teams datasets covers player performance provided above but as a team. These data also includes extra perspective such as the rankings, and match played records. These data are also important for our comparative and inspection purpose. 

Penalty shootout dataset, also, does not have any missing values. The data consists of attributes, such as teams' where the ball is shot at which zones. The zones are the 3 by 3 separated grids that is overlayed on a goalpost. These attributes can be an additional perspective to each team's statistics in penalty shoots.

Overall, the data looks cleansed but it needed a little touch updates in data types when preprocessing and deriving.

## Data Abstraction: Munzner's Categorization
```
What: after a short description on the data provided from a domain point view, you will present a data abstraction (What). You should describe the type of data that you cope with according to Munzner’s taxonomy: tabular, network, types of attributes (e.g, quantitative, sequential), spatial, etc. What is the key attribute? You can combine Data description and abstraction if this facilitates the explanation. However, both components should be there.
```

Our data consists of items (a.k.a. rows) and attributes (a.k.a, columns), constituting what is referred to as a tabular format. The attributes within the dataset present various attribute types. The types include quantitative, nominal, temporal and network. To give a brief examples, quantitative attributes refer to numeric values in which players, teams, and match performance can be evaluated, compared, and be analyzed. Nominal attributes are where the players are associated at which team. Temporal data consists of at which timeframe how the team performed. Network could be players have an edge value of position to their teams as well as matched results be edges between teams.