# Why and task abstraction

## Brief refreshing
- Automated methods for well-defined questions
- Many analysis problems ill-specified, unclear what questions to ask upfront, or how to answer them
- Use visualization to augment human capabilities (Perception &amps; cognition)

Computer-based visualization systems provide visual representations of datasets and interactions designed to help people carry out tasks more effectively.

### Users and data
- To support high-level goals
  - Explore, analyze, and present
- Guide visualization design and validation
- Munzner's nested design model

Domain - Who are the users?
Data/task abstraction - what data and tasks do they have?
Visual encoding/interaction idioms - What visualization and interaction helps them achieve the tasks?
Algorithm - What automated methods can support?

### Data types
Tables - Attributes and items (Products)
Networks - Link and nodes
Fields - Attributes and grid of position (Weather prediction)
Geometry - Positions (Roads and rivers)
Multi-dimensional table - Attributes, instances and keys (Product orders)
Trees - Company organogram

### What defines good visualization
- How well does the visualization present the target goal for the domain?
  - Who is it for? User (Domain expert) --> Speaks domain language
  - What data do we have? Data abstraction
  - To do what? Task abstraction

## Task abstraction
    In order to search for suitable visual representations we need to translate domain language into more abstract structures we know how to encode.

Defining questions are not enough
1. Too vague or not relevant
2. Do not match the proposed solution

### Why do we need task abstraction?
    - Helps visualization designer to reason about a right visualization (encoding).
    - Transform domain specific language into abstract form to reason about similarities and differences.

    - To answer why is the user looking at the visualization. i.e. to Search, compare, see trend, ...

### Tasks provide a contraint on design
- No visual representation supports all tasks
- Different for users, one might work in one situation and not the other
- Depend on the goal of the visualization

### Task is a tuple
Actions &amps; Targets

#### Actions
##### Analyze
- Consume: 소비는 정보를 찾아보고 이해하며 공유하는 과정
  - Discover 탐구: 새로운 정보와 통찰력을 발굴하는 과정에 참여합니다.
    - Find new knowledge: 새로운 정보를 활동적으로 찾습니다.
    - Generate hypothesis: 발견한 데이터를 기반으로 가설을 만듭니다.
    - Verify: 생성된 가설의 정확성과 신뢰성을 확인합니다.
  - Present 다른 사람들과 효과적으로 발견한 것을 공유합니다.
    - Communication of information: 통찰과 발견한 내용을 전달합니다.
  - Enjoy: 시각적 표현을 통해 자연스럽게 살펴보고 깊은 이해를 합니다.
    - Casual encounters with a visualization: 시각적 표현을 통해 쉽게 이해하고 깊이 이해합니다.
- Produce 생산: 생산은 기존 데이터와 시각화를 향상시키고 보존하며 새로운 통찰을 창출하는 과정
  - Annotate: 기존 시각화나 데이터에 내용이나 세부 정보를 추가합니다.
    - Addition of graphical or textual annotations to existing vis/data
    - Typically manual
  - Record: 미래에 참조하거나 분석할 수 있도록 시각화 요소를 보존합니다.
    - Save/Capture visualization elements as persistent artifacts: 지속적인 찹조를 위해 시각적 히스토리나 스냅샷을 저장합니다.
    - E.g., graphical history
  - Derive 도출: 기존 데이터를 활용하여 새로운 데이터 요소를 생성합니다.
    - Produce new data elements based on existing data elements: 사용가능한 데이터를 활용하여 새로운 통찰이나 정보를 생성합니다.

이렇게 소비는 정보를 찾아보고 이해하며 공유하는 과정을, 생산은 기존 데이터와 시각화를 향상시키고 보존하며 새로운 통찰을 창출하는 과정을 의미합니다.

##### Search
|| Target known | Target unknown |
|-|-|-|
|**Location known**|Lookup: Directly find or search for the known target in a known location|Browse: Explore the known location to find something when you are not exactly sure what you are looking for|
|**Location unknown**|Locate: Discover the location of the known target which is not immediately evident.|Explore: Investigate to understand an unknown target in an unknown location|

##### Query
- Identify: Identify characteristics of a single target
- Compare: Compare multiple targets
- Summarize:
  - Summarization of all possible targets
  - Provide an overview

#### Targets
##### All data
- Trends
  - High-level characterization of a pattern in the data
  - Increase, decrease, peak, valley, plateaus...
- Outliers
  - Data that does not fit with backdrop or normal behavior.
- Features
  - Particular structures of interest
  - Task and data dependent.

##### Attributes
- One
  - Distribution
  - Extremes
- Many
  - Dependencies
  - Correlation
  - Similarity


##### Network Data
- Topology: The arrangement, structure or layout of a computer network. It defines how different nodes (Such as computers, servers, or devices) are connected and how data is transmitted between them.
  - Network topology describes the physical or logical layout of the network and can be represented in various forms:
    - Physical: This refers to the actual physical layout of devices and cables. It also includes configurations like bus, star, ring, mesh or hybrid topologies showing how devices are physically connected.
    - Logical: This refers how data is transmitted in the network.

Paths for each node from one to another

##### Spatial Data
Shape: understanding and comparing geometric shape

## Task abstraction examples
**User**: data scientist\
**Task**: "I am developing ML classification models and I need **to convince the executive board that my time is well spent** (Demand) because the **performance of my model keeps getting better.**"
- Action: Present
- Target: Trend (Keeps getting better (Time involved))

**User**: Bank employee\
**Task**: "I want **to find out (To seek not to derive) if money laundering structures are happening in our financial transaction data.**"
- Action: Discover and find new knowledge (This is wrong perspective thought according to Munzner: Produce (e.g. Annotate))
- Target: Network data (i.e. Topology), or Multidimensional data

Discover is an action of seeking, exploring, understanding new information i.e. patterns, anomalies or insights.

**User**: Quality assurance manager\
**Task**: "I need **to understand** if **all our products are of the same quality**"
- Action:  Summarize( or Discover)
- Target:  Similarity( or Outliers)

Discover typically involves exploring and seeking new insights or patterns within the data. It's about finding previously unknown information or gaining a deeper understanding through exploration.\
Summarize, on the other hand, involves actions related to aggregating, comparing, or presenting existing information in a condensed or summarized form. It often focuses on organizing and presenting insights or characteristics that are already known or available within the data.

**User**: Movie enthusiast\
**Task**: "I am interested in making a short list of horror movies that I want **to view** that are **highest rated by users**"
- Action: Browse
- Target: Signle attribute $\rightarrow$ Extremes

If present is a correct answer, here is why: "Present involves tasks related to communicating or presenting information effectively. In this scenario, the person wants to create a shortlist, which involves the action of organizing information (highest-rated horror movies) in a way that aids decision-making. To decide on the movies to view, the person needs to compile a list based on specific criteria (highest user ratings), which involves structuring and possibly visualizing data to make informed choices. This aligns with the action of Present, as it involves organizing data for the purpose of decision-making or selection."

Present is to create a comprehensive report summarizing results. While Browsing is to explore dataset of the movies to get the sense of data.

**User**: Investor\
**Task**: "I want **to contrast the prognosis of stocks of the past year** in the technical domain to the entertainment industry **to determine where I can best invest in**"
- Action: Query (Compare)
- Target: Similarities

**User**: Biology scientist\
**Task**: "We measured for three different groups of penguins on Antarctica the culmen length, culmen depth, flipper length and body mass, we are **wondering if there is** **a difference between the species, and on what level**"
- Action: Explore
- Target: Distributions

**User**: Virologist\
**Task**: "I need **to find** the municipalities in Noord-Brabant with the highest number of COVID infections to prevent further spread"
- Action: Browse
- Target: Extremes

What (Data abstraction) + Why (Task abstraction) = How (Visual Encoding + Interaction)