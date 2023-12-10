# Ex 1 and 2 (Domain specific and Dataset)

## Identify the Domain and Available Data
### Understand the domain or subject matter for which the visualization tool will be created. Gather information about the available data sources, their types, and relevance to the domain.

One possible candidate to be end-user from the domain (FIFA world cup 2022)

- **Domain: FIFA Worldcup 2022**
- Subject for visualization: 
  - Fan engagement (With twitter feeds combined)
  - Player performance
  - Match analysis
  - Historical data comparison

Available data:
- Match
  - penalty scores (home, away)
  - score (home, away)
  - shots performanced by home and away
  - passes
  - fouls
  - ...
- Twitter
  - Twitter account details
  - Twitter urls and contents posted by those accounts
- Historical data
  - matches from 1930 to 2022
- Team
  - data
- Team group stats
- Prediction
- Penalty shootouts
- Player insight

## Define the Goal of the Visualization Tool
### Envision the primary purpose or goal that the visualization tool aims to achieve. This should be framed from the user's perspective. Consider the different types of goals visualizations can serve, such as exploration, analysis, presentation, decision-making support, etc.

Story telling visualization with interactive dashboard (To maximize the strong point of visualization techniques)
Guided tours for Enthusiasts to be explained with match highlights, player performances, and fan sentiments in a narrative format.

## Identify Target Users
### Define the specific audience or users who will interact with the visualization tool. Consider their needs, roles, expertise level, and how they will utilize the tool to achieve their objectives within the domain.

Potential Audience: FIFA enthusiasts in studying sports trends, and fan behavior


## Justify Visualization Over Other Solutions
### Explain why a visualization tool is the most suitable solution for achieving the defined goal within this domain. Compare it to other potential solutions like automatic data processing, explaining why visualization is more effective or appropriate.

Possible visualization techniques
- Time series analysis
- Network graphs
- Parallel Coordinates
- Word Clouds and Sentiment Analysis
- Parallel Coordinates
- Heatmaps and Chord Diagrams
- Interactive Dashboards

Given the goal be the story telling visualizatio nwith an interactive dashboard, we can choose the aforementioned technique.

All techniques have pros and cons as shown below:
...

Given we maximize visualization technique potential we give our audience that automatic solution cannot provide.
As well as what numbers let alone cannot be captured by automatic solution.

We may present fan engagement, player performance, and match highlights.

# Ex 3

Attributes from ...
- Match data
- Twitter tweets
- Player details
- team


# Ex 4

Munzner's framework (a.k.a. nested model)

Domain Problem:

At the top level, this refers to the real-world problem or domain that needs to be understood or solved using data visualization. It involves understanding the context, goals, and questions relevant to the problem domain.

Data Abstraction:

This level deals with the abstracted view of the data. It involves transforming raw data into a structured format suitable for visualization. This includes selecting relevant attributes, cleaning, filtering, aggregating, and preprocessing the data for visualization.

Certainly! In the context of Munzner's framework, the "Data Abstraction" phase involves transforming raw data into a structured format suitable for visualization. Here's a summarized table for the data abstraction process:

| Data Abstraction Phase | Description |
|------------------------|-------------|
| **Data Types**         | Identify data types (e.g., numerical, categorical, temporal) present in the dataset. Understand the nature of each attribute to determine suitable visualization techniques. |
| **Attributes**         | List and categorize attributes based on their relevance to the visualization goal. Distinguish between dimensions (e.g., factors, categories) and measures (e.g., quantities, counts) to guide visual encoding choices. |
| **Data Transformation** | Apply data cleaning, filtering, and preprocessing techniques to handle missing values, outliers, or inconsistencies. Aggregate or summarize data if necessary for effective visualization. |
| **Hierarchies**         | Explore hierarchical structures within the data (if any), such as nested categories, temporal hierarchies, or organizational structures. Determine how hierarchies can be visualized for clearer representation. |
| **Dependencies/Relationships** | Identify dependencies or relationships between attributes. Understand correlations, associations, or causal relationships that may impact the visualization design. |
| **Scale and Range**     | Analyze the scale and range of numerical data to determine appropriate scaling methods. Consider log scales, normalization, or binning for effective visualization of data distributions. |
| **Temporal Aspects**    | Assess temporal aspects if present (e.g., timestamps, time series). Determine how time-related data will be represented, considering trends, patterns, or seasonality. |
| **Spatial Considerations** | If applicable, understand spatial aspects of data (e.g., geographic coordinates, regions). Decide how spatial data will be visualized, such as maps or spatial relationships. |
| **Data Reduction**      | Explore methods for reducing data complexity while preserving essential information. Techniques like sampling, aggregation, or dimensionality reduction can be employed. |
| **User Requirements**   | Consider user-specific requirements or preferences that might influence data abstraction choices. Ensure that the abstracted data aligns with the users' needs and goals. |

This summarized overview provides a comprehensive understanding of the key steps involved in the data abstraction phase according to Munzner's framework. Each step is essential in preparing the data for effective visualization design and decision-making in subsequent phases.

Certainly, in the context of Munzner's framework, the "what" refers to the Data Abstraction phase, where the raw data is transformed into a structured format suitable for visualization. Below is a summarized version in the form of a table representing the general overview of data abstraction:

| Data Abstraction Overview               | Description                                                                         |
|----------------------------------------|-------------------------------------------------------------------------------------|
| **Data Types and Attributes**           | Identify the types of data (e.g., numerical, categorical) and specific attributes.   |
| **Data Reduction and Aggregation**      | Apply techniques to reduce data size and complexity, aggregate if necessary.         |
| **Data Transformation and Cleaning**    | Transform raw data into a suitable format, handle missing values, and outliers.      |
| **Temporal and Spatial Abstraction**    | If applicable, abstract temporal and spatial dimensions for clarity and analysis.   |
| **Hierarchical Structures**             | Identify hierarchies within the data, if any, for effective representation.          |
| **Data Encoding Considerations**        | Determine suitable encoding for each attribute (e.g., position, color, size).       |
| **Linking and Brushing Strategies**     | Plan for linking data elements and brushing interactions to support exploration.      |
| **Coordinate Systems and Scales**      | Choose appropriate coordinate systems and scales for accurate representation.        |
| **User-Defined Parameters**             | Consider allowing users to set parameters for customizing the visualization.         |
| **Data Validity and Completeness**      | Ensure data validity and completeness, handle potential issues in the dataset.      |

This table provides a broad overview of the considerations and tasks involved in the "what" phase of data abstraction according to Munzner's framework. The specifics would depend on the characteristics of the domain, the nature of the data, and the goals of the visualization.


Visual Encoding and Interaction:

Here, the abstracted data is mapped to visual properties (e.g., position, size, color, shape) to create visual representations (such as charts, graphs, maps). Interaction techniques, like zooming, filtering, or linking, are also applied to enable users to explore the visualizations.

Rendering and Display:

This is the lowest level, focusing on the actual rendering of the visual elements on the screen or output device. It involves the graphical rendering of the visual representations created in the previous level for users to perceive and interact with.

Justification to 