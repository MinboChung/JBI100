# Visual Encoding
`How is it shown?`
## Analysis frameworks
<p>Visual encoding and interaction idiom: Chapter 5</p>

## Notes from book Tamura
|Section| Title | Description |
|------|--------|-------------|
| 5.1  | The big picture | <ul><li>Marks are basic geometric elements that depict items or links</li><li>Channels control their appearance.</li><li>The effectiveness of a channel for encoding data depends on its type: the channels that perceptually convey magnitude information are a good match for ordered data, and those that convey identity information with categorical data</li><li>Fig 5.1 summarizes the channel rankings.</li></ul>
|5.2| Why marks and channels?| To aid in analyzing visual encodings. The core design space of visual encodings can be described as an orthogonal combination of two aspects: marks (Geographical elements) and channel (Controlling their appearance). |
|5.3| Defining Marks and Channels| <ul><li><b>Marks</b> are basic grahical elements in an image (They are geometric primitives). 0D = a point, 1D = a line, 2D = an area, 3D = a volume</li><li><b>Channel</b> is a way to control the appearance of marks independent of the dimensionality of the geometric primitive. Position (Some pertaining planar positions), Curvature, Color (Also luminance, saturation), shape, Tilt, Size (for each dimension of marks) and motion</li></ul> <p>A signle quantitative attribute can be encoded with vertical spatial position. Bar charts (common example encoding): The height of the bar conveys a quantitative value for that attribute. Bar charts show two attributes but only one is quantitative: the other is the categorical attribute as axis to spread out the bars along the axis.</p>|

### 5.4 Using Marks and Channels: The reason I read this book
Marks as:
- Items/Nodes: Marking positions in each different dimension
- Links: Containment (Nesting) or connection between nodes
#### 5.4.1 Principles
- Expressiveness: the visual encoding should express all of, and only, the info in the dataset attributes.
- Effectiveness: Attributes' importance should match the salience of the channel; that is, its noticeability (Channel rankings).
  - Meaning, accuracy (Bias: Steven's psychophysical power law), discriminability, separability, popout 

#### Summary: How can we select visual encoding?
- Expressiveness principle
  - Show all but mainly what is in the data
  - Match the channel/mark to data characteristics
- Effectiveness principle (salience):
  - Encode most important attributes with highest ranked channels
- Rankings based on:
  - Accuracy, discriminability, separability, popout

#### 5.5 Channel effectiveness

**IMPORTANT**

##### 5.5.1 Accuracy
`How close is human perceptual judgement to some objective measurement of the stimulus?`
Explained briefly below in `Stimuli - how people perceive each stiumulus`

##### 5.5.2 Discriminability
`If you encode data using a particular visual channel, are the differences between items perceptible to the human as intended?`
The characterization of visual channel thus should quantify the number of `bins` that are available for use within a visual channel, where each bin is a distinguishable step or level from the other. 

##### 5.5.3 Separability
In the book, Figure 5.10. Pairs of visual channels are shown from fully separable to intrinsically integral.\
Channels: 
- Color and position are fully separable: Well suited to encode different data attributes for two different groupings that can be selectively attended to.
- Size and color are separable but has a interference when the size is significantly small to perceive.
- Sizes in width and height give integrated perception of area of the mark. Same interference note as mentioned previously (Common size problem).
- Unified color scale is necessary and bins as well to show color channel (Red to Green) --> 

##### 5.5.4 Popout
`Visual popout is often called preattentive processing or tunable detection`
- Pre-attentive vision
  - Color or shape alone: preattentive
  - Combined hue and shape: nonpreattentive
- Serial seach: Checking each item, one by one.

## Visual Channel Rankings (Munzner's): From Bard

|Categorical|Ordered|
|-|-|
|<ul><li>Spatial region</li><li>Color hue</li><li>Motion</li><li>Shape</li></ul>|<ul><li>Position on common scale</li><li>Position on unaligned scale</li><li>Length (1D size)</li><li>Tilt/angle</li><li>Area (2D size)</li><li>Depth (3D position)</li><li>Color luminance</li><li>Color saturation</li><li>Curvature</li><li>Volume (3D size)</li></ul>|

1. Marks: These are the basic geometric elements that depict items or links.
   1. Points: Used to represent individual items or observations
   2. Lines: `` Relationships between items
   3. Bars: `` Scalar values
   4. Areas: `` Cumulative values
   5. Nodes: `` Individual items or observations in a network
   6. Links: `` Relationships between items in a network.
2. Channels: These are the visual attributes that are used to encode data.
   1. Color: Used to represent cateogrical data, ordinal data and quantitative data.
   2. Size: `` Quantitiative data
   3. Shape: `` Categorical or ordinal data
   4. Position: `` Quantitative data in 2 or 3D space
   5. Orientation: `` Ordinal data
   6. Text: `` Textual data
3. Mappings: These are the rules that specify how data is mapped to visual elements and channels.
   1. Identity mapping: A mapping where the value of a data item is directly mapped to the visual attribute.
      1. E.g.: 
   2. Ordered mapping: A mapping where the values of data items are mapped to the visual attribute such that the ordering of data items is preserved.
   3. Quantile mapping: A mapping where the values of data items are mapped to the visual attribute such that the distribution of data items is preserved.

## Stimuli - how people perceive each stimulus
Steven's Psychophysical Power Law $S=k*I^P$
- $S$ - Perceived sensation
- $k$ - A constant that depends on the sensory modality and the units of measurements
- $I$ - Intensity stimuli
- $P$ - Exponent (Empirically Determined) ranged between $[0.3, 1.0]$ 

|Sensory modality| Exponent |
|-|-|
|Loudness| 0.6 |
|Brightness|0.5|
|Heaviness|0.69|
|Sweetness|1.11|
|Saltiness|0.79|
|Sourness|0.59|
|Pungency|0.43|
|Temperature|0.63|
|Saturation|1.7|
|Electric Shock|3.5|
|Length|1|
|Area|0.7|
|Depth|0.67|

- $0 \le x<1$: Underestimate
- $x=1$: Unbias
- $x>1$: Overestimate


Models the **relationship** between the **magnitude** of a physical stimulus and its perceived intensity. Predicts bias, not necessarily accuracy.

Sensitivity: People tend to underestimate Area, Depth and Brightness, unbiased in length and overestimate electric shock and saturation.


# Separability vs. Integrality

According to Munzner's encoding, 

```{Python}
# Separability
The ability to attend to an encode specific data attributes independently of each other.
Separable unit = Color and size


# Integrality
The tendency of the human visual system to group and percieve multiple visual features as a signle unit.

Pie chart: Pie 1 unit and color 1 unit but we see them the same

```
| Channel | Separability | Integrality | Example |
|---|---|---|---|
| Position | Fully separable | No interference | Scatterplot |
| Hue (Color) | Some interference | No interference | Color-coded maps |
| Size | Some interference | Some interference | Bubble charts |
| Shape | Some interference | Some interference | Line charts |
| Width and Height (of shapes) | Some/significant interference | Major interference | 3D scatterplots |
| Hue (Color) and Area (of shapes) | Major interference | Major interference | Color-coded pie charts |
| Red and Green | Major interference | Major interference | Color-coded data sets with many similar values |
