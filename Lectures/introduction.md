# Introduction

Important notes from lecture...

"The art of making the unseen visible" - Clifford Pickover

**What is visualization?**\
Visualizing patterns, trends or things that cannot be seen without visualization. Understanding the data.

**SequoiaView** - InfoVis 1999\
Tree like structure where we see the list of files inside a computer.

**Numbers do not tell the whole story** - Anscombe's Quartet

Ref: http://blog.revolutionanalytics.com/2017/05/the-datasaurus-dozen.html

**Why human in the loop?**
    
    People are involved in visualization system for the interpretation of the what data is depicting. The system is purposed for those people to give inspiration by what is shown in data and to carry out tasks more effectively.
    	
Visualization is a recommended step to take for questions that are not well-defined or are complex that needs more insight to the data.

**Automatic Data Analysis**: An alternative methods to visualization
- Understand reality through models and measurements $\rightarrow$ May be causing bias in assumption
- Easily compare the quantitatives
- Handle effectively large amounts of data and computations.
- Don't get tired unless it doesn't have the power.
- Make objective decisions

**Measurements... How objective are they? Goodharts Law**\
KPI example: Nail factory\
E.g. Russian factory to produce nails and these are the KPIs:
- Optimizing weight
  - They made heavy nails
- Changed the KPIs to optimize amount
  - Small but lots

**Goodharts Law**: When a measure becomes a target, it ceases to be a good measure.\
When a problem is complex, it is challenging to define a measurement to set objectives to accomplish success in solving its problem. 

**Data visualization goal** is not making pretty pictures but make useful pictures for understanding complex problems.

What is a **Data Visualization** as in computer science field?\
A cognitive process...
- Visualization as such is rather old... Often an intuitive step: graphical illustration
  - Cholera Map London - J. Snow, 1854
    - Cholera was spread in london and J.Snow marked where all cases occured in map of London.
  - Russian Millitary Campaign of Napoleon - C.J. Minard, 1869
    - Visualized the flow of troop whereabouts and the size of the troops with map.
      - Sankey Diagram

Infographics: how you communicate data by means of visualization

**Showing the data has an impact**
* Gun ownership in NY counties: John Satasko http://vimeo.com/98986594
* Eurovis 2022 Capstone: Angela Morelli (What is the impact of the climate change?)
* Hans Roesling - GapMinder http://vimeo.com/98986594 
  * Topic: The value of visualization ... and why interaction matters by John Stoska
    * Instagram data visualization - Chloe Xie
      * Follow-up Question? How do I get more likes from audience?
    * A man's got to know his limitation
    * Thought
      * If you can articulate very precisely what you're seeking, visualization likely isn't your best approach.
      * Application of Visualization
        * Presentation
          * Communicate data and ideas
          * Explain and inform
          * Provide evidence and support
          * Influence and persuade
          * **Goals**
            * Clarify
            * Focus
            * Highlight
            * Simplify
            * Persuade
            * **Find interesting story of data**
            * Examples
              * An Inconvenient truth - Global warming visualition by Gore
                * Simple graphics to point about global warming whereabouts
        * Analysis
          * Exploring the data
          * Assess a situation
          * Determine how to proceed
          * Decide what to do
          * **W. Cleveland:** Contained within the data of any investigation is information that can yield conclusions to questions not even originally asked. That is, there can be surprises in the data... To regularly miss surprises by failing to probe thoroughly with visualization tools is terribly inefficient because the cost of intensive data analysis is typically very small compared with the cost of data collection.
          * **Goal**
            * Show many variables (Depends on what we would like to focus on based on the topic of the data)
            * Illustrate overview and detail
            * Facilitate comparison
        * Explanatory
        * Exploratory
          * Very useful to formulate questions or topics to focus
      * **Visualization's value** - John Stasko, Georgia Institute of Tech
        * Value = T + I + E + C
          * **T**ime: Ability to minimize the total time needed to answer a wide variety of questions about the data
            * Doing it without using SQL or some form of query language for example
            * What kind of questions?
              * "Low-level" tasks
                * Retrieve value
                * Filter
                * Compute derived value
                * Find extremum
                * Sort
                * Determine range
                * Characterize distribution
                * Find anomalies
                * Cluster
                * Correlate
          * **I**nsight: Ability to spur/stimulate and discover insights or insightful questions about the data.
            * What is **insight**?
              * Individual observation about the data by the participant, a unit of discovery of unexpected, Deep, complex, qualitative.
              * Knowledge building, model-confirmation
          * **E**ssence: Ability to convey an overall essence or take-away sense of the data
            * 데이터의 전체적인 본질이나 감각을 전달하는 능력
              * 예: 여러 가지 색깔 블록이 들어있는 큰상자가 있다고 상상해봐요. 빨간 블록도 있고, 파란블록도 있고, 다양한 블록들이 있어요. 이 블록들에 대해 친구들에게 말하고 싶지만 너무 다양해서 어렵습니다. 하나씩 모두 이야기를 할 필요는 없지만, 대신에 가장 특별한 블록들을 보여줄 수 있어요. - 가장 큰 블록이나 가장 반짝거리는 블록이나 재미있는 모양의 블록 등등. 그러면 친구들은 블록을 하나한 보지 않아도 우리 상자에 뭐가 들어있는지 빠르게 케치 할수 있어요.
          * **C**onfidence: Ability to generate confidence and trust about the data, its domain and context
          * **CiteVis**
            * Tried to visualize citations.
              * Internal are visualize dark dots
                * Moving mouse on each dot interactively changes the color of dots.
        * Data visualization 101
          * Problem: You have a lot of data (&amp; attributes) to understand
          * Do you?
            * Pack all the data into one complex representation
            * Spread the data into multiple coordinated views
            * Use interaction to reveal different subsets of the data
        * **Why interaction?**
          * Interaction is Vital
          * Fundamental nature: Equal sibling with representation or subordinate facilitator
          * Intent
            * Select
            * Explore
            * Recognition
            * Encode
            * Abstract/Elaborate
            * Filter
            * Connect
          * How manifested (겉으로 드러내다) today? What is done with the interaction?
            * Chad Stolper PHD Vis student
            * Tooltips & selection
              * Get details
            * Navigation
            * Brushing & linking
          * How to give more interaction?
            * Employ interaction in a more fundamental manner to strengthen the power of visualization.
            * CiteVis
              * Minus you have to interact with the dots to visualize relations
              * Plus
            * E.g. for inspiration "Dust and Magnet" - Yi, Melton, Stasko & Jacko
              * Move around the "magnet" (Topic of relevance) and the dust represent data.
              * Hover around the dust attracts them to be attracted to the magnet.
          *  OnSet - new system
             *  Interaction - set visualization
             *  Blood samples of the 10 whale sharks
             *  1000 compounds
             *  "Set problem"
             *  Each block is a set
                *  Black means that amino acid compound does not exist in that shark sample.
             *  Block can be shown as exclusive or inclusive.
             *  What do you interact with?
                *  Traditional - desktop: keyboard, mouse
                *  New - tablet: fingers and multitouch
                   *  TouchWave
                   *  Scatter plot - Sadana 2014
          *  Key open problems in Visualization 
               1. Assess and communicate **value**
                  1. Value = T + I + E + C
               2. Make the construction of visualizations easier
                  1. SketchStory  2013
                  2. Lyra 2014
               3. Address real world "big" domain problems, e.g. Weather, floods, health, emergencies, and etc.
        * Take aways (Conclusions)
          * Visualization is not for a few precise, concerte tasks
            * Exploratory data analysis
          * Presentation &amp; analysis, related but different
          * Value = T+I+E+C
          * Interaction provides power, use it 
        * Bar charts is where its all about.












**Visualizations - Three types of Goals**\
Explore
- Nothing is known,
- Vis. used for data exploreation: Recall Stokas' value = T + I + E + C

Analyze
- There are hypothese,
- Vis. used Verification or Falsification

Presntation
- Communication

**Presentation Vs Exploration**
Infographics:
- Static (often) vs interactive
- Explanation vs explorative
- Made by data journalist vs domain expert
- Viewed by lay audience vs domain expert

Main difference is giving more insight in presentation and more domain focused

Visualcomplexity.com
Kentico.com

**Data visualization - multidisciplinary**\
Many varied experts are working together: optimization, application domain, **perception**, numerical analysis, computer graphics, image processing, algorithms, infographics, machine learning, human computer interaction. **Understand application of domain** is important.

Visualization field: InfoVis vs SciVis
<center>

| InfoVis | SciVis |
|-|-|
| Abstract data.<br> No spatial reference. | Spatial data.<br>Spatial reference |
|N-dimensional. Heterogeneous| Mostly 2D or 3D |
|Numerical, text, imgs, multimedia| Scientific, engineering, biomedical |

</center>

**Visualization Design**\
* Huge space of design alternatives
  * Tradeoffs abound
  * interaction + plots
  * Understanding the domain is the key
* Many possibilities now known to be ineffective
  * avoid random walk through the possibilities
  * avoid some of known mistakes
  * extensive experimentation has already been dome
* Guidelines continue to evolve
  * We reflect on lessons learned in design studies
  * Iterative refinement

**Visualization Design Process**\
Start as big as possible and then narrow down.

**Validation is difficult**
* How do you know if the visualization design works? $\rightarrow$ Subjective and individual have their own preference in their perception.
* What sort of tasks do you need to evaluate a system?
  * Intended users?
  * Benchmark datasets?

**Validation Design (Nested model)**
1. Domain situation
2. Data/Task abstraction
3. Visual encoding/interaction idiom
4. ALgorithm