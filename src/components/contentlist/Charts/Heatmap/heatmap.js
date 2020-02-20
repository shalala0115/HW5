import React, { Component } from 'react';
import MyTemplete  from '../../../templete';
import {XYPlot, XAxis, YAxis, HeatmapSeries, Hint} from 'react-vis';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';

class MyHeatmap extends Component
{
  state = {
    value: false
  };
  renderHeat()
  {
    const {value} = this.state;
    const data = [
      {x: 1, y: 0, color: 10},
      {x: 1, y: 5, color: 8},
      {x: 1, y: 10, color: 6},
      {x: 1, y: 15, color: 7},
      {x: 1, y: 20, color: 3},
      {x: 2, y: 0, color: 12},
      {x: 2, y: 5, color: 2},
      {x: 2, y: 10, color: 1},
      {x: 2, y: 15, color: 5},
      {x: 2, y: 20, color: 10},
      {x: 3, y: 0, color: 9},
      {x: 3, y: 5, color: 2},
      {x: 3, y: 10, color: 6},
      {x: 3, y: 15, color: 12},
      {x: 3, y: 20, color: 12}
    ];

    return (
      <div className = "circular-display">
      <XYPlot width={700} height={700} margin={{Bottom: 20, top: 35}}>
      <XAxis />
      <YAxis />
      <HeatmapSeries
        colorRange={["red", "orange"]}
        onValueMouseOver={v => this.setState({value: v})}
        onSeriesMouseOut={v => this.setState({value: false})}
        data={data}
      />
      {value !== false && <Hint value={value} />}
    </XYPlot>
      </div>
    );
  }
  render()
  {
    let output = this.renderHeat();
    let myName = "Heatmap";
    let string = `
    import {XYPlot, XAxis, YAxis, HeatmapSeries} from 'react-vis';

    renderHeat()
    {
      const data = [
        {x: 1, y: 0, color: 10},
        {x: 1, y: 5, color: 8},
        {x: 2, y: 10, color: 1},
        {x: 2, y: 15, color: 5},
        {x: 3, y: 10, color: 6},
        {x: 3, y: 15, color: 12},
      ];

      return (
        <div>
        <XYPlot width={300} height={300}>
        <XAxis />
        <YAxis />
        <HeatmapSeries
          colorRange={["blue", "green"]}
          data={data}
        />
      </XYPlot>
        </div>
      );
    }
    `;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage = {code}/>
      </div>
    );
  }
}

export default MyHeatmap;
