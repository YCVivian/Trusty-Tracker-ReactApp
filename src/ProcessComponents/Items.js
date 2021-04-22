import React, { useState, useEffect, useContext } from 'react';
import { Button, Dialog, Tooltip, Popover } from "@blueprintjs/core";
import { VeggieForm } from './VeggieForm.js';
import { Web3Context } from './Web3Context';
import { ActionDialog } from './ActionDialog';
import {
	abi as orderAbi,
	address as orderAddress
} from './abi_order';

// purchase inspection warehouse sales shipping end

function PurchaseItem(props) {
	const [action, setAction] = useState("PURCHASE");
	const [dialog, setDialog] = useState(false);
	const [states, setStates] = useState({
		clicked: undefined,
		isForm: true
	})

	// const [pending, setPending] = useState(false);
	const purchaseFuncs = {
		PURCHASE: { setter: "updatePurchaseData", getter: "getPurchaseData" },
		INSPECTION: { setter: "updateInspectionData", getter: "getInspectionData" },
		WAREHOUSE: { setter: "updateWarehouseData", getter: "getWarehouseData" },
		SALES: { setter: "addBatchShipping", getter: "getBatchShippingData" }
	};

	const contract = useContext(Web3Context);

	// async call to the contract.
	useEffect(() => { //props.id
		contract.getNextAction(`${props.batchNo}`, (error, result) => {
			setAction(result)
		})

	}, [props.type])

	const handleClick = (value) => {
		if (value === action)
			setStates({
				clicked: value,
				isForm: true
			})
		else setStates({
			clicked: value,
			isForm: false
		})
		setDialog(true)
		// console.log(states.isForm)
	}

	return (
		<tr>
			<td>{props.batchNo}</td>
			{Object.keys(purchaseFuncs).map((value, index) => {
				if (index < Object.keys(purchaseFuncs).indexOf(action))
					return <td className="align-middle"><Button key={index} onClick={() => handleClick(value)} value={value} icon="tick" intent="Success" >{value}</Button></td>
				else if (value === action && value !== "SALES")
					return <td className="align-middle"><Button key={index} onClick={() => handleClick(value)} value={value} icon="add" intent="primary" >{value}</Button></td>
				else if (value !== "SALES")
					return <td className="align-middle"><Button key={index} disabled={true} icon="cross" >{value}</Button></td>
			})
			}
			<Dialog
				className="paragraph"
				style={{ width: 400, height: 550 }}
				onClose={() => setDialog(false)}
				title="Data Input"
				isOpen={dialog}
			>
				{
					states.isForm
						? <VeggieForm address={props.batchNo} fname={purchaseFuncs[action].setter} />
						: <ActionDialog address={props.batchNo} fname={purchaseFuncs[states.clicked].getter} />
				}
			</Dialog>
		</tr >
	);
}

function SalesItem(props) {
	const [dialog, setDialog] = useState(false);
	const [action, setAction] = useState("SALES");
	// const [pending, setPending] = useState(false);
	const [states, setStates] = useState({
		clicked: undefined,
		isForm: true
	})
	const [info, setInfo] = useState({});
	const contract = useContext(Web3Context);

	const salesFuncs = {
		SALES: { setter: "addBatchShipping", getter: "getBatchShippingData" },
		SHIPPING: { setter: "updateShippingData", getter: "getShippingData" },
		CONSIGNMENT: { setter: "addConsignmentData", getter: "getConsignmentData" },
		END: { setter: "end", getter: "end" }
	};

	let orderInfo = {
		"orderNo": "",
		"goodsInfo": "",
		"quantity": 0,
		"customer": "",
		"salesman": "",
		"orderDateTime": 0
	}

	useEffect(() => {
		// 測試：下面註解拿掉，並對result處理BN的問題。
		if (props.batchNo) {
			contract.getNextAction(`${props.batchNo}`, (error, result) => {
				setAction(result)
			})
		}
		let orderContract;
		if (window.ethereum) {
			try {
				orderContract = window.web3.eth.contract(orderAbi).at(orderAddress)
				orderContract.getCustomerOrder(props.orderNo, (error, result) => {
					if (error) {
						console.log(error)
					}
					result.splice(2, 1, result[2].toNumber())
					result.splice(5, 1, result[5].toNumber())
					// console.log(result)
					Object.keys(orderInfo).map((v, i) => {
						orderInfo[v] = result[i]
					})
					setInfo(orderInfo)
				})
				// console.log(orderContract)
			} catch (error) {
				console.log(error);
			}
		}

	}, [])

	const handleClick = (value) => {
		if (value === action)
			setStates({
				clicked: value,
				isForm: true
			})
		else setStates({
			clicked: value,
			isForm: false
		})
		setDialog(true)
		// console.log(states.isForm)
	}

	const orderTooltop = (
		<div style={{ padding: 2 }}>
			{
				Object.keys(info).map(value => {
					return <p style={{ color: 'black' }}>{value}:{info[value]}</p>
				})
			}
		</div>
	)

	return (
		<tr>
			<td>
				<Popover content={orderTooltop} >
					<Tooltip
						content="Click to see detail."
						usePortal={false}
					>
						{props.orderNo}
					</Tooltip>
				</Popover>
			</td>
			{
				Object.keys(salesFuncs).map((value, index) => {
					if (index < Object.keys(salesFuncs).indexOf(action))
						return index === 0 && props.batchNo
							? <td className="align-middle"><Button key={index} onClick={() => handleClick(value)} icon="tick" intent="Success" >{props.batchNo.slice(0, 11)}</Button></td>
							: <td className="align-middle"><Button key={index} onClick={() => handleClick(value)} icon="tick" intent="Success" >{value}</Button></td>
					else if (value === action && value !== "END")
						return <td className="align-middle"><Button key={index} onClick={() => handleClick(value)} icon="add" intent="primary"  >{value}</Button></td>
					else if (value !== "END")
						return <td className="align-middle"><Button key={index} disabled={true} icon="cross" >{value}</Button></td>
				})
			}
			<Dialog
				className="paragraph"
				style={{ width: 400, height: 550 }}
				onClose={() => setDialog(false)}
				title="Data Input"
				isOpen={dialog}
				usePortal={false}
			>
				{
					states.isForm
						? <VeggieForm address={props.batchNo} fname={salesFuncs[action].setter} orderNo={props.orderNo} />
						: <ActionDialog address={props.batchNo} fname={salesFuncs[states.clicked].getter} />
				}
			</Dialog>
		</tr>
	);
}

export { PurchaseItem, SalesItem };