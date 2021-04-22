import React, { useEffect, useState, useContext } from 'react';
import { NumericInput, FormGroup, InputGroup, Button } from "@blueprintjs/core";
import {
	abi as orderAbi,
	address as orderAddress
} from './abi_order';


function OrderForm(props) {
	const [fields, setFields] = useState([]);
	const [inputs, setInputs] = useState({});

	let contract;
	if (window.ethereum) {
		try {
			contract = window.web3.eth.contract(orderAbi).at(orderAddress)
			// console.log(contract)
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		contract.abi.find((element) => {
			if (element.name === props.type) {
				setFields(element.inputs)
				return element
			}
		})
	}, [props.type]);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = () => {
		let args = []
		fields.forEach((element) => {
			args.push(inputs[element.name])
		})
		contract[props.type](...args, (error, result) => {
			if (error) {
				console.log(error)
			}
			//txHash
			console.log(result)
		})
	}

	return (
		<div style={{ margin: 20 }}>
			{
				fields.map((value, index) => {
					if (value.type === 'uint8')
						return <FormGroup
							key={index}
							label={value.name}
							labelInfo="(required)"
							intent="warning"
						>
							<NumericInput
								onValueChange={(valueAsNumber) => setInputs(
									prev => ({ ...prev, [value.name]: valueAsNumber })
								)}
								name={value.type} //Used in handler
								min="0"
								clampValueOnBlur="true"
								fill={true}
								placeholder={value.type}
								intent="warning"
								required
							/>
						</FormGroup>

					return <FormGroup
						label={value.name}
						labelFor="text-input"
						labelInfo="(required)"
						intent="warning"
					>
						<InputGroup
							onChange={handleChange}
							name={value.name} //Used in handler
							id="text-input"
							placeholder={value.type}
							intent="warning"
							required
						/>
					</FormGroup>

				}
				)
			}
			<Button onClick={handleSubmit} type="submit" intent="warning" >
				Submit
			</Button>
		</div>
	)
};

export { OrderForm };