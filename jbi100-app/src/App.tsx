import React, { Component, RefObject } from 'react';
import * as d3 from 'd3';
import jsonData from './dataset/player_defense.json'; // Import JSON data
import LinePlot from './my_components/LinePlot';

interface PlayerData {
  player: string;
  position: string;
  team: string;
  age: string | number;
  birth_year: string | number;
  minutes_90s: string | number;
  tackles: string | number;
  tackles_won: string | number;
  tackles_def_3rd: string | number;
  tackles_mid_3rd: string | number;
  tackles_att_3rd: string | number;
  dribble_tackles: string | number;
  dribbles_vs: string | number;
  dribble_tackles_pct: string | number;
  dribbled_past: string | number;
  blocks: string | number;
  blocked_shots: string | number;
  blocked_passes: string | number;
  interceptions: string | number;
  tackles_interceptions: string | number;
  clearances: string | number;
  errors: string | number;
  [key: string]: string|number;
}

class App extends Component<{}, {}> {
  private tableRef: RefObject<HTMLTableElement>;

  constructor(props: {}) {
    super(props);
    this.tableRef = React.createRef();
  }

  componentDidMount() {
    const columns = Object.keys(jsonData[0]);

    const table = d3.select(this.tableRef.current!);
    const thead = table.append('thead');
    const tbody = table.append('tbody');

    // Append table header
    thead.append('tr')
      .selectAll('th')
      .data(columns)
      .enter()
      .append('th')
      .text((column: string) => column);

    // Append table rows
    const rows = tbody.selectAll('tr')
      .data(jsonData)
      .enter()
      .append('tr');

    // Append cells in each row
    rows.selectAll('td')
      .data((row: PlayerData) => {
        return columns.map((column) => row[column]);
      })
      .enter()
      .append('td')
      .text((d) => d);
  }

  render() {
    const data = [5, 10, 15, 20, 25] // Sample data

    return (
      <div className="App">
        <h1>Hello world</h1>
        <h2>D3 project</h2>
        
        {/* Including the LinePlot component */}
        <LinePlot data={data} width={800} height={600} marginTop={30} marginBottom={40} marginLeft={60} marginRight={40} />

        <table ref={this.tableRef}></table>



      </div>
    );
  }
}

export default App;
