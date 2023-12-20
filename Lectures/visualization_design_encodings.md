# Visualization design and encodings

Main types of goals in visualization
Value = T + E + I + C
* Exploration vs presentation
  * Data analysis could be one exploration
  * exploration: many assumptions and explore the data. EDA
  * Verify hypothesis: analysis
* Presentation
  * Communicate results
  * Just for communication

## Visualization design
* Huge space of design alternatives
  * Tradeoffs abound
* Many possibilities now known to be ineffective
  * Avoid random walk through the possibilities
  * Avoid some of known mistakes
  * Extensive experimentation has already been done
* Guidelines continue to evolve
  * Reflect on lessons learned in design studies
  * Iterative refinement usually wise

* Munzner's nested model design
  * Domain situation $\rightarrow$ Data/task abstraction $\rightarrow$ Visual encoding/interaction idiom $\rightarrow$ Algorithm
  * In practice, these are iterative/refinement process

## Domain situation
* Understand the user, the data and task!
* Specific application that is address. What is the data, tasks and who would be my users.
* Use domain specific vocabulary
* Produce a set of tasks/questions of target users on the data, on different levels
* Info obtained through interviews, observation, reading, ...

### Know your users
* What are their needs/wants/limitations/skills?
* What is their workflow?
* How to provide actionable knowledge?
  * What decisions must be made?
  * What information is relevant for that?
* How to make them happy/enthusiastic/satisfied?

Proposed example of my user be "Journalist"

## Data/Task abstraction design
* Data described in generic (Visualization) terms:
  * Table, hierarchy, sets, ...
* Tasks described in generic term:
  * Search, compare, see trend, ...

## Visual encoding and interaction idiom
Design space, select visual encodings, define interactions, etc. 

## Algorithm
Layout algorithm, ordering, rendering,... : Implementing the design

## Common issues in the nested model
* Domain situation
  * You misunderstood their needs
* Data/task abstraction
  * You are showing them the wrong thing
* Visual encoding/interaction idiom
  * The way you show it doesn't work
* Algorithm
  * Your code is rendering too slow

## Validation of the nested model
* Domain situation
  * Observe target users using existing tools
  * Measure adoption
* Data/task abstraction
  * Observe target users after deployment (field study)
* Visual encoding/interaction idiom
  * Justify design with respect to alternatives
  * Analyze results qualitatively
  * Measure human time with lab experiment (lab study)
* Algorithm
  * Measure system time/memory
  * Analyze computational complexity


## Munzner's Taxonomy (Data abstraction)
### What is shown?
Datatypes
- Items
- Attributes
- Links
- Positions
- Grids
- Tables
- Multidimensional table

Dataset availability
- Static
- Dynamic

- Offline
- Online (Streaming)

## Given data type characteristics/Attributes
| Data Types |   With combinations of other type | Addresses (format) |
|-|-|-|
| Items | Attributes | <ul><li>Tables</li><li>Multidimensional Tables</li></ul> |
| Items |<ul><li>Items</li><li>Attributes(Doesn't have to be considered)</li><li>Links</li></ul>  | <ul><li>Networks</li><li>Trees</li></ul> |
| Items | <ul><li>Attributes</li><li>Positions</li></ul> | Geometry (Spatial) |
|Attributes| <ul><li>Grids</li><li>Positions(Non-continuous)</li></ul> | <ul><li>SciVis: Fields [Grid of positions] (Continuous)</li><li>Multidimensional Table (Discontinuous)</li></ul> |

*This course is focused on tabular formatted datatype a.k.a. multivariate fomat.


|Attribute types| Description |
|-|-|
|Categorical| Shapes, colors (12 distinctive colors) and patterns |
|Ordered| Ordinal (Size), Quantitative values |

|Ordering Direction| Description |
|-|-|
|Sequential| A range from low to high in relevance or any other means|
|Diverging| Two categories that are belonged |
|Cyclic| Reoccurring characteristic value |


|Dataset availability| Description |
|-|-|
|Static| Offline data |
|Dynamic| Online data such as streaming - Time varying |

## Munzner's Taxonomy starting point!
Real datasets might be more complex than the basic types presented:
- Sets/ Groups
- Combinations of previous defined datasets
- New types
- ...

## One dataset can be looked at in different way
E.g. Multivariate data: Tables
- Sets
- Network / Graphs
- ...

# Analysis framework
## How is it shown?
**Visual encoding and interaction**

## Marks &amps; Channels
**Marks**: geometric primitives
- Points
- Lines
- Areas 3D marks: Volume, ...
- ...

**Visual channels**
- Links: Containtment, Connection
- Position
- Color
- Tilt (angle)
- Size
- Shape
- Motion (Animation)
- ...






















































# Project concern

## Possible aim
Target user: Journalist
- Unveiling young rising star

| Match Date | Home | Away | Stadium | Result |
|---|---|---|---|---|
| November 21 | Senegal | Qatar | Al Thumama Stadium | [Image of Senegal 1-0 Qatar (Al Thumama Stadium) match] | 1-0 |
| November 21 | Netherlands | Ecuador | Al Bayt Stadium | [Image of Netherlands 2-2 Ecuador (Al Bayt Stadium) match] | 2-2 |
| November 22 | Qatar | Ecuador | Khalifa International Stadium | 2-1 |
| November 22 | Senegal | Netherlands | Al Thumama Stadium | [Image of Senegal 4-2 Netherlands (Al Thumama Stadium) match] | 4-2 |
| November 25 | England | Iran | Al Bayt Stadium | [Image of England 1-0 Iran (Al Bayt Stadium) match] | 1-0 |
| November 25 | USA | Wales | Education City Stadium | - | - |
| November 26 | Iran | USA | Education City Stadium | [Image of Iran 1-0 USA (Education City Stadium) match] | 1-0 |
| November 26 | England | Wales | أحمد بن علي Stadium | - | - |
| November 29 | Argentina | Saudi Arabia | Lusail Iconic Stadium | [Image of Argentina 8-0 Saudi Arabia (Lusail Iconic Stadium) match] | 8-0 |
| November 29 | Mexico | Poland | Education City Stadium | [Image of Mexico 1-0 Poland (Education City Stadium) match] | 1-0 |
| November 30 | Argentina | Mexico | Lusail Iconic Stadium | [Image of Argentina 1-0 Mexico (Lusail Iconic Stadium) match] | 1-0 |
| November 30 | Saudi Arabia | Poland | أحمد بن علي Stadium | [Image of Saudi Arabia 2-1 Poland (أحمد بن علي Stadium) match] | 2-1 |
| December 3 | France | Tunisia | Al Thumama Stadium | - | - |
| December 3 | Denmark | Peru | أحمد بن علي Stadium | - | - |
| December 4 | Tunisia | Denmark | Al Bayt Stadium | [Image of Tunisia 0-1 Denmark (Al Bayt Stadium) match] | 0-1 |
| December 4 | France | Denmark | ملعب الجنوب | - | - |
| December 7 | Spain | Costa Rica | Ahmed bin Ali Stadium | [Image of Spain 1-0 Costa Rica (Ahmed bin Ali Stadium) match] | 1-0 |
| December 7 | Germany | Japan | Al Thumama Stadium | - | - |
| December 8 | Costa Rica | Spain | Khalifa International Stadium | [Image of Costa Rica 0-1 Spain (Khalifa International Stadium) match] | 0-1 |
| December 8 | Germany | Japan | Ahmed bin Ali Stadium | [Image of Germany 0-1 Japan (Ahmed bin Ali Stadium) match] | 0-1 |
| December 11 | Belgium | Morocco | أحمد بن علي Stadium | - | - |
| December 11 | Canada | Croatia | Al Bayt Stadium | [Image of Canada 2-0 Croatia (Al Bayt Stadium) match] | 2-0 |
| December 12 | Morocco | Canada | Lusail Iconic Stadium | - | - |
| December 12 | Belgium | Canada | 교육도시 스타디움 | - | - |