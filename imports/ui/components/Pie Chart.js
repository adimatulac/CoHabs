import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import { Meteor } from 'meteor/meteor';
import { Bills, Notes } from '../../api/notes';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class PieChart extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let chartTitle = 'loading';

		if (this.props.type !== undefined) {
			chartTitle = this.props.type;
		}

		let bills = this.props.bills;

		let amount = 3;
		if (bills.length !== 0) {
			// console.log("this.props.bills: " + JSON.stringify(this.props.bills));
			// console.log("this.props.type: " + this.props.type);
			let currentBill = this.props.bills.filter(bill => {
				// console.log("bill type is: " + bill.type);
				return bill.type === this.props.type
			});

			// console.log('current bill: ' + JSON.stringify(currentBill));

			if (currentBill[0] !== undefined) {
				amount = currentBill[0].amount;
			}
		}

		// console.log('should say rent:' + this.props.type);
		// console.log('bills props: ' + this.props.bills.rent);
		// console.log(Bills.find({}).fetch());

		// let groupMembersArray = [];

		// if (this.props.groups.members !== undefined) {
		// 	groupMembersArray = this.props.groups.members;
		// 	console.log('group members array: ' + groupMembersArray);

		// }

		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: chartTitle
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
					{ y: Math.ceil(amount / 3), label: "Angelli" },
					{ y: Math.ceil(amount / 3), label: "Jason" },
					{ y: Math.ceil(amount / 3), label: "Jess" },


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