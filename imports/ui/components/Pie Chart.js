import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import { Meteor } from 'meteor/meteor';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class PieChart extends React.Component {

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
		if (bills.length !== 0) {
			let currentBill = this.props.bills.filter(bill => {
				return bill.type === this.props.type
			});
			if (currentBill[0] !== undefined) {
				amount = currentBill[0].amount;
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
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: chartTitle
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}",
				dataPoints: dataPoints
			}]
		}

		return (
			<div>
				<CanvasJSChart options={options}/>
			</div>
		);


	}
}

export default PieChart;