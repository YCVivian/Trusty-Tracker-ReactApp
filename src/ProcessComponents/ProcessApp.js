import React, { useState, useEffect } from 'react';
import { InputGroup, Tabs, Tab } from '@blueprintjs/core';
import { PurchasePanel, SalesPanel } from './Panels';
import { Web3Context } from './Web3Context';
import {
	abi as veggieAbi,
	address as veggieAddress
} from './abi_veggie';

import "./ProcessApp.css";


let contract;
if (window.ethereum) {
	try {
		contract = window.web3.eth.contract(veggieAbi).at(veggieAddress)
		// console.log(contract)
	} catch (error) {
		console.log(error);
	}
}

function ProcessApp() {
	const [input, setInput] = useState('')
	const [tabId, setTabId] = useState('')

	useEffect(() => {
		setTabId("purchase")
	}, [])

	return (
		<div className="page">
			<div className="bg" />
			<div className="content">
				<div className="title">
					<h1>批次進度更新</h1>
				</div>
				<div className="searchBar">
					<InputGroup
						leftIcon="search"
						type="text"
						round={true}
						onChange={(e) => setInput(e.target.value)} />
				</div>
				<div className="panels">
					<Web3Context.Provider value={contract}>
						<Tabs id="Tabs" selectedTabId={tabId} large={true} onChange={(id) => setTabId(id)}>
							<Tab id="purchase" title="進貨" panel={<PurchasePanel filter={input} type={tabId} />} />
							<Tab id="shipping" title="出貨" panel={<SalesPanel filter={input} type={tabId} />} />
						</Tabs>
					</Web3Context.Provider>
				</div>
			</div>
		</div>
	)
}

export { ProcessApp };