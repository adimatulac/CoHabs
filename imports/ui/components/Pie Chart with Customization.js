import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import { Meteor } from 'meteor/meteor';
import { Bills, Notes } from '../../api/notes';
const moment = require('moment');


var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class PieChartWithCustomization extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		Meteor.subscribe('users');

		let chartTitle = 'loading';
		let bills = this.props.bills;
		let propType = this.props.type;
		let amount = 3;
		let dueDate = 0;
		let paid = "";
		let paidMembers = [];
		let unpaidMembers = [];

		if (bills.length !== 0) {
			let currentBill = this.props.bills.filter(bill => {
				return bill.type === this.props.type
			});
			if (currentBill[0] !== undefined) {
				amount = currentBill[0].amount;
				dueDate = moment(currentBill[0].date).format('ddd, MMMM D YYYY');
				paidMembers = currentBill[0].paidMembers;
				console.log("paid members" + paidMembers);
				unpaidMembers = currentBill[0].unpaidMembers;
				console.log("unpaid members" + unpaidMembers);
			}
		}

		if (this.props.type !== undefined) {
			chartTitle = this.props.type;
		}

		let groupMembersArray = [];

		let dataPoints = [];

		if (this.props.groups[0] !== undefined) {
			groupMembersArray = this.props.groups[0].members;
			console.log('group members array: ' + groupMembersArray);

			groupMembersArray.forEach(function (userID) {

				if (Meteor.users.find({ _id: userID }).fetch()[0] !== undefined) {
					let userName = Meteor.users.find({ _id: userID }).fetch()[0].profile.fname;
					let userId = Meteor.users.find({ _id: userID }).fetch()[0]._id;

					console.log(Meteor.users.find().fetch());
					console.log('userName: ' + JSON.stringify(userName));
					console.log('userID: ' + userID);
					if (unpaidMembers.includes(userId)) {
						if (userName !== undefined) {
							const currentData = {};
							currentData["label"] = userName;
							// if (paidMembers.includes(userId)) currentData["label"] = "PAID -" + userName;

							currentData["y"] = Math.ceil(amount / groupMembersArray.length);
							//if (paidMembers.includes(userId)) currentData["y"] = 0;

							dataPoints.push(currentData);
						};
					}
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
				showInLegend: false,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>${y}</strong>",
				// indexLabel: "{label} - ${y}" + paid,
				indexLabelFontSize: 16,
				indexLabelFontColor: "white",
				indexLabelPlacement: "inside",
				dataPoints: dataPoints
			}],
			subtitles: [
				{ text: "$" + Math.ceil(amount / groupMembersArray.length) + " each" },
				{ text: "due: " + dueDate },
			]
		}

		return (
			<div>
				<CanvasJSChart options={options}
				/* onRef={ref => this.chart = ref} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}

export default PieChartWithCustomization;