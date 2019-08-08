import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import { Meteor } from 'meteor/meteor';
import { Bills, Notes } from '../../api/notes';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class PieChartWithCustomization extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		Meteor.subscribe('users');

		let chartTitle = 'loading';

		if (this.props.type !== undefined) {
			chartTitle = this.props.type;
		}

		let bills = this.props.bills;

		let amount = 3;
		let dueDate = 0;
		if (bills.length !== 0) {
			let currentBill = this.props.bills.filter(bill => {
				return bill.type === this.props.type
			});
			if (currentBill[0] !== undefined) {
				amount = currentBill[0].amount;
				dueDate = JSON.stringify(currentBill[0].date);
			}
		}

		let groupMembersArray = [];

		let dataPoints = [];

		if (this.props.groups[0] !== undefined) {
			groupMembersArray = this.props.groups[0].members;
			console.log('group members array: ' + groupMembersArray);

			groupMembersArray.forEach(function (userID) {

				if (Meteor.users.find({ _id: userID }).fetch()[0] !== undefined) {
					let userName = Meteor.users.find({ _id: userID }).fetch()[0].profile.fname;

					console.log(Meteor.users.find().fetch());
					console.log('userName: ' + JSON.stringify(userName));
					console.log('userID: ' + userID);

					if (userName !== undefined) {
						const currentData = {};
						currentData["label"] = userName;
						currentData["y"] = Math.ceil(amount / 3);
						dataPoints.push(currentData);
					};
				}


			});
		}

		const options = {
			theme: "light2",
			animationEnabled: true,
			exportFileName: chartTitle,
			exportEnabled: true,
			title: {
				text: chartTitle
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}</strong>",
				indexLabel: "{y}",
				indexLabelPlacement: "inside",
				dataPoints: dataPoints
			}]
		}

		return (
			<div>
				<p> due date: {dueDate}</p>
				<CanvasJSChart options={options}
				/* onRef={ref => this.chart = ref} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}

export default PieChartWithCustomization;