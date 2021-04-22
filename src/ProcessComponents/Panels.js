import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Button, Dialog } from "@blueprintjs/core";
import { PurchaseItem, SalesItem } from './Items';
import { VeggieForm } from './VeggieForm.js';
import { OrderForm } from './OrderForm.js';

function PurchasePanel(props) {
	const [dialog, setDialog] = useState(false);
	const [processes, setProcesses] = useState([]);
	const [filteredProcesses, setFilteredProcesses] = useState([]);

	// Get list of batchNo.
	useEffect(() => {
		fetch("https://140.119.136.108:4000/purchaseBatchNo")
			.then(response => response.json())
			.then(data => {
				let arr = []
				data.map((item) => (
					arr.push(item.purchaseBatchNo)
				))
				setProcesses(arr)
				setFilteredProcesses(arr)
			});
	}, [props.type]
	);

	useEffect(() => {
		if (props.filter !== '') {
			let filtered = processes.filter(item => item.includes(props.filter));
			setFilteredProcesses(filtered);
		} else {
			setFilteredProcesses(processes)
		}
	}, [props.filter]
	);

	return (
		<Table className="processTable">
			<thead>
				<tr style={{fontSize:17}}>
					<th><Button onClick={() => setDialog(true)} icon="add" minimal={true} large={true}>進貨批號</Button></th>
					<td className="align-middle">卸貨</td>
					<td className="align-middle">驗退貨</td>
					<td className="align-middle">入庫</td>
				</tr>
			</thead>
			<tbody>
				{
					filteredProcesses.map((value) => (
						<PurchaseItem
							type={props.type}
							batchNo={value}
						/>
					))
				}
			</tbody>
			<Dialog
				className="paragraph"
				style={{ width: 400, height: 550 }}
				onClose={() => setDialog(false)}
				title="Data Input"
				isOpen={dialog}
			>
				<VeggieForm fname="addBatchPurchase" />
			</Dialog>
		</Table>
	)
}

function SalesPanel(props) {
	const [dialog, setDialog] = useState(false);
	const [processes, setProcesses] = useState([]);
	const [filteredProcesses, setFilteredProcesses] = useState([]);

	// Get list of orders.
	useEffect(() => {
		// let arr = [
		// 	{customerOrderNo: "0x001", shippingBatchNo: "0x002"},
		// 	{customerOrderNo: "0x011", shippingBatchNo: null}
		// ]
		// setProcesses(arr)
		// setFilteredProcesses(arr)
		fetch("https://140.119.136.108:4000/orderNo")
			.then(response => response.json())
			.then(data => {
				setProcesses(data)
				setFilteredProcesses(data)
			});
	}, [props.type]
	);

	useEffect(() => {
		if (props.filter !== '') {
			let filtered = processes.filter(item => item.customerOrderNo.includes(props.filter));
			setFilteredProcesses(filtered);
		} else {
			setFilteredProcesses(processes)
		}
	}, [props.filter]
	);

	return (
		<Table className="processTable">
			<thead>
				<tr style={{fontSize:17}}>
					<th><Button onClick={() => setDialog(true)} icon="add" minimal={true} large={true}>建立訂單</Button></th>
					<td className="align-middle">出貨批號</td>
					<td className="align-middle">出貨</td>
					<td className="align-middle">賣場收貨</td>
				</tr>
			</thead>
			<tbody>
				{
					filteredProcesses.map((obj) => (
						<SalesItem
							orderNo={obj.customerOrderNo}
							batchNo={obj.shippingBatchNo}
						/>
					))
				}
			</tbody>
			<Dialog
				className="paragraph"
				style={{ width: 400, height: 550 }}
				onClose={() => setDialog(false)}
				title="Data Input"
				isOpen={dialog}
			>
				<OrderForm type="addCustomerOrder" />
			</Dialog>
		</Table>
	)
}

export { PurchasePanel, SalesPanel };