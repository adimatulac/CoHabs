import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class PieChart extends Component {
	render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Rent"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}",
				dataPoints: [
					{ y: this.props.bills.amount / 3, label: "Angelli" },
					{ y: 500 / 3, label: "Jason" },
					{ y: 500, label: "Jess" },

				]
			}]
		}

		return (
			<div>
				{/* <h1>React Pie Chart</h1> */}
				<CanvasJSChart options={options}
				/* onRef={ref => this.chart = ref} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}

export default PieChart;