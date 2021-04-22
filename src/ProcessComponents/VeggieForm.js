import React, { useEffect, useState, useContext } from 'react';
import { NumericInput, FormGroup, InputGroup, Button, Dialog } from "@blueprintjs/core";
import { Web3Context } from './Web3Context';


function VeggieForm(props) {
	// const setDialog = useContext(ModalContext);
	const contract = useContext(Web3Context);
	const [fields, setFields] = useState([]);
	const [inputs, setInputs] = useState();

	useEffect(() => {
		if (props.fname !== "end") {
			contract.abi.find((element) => {
				if (element.name === props.fname) {
					setFields(element.inputs)
					// const obj = Object.assign({}, ...element.inputs.map(x => ({ [x.name]: null })));
					// setInputs(obj)
					return element
				}
			})
		} else console.log("props.fname: END")
	}, [props.fname]);

	const handleTextChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = () => {
		let args = []
		fields.forEach((element) => {
			if (inputs[element.name] === undefined)
				if (props.fname === "addBatchShipping")
					args.push(props.orderNo)
				else args.push(props.address)
			else args.push(inputs[element.name])
		})
		// console.log(args)
		contract[props.fname](...args, (error, result) => {
			if (error) {
				console.log(error)
			}
			console.log(result)
		})
	}

	return (
		<div style={{ margin: 20 }}>
			{
				fields.map((value, index) => {
					if (index === 0)
						return <FormGroup
							label={value.name}
							labelInfo="(required)"
							intent="warning"
						>
							<InputGroup
								onChange={handleTextChange}
								name={value.name} //Used in handler
								value={props.fname === "addBatchShipping" ? props.orderNo : props.address}
								placeholder={value.type}
								intent="warning"
								required
							/>
						</FormGroup>

					else
						return <FormGroup
							key={index}
							label={value.name}
							labelInfo="(required)"
							intent="warning"
						>
							{
								value.type === 'uint'
									? <NumericInput
										id={value.name}
										onValueChange={(valueAsNumber) => setInputs(
											prev => ({ ...prev, [value.name]: valueAsNumber })
										)}
										min="0"
										clampValueOnBlur="true"
										fill={true}
										placeholder={value.type}
										intent="warning"
										required
									/>
									: <InputGroup
										onChange={handleTextChange}
										name={value.name} //Used in handler
										id="text-input"
										placeholder={value.type}
										intent="warning"
										required
									/>
							}

						</FormGroup>
					// return <FormGroup
					// 	label={value.name}
					// 	labelFor="text-input"
					// 	labelInfo="(required)"
					// 	intent="warning"
					// >

					// </FormGroup>
				}
				)
			}
			<Button onClick={handleSubmit} type="submit" intent="warning" >
				Submit
			</Button>
		</div>
	);

}

export { VeggieForm };