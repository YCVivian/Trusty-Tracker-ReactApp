const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "goodsInfo",
                "type": "string"
            },
            {
                "name": "quantity",
                "type": "uint8"
            },
            {
                "name": "farmerName",
                "type": "string"
            },
            {
                "name": "farmLocation",
                "type": "string"
            }
        ],
        "name": "addBatchPurchase",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "customerOrderNo",
                "type": "address"
            },
            {
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "name": "quantity",
                "type": "uint8"
            }
        ],
        "name": "addBatchShipping",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "shippingBatchNo",
                "type": "address"
            },
            {
                "name": "orderNo",
                "type": "string"
            },
            {
                "name": "goodsInfo",
                "type": "string"
            },
            {
                "name": "quantity",
                "type": "uint8"
            },
            {
                "name": "defectiveQuantity",
                "type": "uint8"
            }
        ],
        "name": "addConsignmentData",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "name": "memoReturn",
                "type": "string"
            },
            {
                "name": "quantityReturn",
                "type": "uint8"
            },
            {
                "name": "quantity",
                "type": "uint8"
            }
        ],
        "name": "updateInspectionData",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "name": "quantity",
                "type": "uint8"
            }
        ],
        "name": "updatePurchaseData",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "shippingBatchNo",
                "type": "address"
            },
            {
                "name": "quantity",
                "type": "uint8"
            },
            {
                "name": "driver",
                "type": "string"
            },
            {
                "name": "truckNo",
                "type": "string"
            },
            {
                "name": "destination",
                "type": "string"
            }
        ],
        "name": "updateShippingData",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "name": "shelfNo",
                "type": "string"
            },
            {
                "name": "quantity",
                "type": "uint8"
            }
        ],
        "name": "updateWarehouseData",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_address",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "farmer",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "goodsInfo",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "farmerName",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "farmLocation",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DonePurchaseBatch",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "unloader",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DonePurchase",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "inspector",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "memoReturn",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "quantityReturn",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DoneInspection",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "warehouseOfficer",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "shelfNo",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DoneWarehouse",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "warehouseOfficer",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "shippingBatchNo",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "customerOrderNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DoneShippingBatch",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "deliveryOfficer",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "shippingBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "driver",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "truckNo",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "destination",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DoneShipping",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customer",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "shippingBatchNo",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "orderNo",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "goodsInfo",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "defectiveQuantity",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "DoneConsignment",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipRenounced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            }
        ],
        "name": "getBatchPurchaseData",
        "outputs": [
            {
                "name": "deliveryDateTime",
                "type": "uint256"
            },
            {
                "name": "quantity",
                "type": "uint8"
            },
            {
                "name": "goodsInfo",
                "type": "string"
            },
            {
                "name": "farmerName",
                "type": "string"
            },
            {
                "name": "farmLocation",
                "type": "string"
            },
            {
                "name": "farmer",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "shippingBatchNo",
                "type": "address"
            }
        ],
        "name": "getBatchShippingData",
        "outputs": [
            {
                "name": "pickingDateTime",
                "type": "uint256"
            },
            {
                "name": "quantity",
                "type": "uint8"
            },
            {
                "name": "customerOrderNo",
                "type": "address"
            },
            {
                "name": "purchaseBatchNo",
                "type": "address"
            },
            {
                "name": "warehouseOfficer",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "shippingBatchNo",
                "type": "address"
            }
        ],
        "name": "getConsignmentData",
        "outputs": [
            {
                "name": "arrivalDateTime",
                "type": "uint256"
            },
            {
                "name": "quantity",
                "type": "uint8"
            },
            {
                "name": "defectiveQuantity",
                "type": "uint8"
            },
            {
                "name": "orderNo",
                "type": "string"
            },
            {
                "name": "goodsInfo",
                "type": "string"
            },
            {
                "name": "customer",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            }
        ],
        "name": "getInspectionData",
        "outputs": [
            {
                "name": "inspectionDateTime",
                "type": "uint256"
            },
            {
                "name": "quantityReturn",
                "type": "uint8"
            },
            {
                "name": "quantity",
                "type": "uint8"
            },
            {
                "name": "memoReturn",
                "type": "string"
            },
            {
                "name": "inspector",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "batchNo",
                "type": "address"
            }
        ],
        "name": "getNextAction",
        "outputs": [
            {
                "name": "action",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            }
        ],
        "name": "getPurchaseData",
        "outputs": [
            {
                "name": "arrivalDateTime",
                "type": "uint256"
            },
            {
                "name": "quantity",
                "type": "uint8"
            },
            {
                "name": "unloader",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "shippingBatchNo",
                "type": "address"
            }
        ],
        "name": "getShippingData",
        "outputs": [
            {
                "name": "shippingDateTime",
                "type": "uint256"
            },
            {
                "name": "quantity",
                "type": "uint8"
            },
            {
                "name": "driver",
                "type": "string"
            },
            {
                "name": "truckNo",
                "type": "string"
            },
            {
                "name": "destination",
                "type": "string"
            },
            {
                "name": "deliveryOfficer",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "purchaseBatchNo",
                "type": "address"
            }
        ],
        "name": "getWarehouseData",
        "outputs": [
            {
                "name": "stackDateTime",
                "type": "uint256"
            },
            {
                "name": "quantity",
                "type": "uint8"
            },
            {
                "name": "shelfNo",
                "type": "string"
            },
            {
                "name": "warehouseOfficer",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]


const address = "0xc0550A0ea14CAa24cc683ebbd99baE897f6d771C";

export { abi, address };