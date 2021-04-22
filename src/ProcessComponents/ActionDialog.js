import React, { useEffect, useState, useContext } from 'react';
import { FormGroup, InputGroup, Button, Dialog } from "@blueprintjs/core";
import { Web3Context } from './Web3Context';


function ActionDialog(props) {
	// const setDialog = useContext(ModalContext);
	const contract = useContext(Web3Context);
	const [info, setInfo] = useState({});

	useEffect(() => {
		let fields;
		contract.abi.find((element) => {
			if (element.name === props.fname) {
				fields = element.outputs
				return element
			}
		})
		// console.log(fields)
		// const result = ["apple", 5, "Hi"] 
		// 測試：上面的要刪掉，下面註解拿掉，並對result處理BN的問題。
		contract[props.fname](props.address, (error, result) => {
			if (error) {
				console.log(error)
			}
			else if (props.fname == 'getInspectionData' || props.fname == 'getConsignmentData') {
				result.splice(0, 1, result[0].toNumber())
				result.splice(1, 1, result[1].toNumber())
				result.splice(2, 1, result[2].toNumber())
				result.forEach((curr, i) => {
					setInfo(prev => ({
						...prev,
						[fields[i].name]: curr
					})
					)
				})
				// console.log(result)
			}
			else {
				result.splice(0, 1, result[0].toNumber())
				result.splice(1, 1, result[1].toNumber())
				result.forEach((curr, i) => {
					setInfo(prev => ({
						...prev,
						[fields[i].name]: curr
					})
					)
				})
				// console.log(result)
			}
		})
	}, [props.fname]);

	return (
		<div style={{ margin: 20 }}>
			{
				Object.keys(info).map((title, index) => {
					return <FormGroup
						label={title}
						labelInfo="(done)"
					>
						<InputGroup
							value={info[title]}
							disabled={true}
						/>
					</FormGroup>
				})
			}
			<Button disabled={true} >
				Submit
			</Button>
		</div>
	);

}

export { ActionDialog };