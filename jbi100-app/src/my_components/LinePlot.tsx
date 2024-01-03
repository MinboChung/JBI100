import * as d3 from 'd3';
import * as React from 'react';

interface LinePlotProps {
    data: number[];
    width ?: number;
    height ?: number;
    marginTop ?: number;
    marginRight ?: number;
    marginBottom ?: number;
    marginLeft ?: number;
}

const LinePlot: React.FC<LinePlotProps> = ({
    data,
    width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 30,
    marginLeft = 40
  }) => {
    const gx = React.useRef<SVGGElement>(null);
    const gy = React.useRef<SVGGElement>(null);
  
    const x = d3.scaleLinear<number, number>()
      .domain([0, data.length - 1])
      .range([marginLeft, width - marginRight]);
  
    const y = d3.scaleLinear<number, number>()
      .domain(d3.extent(data) as [number, number])
      .range([height - marginBottom, marginTop]);
  
    const line = d3.line<number>()
      .x((_, i) => x(i))
      .y((d) => y(d));
  
    React.useEffect(() => {
      if (gx.current) d3.select(gx.current).call(d3.axisBottom(x));
    }, [gx, x]);
  
    React.useEffect(() => {
      if (gy.current) d3.select(gy.current).call(d3.axisLeft(y));
    }, [gy, y]);
  
    return (
      <svg width={width} height={height}>
        <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
        <g ref={gy} transform={`translate(${marginLeft},0)`} />
        <path fill="none" stroke="currentColor" strokeWidth={1.5} d={line(data) || ''} />
        <g fill="white" stroke="currentColor" strokeWidth={1.5}>
          {data.map((d, i) => (
            <circle key={i} cx={x(i) || 0} cy={y(d) || 0} r={2.5} />
          ))}
        </g>
      </svg>
    );
  };
  


export default LinePlot;