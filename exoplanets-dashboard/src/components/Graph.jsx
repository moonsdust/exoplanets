import Plot from 'react-plotly.js';
import graph from "../data/mass_radius.json";

const neptune = {
  name: 'Neptune-like',
  // Turns values of specific key into an array 
  x: graph.filter(item => item["cluster"] === 1).map(item => item["Mass (in Earth Mass)"]), 
  y: graph.filter(item => item["cluster"] === 1).map(item => item["Radius (in Earth Radius)"]),
  text: graph.filter(item => item["cluster"] === 1).map(item => item["Host Name"]),
  type: 'scatter',
  mode: 'markers',
  marker: {color: '#63cdda'}, 
  hovertemplate:
  "<b>%{text}</b><br>" +
  "%{yaxis.title.text}: %{y:.0f}<br>" +
  "%{xaxis.title.text}: %{x:.0f}<br>" +
  "<extra></extra>"
}

const type1 = {
  name: 'Gas Giant Type 1: Jupiter-like',
  // Turns values of specific key into an array 
  x: graph.filter(item => item["cluster"] === 3).map(item => item["Mass (in Earth Mass)"]), 
  y: graph.filter(item => item["cluster"] === 3).map(item => item["Radius (in Earth Radius)"]),
  text: graph.filter(item => item["cluster"] === 3).map(item => item["Host Name"]),
  type: 'scatter',
  mode: 'markers',
  marker: {color: '#4b7bec'},
  hovertemplate:
  "<b>%{text}</b><br>" +
  "%{yaxis.title.text}: %{y:.0f}<br>" +
  "%{xaxis.title.text}: %{x:.0f}<br>" +
  "<extra></extra>"
}
const type2 = {
  name: 'Gas Giant Type 2', 
  // Turns values of specific key into an array 
  x: graph.filter(item => item["cluster"] === 2).map(item => item["Mass (in Earth Mass)"]), 
  y: graph.filter(item => item["cluster"] === 2).map(item => item["Radius (in Earth Radius)"]),
  text: graph.filter(item => item["cluster"] === 2).map(item => item["Host Name"]),
  type: 'scatter',
  mode: 'markers',
  marker: {color: '#786fa6'}, 
  hovertemplate:
  "<b>%{text}</b><br>" +
  "%{yaxis.title.text}: %{y:.0f}<br>" +
  "%{xaxis.title.text}: %{x:.0f}<br>" +
  "<extra></extra>"
}

const type3= {
  name: 'Gas Giant Type 3',
  // Turns values of specific key into an array 
  x: graph.filter(item => item["cluster"] === 0).map(item => item["Mass (in Earth Mass)"]), 
  y: graph.filter(item => item["cluster"] === 0).map(item => item["Radius (in Earth Radius)"]),
  text: graph.filter(item => item["cluster"] === 0).map(item => item["Host Name"]),
  type: 'scatter',
  mode: 'markers',
  marker: {color: '#e77f67'}, 
  hovertemplate:
  "<b>%{text}</b><br>" +
  "%{yaxis.title.text}: %{y:.0f}<br>" +
  "%{xaxis.title.text}: %{x:.0f}<br>" +
  "<extra></extra>"
}

export default function ScatterPlot() {
  return (
      <Plot
        data={[neptune, type1, type2, type3]}
        layout={ {
          font: {
            family: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif', 
            color: '#6e9987'
          },
          width: 1200,
          height: 500, 
          title: '<b>Types of Exoplanets in the NASA Exoplanet Archive (As of June 10, 2023)</b>', 
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          scattermode: 'group',
          xaxis: {title: 'Mass (in Earth Mass)', showgrid: false,},
          yaxis: {title: 'Radius (in Earth Radius)', showline: true, showgrid: false,}, 
          legend: {
            x: 0,
            xanchor: 'left',
            y: 1
          }
        }    
        }
        config ={ {displayModeBar: false, responsive: true} }
      />
    )
}
