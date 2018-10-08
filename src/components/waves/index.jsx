import React from 'react';
import { VictoryStack, VictoryArea, VictoryContainer } from 'victory';

class Waves extends React.Component {


  render() {
    return (
      
      // <VictoryStack animate={{ duration: 1500 }} style={{
      //   parent: {
      //     position: 'fixed',
      //     left: 0,
      //     right: 0,
      //     top: 0,
      //     bottom: 0
      //   }
        // }}>
        <svg viewBox="50 50 350 350" preserveAspectRatio="none">
        <VictoryArea
          standalone={false}
          data={[{'x': 0, 'y': 22}, {'x': 1, 'y': 1}, {'x': 2, 'y': 5}, {'x': 3, 'y': 21}, {'x': 4, 'y': 22}, {'x': 5, 'y': 40}, {'x': 6, 'y': 47}, {'x': 7, 'y': 2}, {'x': 8, 'y': 40}, {'x': 9, 'y': 22}, {'x': 10, 'y': 22}, {'x': 11, 'y': 45}, {'x': 12, 'y': 19}, {'x': 13, 'y': 5}, {'x': 14, 'y': 6}, {'x': 15, 'y': 22}, {'x': 16, 'y': 17}, {'x': 17, 'y': 4}, {'x': 18, 'y': 27}, {'x': 19, 'y': 41}]}
          interpolation="natural"
          style={{data: { opacity: (datum) => datum.opacity || 1}}}
          domain={{y: [0, 100]}}
          animate={{
            onLoad: {
              duration: 1000,
              before: (datum) => ({
                  _x: datum.x,
                  _x1: datum.x,
                _y1: 0,
                opacity: 0
              }),
              after: (datum) => ({
                _x: datum.x,
                _x1: datum.x,
                _y1: 0,
                opacity: 1
              })
            }
          }}
        />
      </svg>
    );
  }
}

// class Waves extends React.Component {

//   width = 300;
//   height = 150;

//   xIntervals = 200;
//   numWaves = 5;
//   numBumps = 100;

//   bumps = (n, m) => {
//     // Inspired by Lee Byron’s test data generator.
//     function bump(a, n) {
//       const x = 1 / (0.1 + Math.random());
//       const y = 2 * Math.random() - 0.5;
//       const z = 10 / (0.1 + Math.random());
//       for (let i = 0; i < n; ++i) {
//         const w = (i / n - y) * z;
//         a[i] += x * Math.exp(-w * w);
//       }
//     }
//     const a = [];
//     for (let i = 0; i < n; ++i) a[i] = 0;
//     for (let i = 0; i < m; ++i) bump(a, n);
//     return a;
//   }

//   render() {

//     window.d3 = d3;

//     const svg = d3.select("#waves");

//     const x = d3.scaleLinear()
//       .domain([0, this.xIntervals])
//       .range([0, this.width]);

//     const y = d3.scaleLinear()
//       .range([this.height, 0]);

//     const area = d3.area()
//       .x((d, i) => x(i))
//       .y0(d => y(d[0]))
//       .y1(d => y(d[1]));

//     const stack = d3.stack()
//       .keys(d3.range(this.numWaves))
//       .offset(d3.stackOffsetNone)
//       .order(d3.stackOrderNone);

//     const randomize = () => {
//       const layers = stack(d3.transpose(Array.from({length: this.numWaves}, () => this.bumps(this.xIntervals, this.numBumps))));
//       y.domain([
//         d3.min(layers, l => d3.min(l, d => d[0])),
//         d3.max(layers, l => d3.max(l, d => d[1]))
//       ]);
  
//       return layers;
//     }

//     console.log(randomize());
//     // const path = svg.selectAll("path")
//     //   .data(randomize)
//     //   // .transition()
//     //   //   .duration(1500)
//     //   .enter().append("path")
//     //     .attr("d", area)
//     //     .attr("fill", () => d3.interpolateCool(Math.random()));

//     return (
//       <svg id="waves">
//         <path d={`M${randomize()[1]}`}></path>
//       </svg>
//     );
//   }
// }

export default Waves;
