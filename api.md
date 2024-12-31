# AuthSessions

Types:

- <code><a href="./src/resources/auth-sessions.ts">AuthSession</a></code>

Methods:

- <code title="post /auth-sessions">client.authSessions.<a href="./src/resources/auth-sessions.ts">create</a>({ ...params }) -> AuthSession</code>
- <code title="get /auth-sessions/{id}">client.authSessions.<a href="./src/resources/auth-sessions.ts">retrieve</a>(id) -> AuthSession</code>

# EndUsers

Types:

- <code><a href="./src/resources/end-users.ts">EndUser</a></code>
- <code><a href="./src/resources/end-users.ts">EndUserListResponse</a></code>
- <code><a href="./src/resources/end-users.ts">EndUserDeleteResponse</a></code>
- <code><a href="./src/resources/end-users.ts">EndUserPassthroughResponse</a></code>
- <code><a href="./src/resources/end-users.ts">EndUserPingResponse</a></code>

Methods:

- <code title="post /end-users">client.endUsers.<a href="./src/resources/end-users.ts">create</a>({ ...params }) -> EndUser</code>
- <code title="get /end-users/{id}">client.endUsers.<a href="./src/resources/end-users.ts">retrieve</a>(id) -> EndUser</code>
- <code title="get /end-users">client.endUsers.<a href="./src/resources/end-users.ts">list</a>() -> EndUserListResponse</code>
- <code title="delete /end-users/{id}">client.endUsers.<a href="./src/resources/end-users.ts">delete</a>(id) -> EndUserDeleteResponse</code>
- <code title="post /end-users/{id}/passthrough/{integrationSlug}">client.endUsers.<a href="./src/resources/end-users.ts">passthrough</a>(id, integrationSlug, { ...params }) -> EndUserPassthroughResponse</code>
- <code title="get /end-users/{id}/ping/{integrationSlug}">client.endUsers.<a href="./src/resources/end-users.ts">ping</a>(id, integrationSlug) -> EndUserPingResponse</code>

# Qbd

## Accounts

Types:

- <code><a href="./src/resources/qbd/accounts.ts">Account</a></code>
- <code><a href="./src/resources/qbd/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="post /quickbooks-desktop/accounts">client.qbd.accounts.<a href="./src/resources/qbd/accounts.ts">create</a>({ ...params }) -> Account</code>
- <code title="get /quickbooks-desktop/accounts/{id}">client.qbd.accounts.<a href="./src/resources/qbd/accounts.ts">retrieve</a>(id, { ...params }) -> Account</code>
- <code title="post /quickbooks-desktop/accounts/{id}">client.qbd.accounts.<a href="./src/resources/qbd/accounts.ts">update</a>(id, { ...params }) -> Account</code>
- <code title="get /quickbooks-desktop/accounts">client.qbd.accounts.<a href="./src/resources/qbd/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>

## BillCheckPayments

Types:

- <code><a href="./src/resources/qbd/bill-check-payments.ts">BillCheckPayment</a></code>

Methods:

- <code title="post /quickbooks-desktop/bill-check-payments">client.qbd.billCheckPayments.<a href="./src/resources/qbd/bill-check-payments.ts">create</a>({ ...params }) -> BillCheckPayment</code>
- <code title="get /quickbooks-desktop/bill-check-payments/{id}">client.qbd.billCheckPayments.<a href="./src/resources/qbd/bill-check-payments.ts">retrieve</a>(id, { ...params }) -> BillCheckPayment</code>
- <code title="post /quickbooks-desktop/bill-check-payments/{id}">client.qbd.billCheckPayments.<a href="./src/resources/qbd/bill-check-payments.ts">update</a>(id, { ...params }) -> BillCheckPayment</code>
- <code title="get /quickbooks-desktop/bill-check-payments">client.qbd.billCheckPayments.<a href="./src/resources/qbd/bill-check-payments.ts">list</a>({ ...params }) -> BillCheckPaymentsCursorPage</code>

## BillCreditCardPayments

Types:

- <code><a href="./src/resources/qbd/bill-credit-card-payments.ts">BillCreditCardPayment</a></code>

Methods:

- <code title="post /quickbooks-desktop/bill-credit-card-payments">client.qbd.billCreditCardPayments.<a href="./src/resources/qbd/bill-credit-card-payments.ts">create</a>({ ...params }) -> BillCreditCardPayment</code>
- <code title="get /quickbooks-desktop/bill-credit-card-payments/{id}">client.qbd.billCreditCardPayments.<a href="./src/resources/qbd/bill-credit-card-payments.ts">retrieve</a>(id, { ...params }) -> BillCreditCardPayment</code>
- <code title="get /quickbooks-desktop/bill-credit-card-payments">client.qbd.billCreditCardPayments.<a href="./src/resources/qbd/bill-credit-card-payments.ts">list</a>({ ...params }) -> BillCreditCardPaymentsCursorPage</code>

## Bills

Types:

- <code><a href="./src/resources/qbd/bills.ts">Bill</a></code>

Methods:

- <code title="post /quickbooks-desktop/bills">client.qbd.bills.<a href="./src/resources/qbd/bills.ts">create</a>({ ...params }) -> Bill</code>
- <code title="get /quickbooks-desktop/bills/{id}">client.qbd.bills.<a href="./src/resources/qbd/bills.ts">retrieve</a>(id, { ...params }) -> Bill</code>
- <code title="post /quickbooks-desktop/bills/{id}">client.qbd.bills.<a href="./src/resources/qbd/bills.ts">update</a>(id, { ...params }) -> Bill</code>
- <code title="get /quickbooks-desktop/bills">client.qbd.bills.<a href="./src/resources/qbd/bills.ts">list</a>({ ...params }) -> BillsCursorPage</code>

## Checks

Types:

- <code><a href="./src/resources/qbd/checks.ts">Check</a></code>

Methods:

- <code title="post /quickbooks-desktop/checks">client.qbd.checks.<a href="./src/resources/qbd/checks.ts">create</a>({ ...params }) -> Check</code>
- <code title="get /quickbooks-desktop/checks/{id}">client.qbd.checks.<a href="./src/resources/qbd/checks.ts">retrieve</a>(id, { ...params }) -> Check</code>
- <code title="post /quickbooks-desktop/checks/{id}">client.qbd.checks.<a href="./src/resources/qbd/checks.ts">update</a>(id, { ...params }) -> Check</code>
- <code title="get /quickbooks-desktop/checks">client.qbd.checks.<a href="./src/resources/qbd/checks.ts">list</a>({ ...params }) -> ChecksCursorPage</code>

## Classes

Types:

- <code><a href="./src/resources/qbd/classes.ts">Class</a></code>
- <code><a href="./src/resources/qbd/classes.ts">ClassListResponse</a></code>

Methods:

- <code title="post /quickbooks-desktop/classes">client.qbd.classes.<a href="./src/resources/qbd/classes.ts">create</a>({ ...params }) -> Class</code>
- <code title="get /quickbooks-desktop/classes/{id}">client.qbd.classes.<a href="./src/resources/qbd/classes.ts">retrieve</a>(id, { ...params }) -> Class</code>
- <code title="post /quickbooks-desktop/classes/{id}">client.qbd.classes.<a href="./src/resources/qbd/classes.ts">update</a>(id, { ...params }) -> Class</code>
- <code title="get /quickbooks-desktop/classes">client.qbd.classes.<a href="./src/resources/qbd/classes.ts">list</a>({ ...params }) -> ClassListResponse</code>

## CreditCardCharges

Types:

- <code><a href="./src/resources/qbd/credit-card-charges.ts">CreditCardCharge</a></code>

Methods:

- <code title="post /quickbooks-desktop/credit-card-charges">client.qbd.creditCardCharges.<a href="./src/resources/qbd/credit-card-charges.ts">create</a>({ ...params }) -> CreditCardCharge</code>
- <code title="get /quickbooks-desktop/credit-card-charges/{id}">client.qbd.creditCardCharges.<a href="./src/resources/qbd/credit-card-charges.ts">retrieve</a>(id, { ...params }) -> CreditCardCharge</code>
- <code title="post /quickbooks-desktop/credit-card-charges/{id}">client.qbd.creditCardCharges.<a href="./src/resources/qbd/credit-card-charges.ts">update</a>(id, { ...params }) -> CreditCardCharge</code>
- <code title="get /quickbooks-desktop/credit-card-charges">client.qbd.creditCardCharges.<a href="./src/resources/qbd/credit-card-charges.ts">list</a>({ ...params }) -> CreditCardChargesCursorPage</code>

## CreditCardCredits

Types:

- <code><a href="./src/resources/qbd/credit-card-credits.ts">CreditCardCredit</a></code>

Methods:

- <code title="post /quickbooks-desktop/credit-card-credits">client.qbd.creditCardCredits.<a href="./src/resources/qbd/credit-card-credits.ts">create</a>({ ...params }) -> CreditCardCredit</code>
- <code title="get /quickbooks-desktop/credit-card-credits/{id}">client.qbd.creditCardCredits.<a href="./src/resources/qbd/credit-card-credits.ts">retrieve</a>(id, { ...params }) -> CreditCardCredit</code>
- <code title="post /quickbooks-desktop/credit-card-credits/{id}">client.qbd.creditCardCredits.<a href="./src/resources/qbd/credit-card-credits.ts">update</a>(id, { ...params }) -> CreditCardCredit</code>
- <code title="get /quickbooks-desktop/credit-card-credits">client.qbd.creditCardCredits.<a href="./src/resources/qbd/credit-card-credits.ts">list</a>({ ...params }) -> CreditCardCreditsCursorPage</code>

## CreditMemos

Types:

- <code><a href="./src/resources/qbd/credit-memos.ts">CreditMemo</a></code>

Methods:

- <code title="post /quickbooks-desktop/credit-memos">client.qbd.creditMemos.<a href="./src/resources/qbd/credit-memos.ts">create</a>({ ...params }) -> CreditMemo</code>
- <code title="get /quickbooks-desktop/credit-memos/{id}">client.qbd.creditMemos.<a href="./src/resources/qbd/credit-memos.ts">retrieve</a>(id, { ...params }) -> CreditMemo</code>
- <code title="post /quickbooks-desktop/credit-memos/{id}">client.qbd.creditMemos.<a href="./src/resources/qbd/credit-memos.ts">update</a>(id, { ...params }) -> CreditMemo</code>
- <code title="get /quickbooks-desktop/credit-memos">client.qbd.creditMemos.<a href="./src/resources/qbd/credit-memos.ts">list</a>({ ...params }) -> CreditMemosCursorPage</code>

## Customers

Types:

- <code><a href="./src/resources/qbd/customers.ts">Customer</a></code>

Methods:

- <code title="post /quickbooks-desktop/customers">client.qbd.customers.<a href="./src/resources/qbd/customers.ts">create</a>({ ...params }) -> Customer</code>
- <code title="get /quickbooks-desktop/customers/{id}">client.qbd.customers.<a href="./src/resources/qbd/customers.ts">retrieve</a>(id, { ...params }) -> Customer</code>
- <code title="post /quickbooks-desktop/customers/{id}">client.qbd.customers.<a href="./src/resources/qbd/customers.ts">update</a>(id, { ...params }) -> Customer</code>
- <code title="get /quickbooks-desktop/customers">client.qbd.customers.<a href="./src/resources/qbd/customers.ts">list</a>({ ...params }) -> CustomersCursorPage</code>

## DateDrivenTerms

Types:

- <code><a href="./src/resources/qbd/date-driven-terms.ts">DateDrivenTerm</a></code>
- <code><a href="./src/resources/qbd/date-driven-terms.ts">DateDrivenTermListResponse</a></code>

Methods:

- <code title="post /quickbooks-desktop/date-driven-terms">client.qbd.dateDrivenTerms.<a href="./src/resources/qbd/date-driven-terms.ts">create</a>({ ...params }) -> DateDrivenTerm</code>
- <code title="get /quickbooks-desktop/date-driven-terms/{id}">client.qbd.dateDrivenTerms.<a href="./src/resources/qbd/date-driven-terms.ts">retrieve</a>(id, { ...params }) -> DateDrivenTerm</code>
- <code title="get /quickbooks-desktop/date-driven-terms">client.qbd.dateDrivenTerms.<a href="./src/resources/qbd/date-driven-terms.ts">list</a>({ ...params }) -> DateDrivenTermListResponse</code>

## Estimates

Types:

- <code><a href="./src/resources/qbd/estimates.ts">Estimate</a></code>

Methods:

- <code title="post /quickbooks-desktop/estimates">client.qbd.estimates.<a href="./src/resources/qbd/estimates.ts">create</a>({ ...params }) -> Estimate</code>
- <code title="get /quickbooks-desktop/estimates/{id}">client.qbd.estimates.<a href="./src/resources/qbd/estimates.ts">retrieve</a>(id, { ...params }) -> Estimate</code>
- <code title="post /quickbooks-desktop/estimates/{id}">client.qbd.estimates.<a href="./src/resources/qbd/estimates.ts">update</a>(id, { ...params }) -> Estimate</code>
- <code title="get /quickbooks-desktop/estimates">client.qbd.estimates.<a href="./src/resources/qbd/estimates.ts">list</a>({ ...params }) -> EstimatesCursorPage</code>

## InventoryAssemblyItems

Types:

- <code><a href="./src/resources/qbd/inventory-assembly-items.ts">InventoryAssemblyItem</a></code>

Methods:

- <code title="post /quickbooks-desktop/inventory-assembly-items">client.qbd.inventoryAssemblyItems.<a href="./src/resources/qbd/inventory-assembly-items.ts">create</a>({ ...params }) -> InventoryAssemblyItem</code>
- <code title="get /quickbooks-desktop/inventory-assembly-items/{id}">client.qbd.inventoryAssemblyItems.<a href="./src/resources/qbd/inventory-assembly-items.ts">retrieve</a>(id, { ...params }) -> InventoryAssemblyItem</code>
- <code title="post /quickbooks-desktop/inventory-assembly-items/{id}">client.qbd.inventoryAssemblyItems.<a href="./src/resources/qbd/inventory-assembly-items.ts">update</a>(id, { ...params }) -> InventoryAssemblyItem</code>
- <code title="get /quickbooks-desktop/inventory-assembly-items">client.qbd.inventoryAssemblyItems.<a href="./src/resources/qbd/inventory-assembly-items.ts">list</a>({ ...params }) -> InventoryAssemblyItemsCursorPage</code>

## InventoryItems

Types:

- <code><a href="./src/resources/qbd/inventory-items.ts">InventoryItem</a></code>

Methods:

- <code title="post /quickbooks-desktop/inventory-items">client.qbd.inventoryItems.<a href="./src/resources/qbd/inventory-items.ts">create</a>({ ...params }) -> InventoryItem</code>
- <code title="get /quickbooks-desktop/inventory-items/{id}">client.qbd.inventoryItems.<a href="./src/resources/qbd/inventory-items.ts">retrieve</a>(id, { ...params }) -> InventoryItem</code>
- <code title="post /quickbooks-desktop/inventory-items/{id}">client.qbd.inventoryItems.<a href="./src/resources/qbd/inventory-items.ts">update</a>(id, { ...params }) -> InventoryItem</code>
- <code title="get /quickbooks-desktop/inventory-items">client.qbd.inventoryItems.<a href="./src/resources/qbd/inventory-items.ts">list</a>({ ...params }) -> InventoryItemsCursorPage</code>

## InventorySites

Types:

- <code><a href="./src/resources/qbd/inventory-sites.ts">InventorySite</a></code>
- <code><a href="./src/resources/qbd/inventory-sites.ts">InventorySiteListResponse</a></code>

Methods:

- <code title="post /quickbooks-desktop/inventory-sites">client.qbd.inventorySites.<a href="./src/resources/qbd/inventory-sites.ts">create</a>({ ...params }) -> InventorySite</code>
- <code title="get /quickbooks-desktop/inventory-sites/{id}">client.qbd.inventorySites.<a href="./src/resources/qbd/inventory-sites.ts">retrieve</a>(id, { ...params }) -> InventorySite</code>
- <code title="post /quickbooks-desktop/inventory-sites/{id}">client.qbd.inventorySites.<a href="./src/resources/qbd/inventory-sites.ts">update</a>(id, { ...params }) -> InventorySite</code>
- <code title="get /quickbooks-desktop/inventory-sites">client.qbd.inventorySites.<a href="./src/resources/qbd/inventory-sites.ts">list</a>({ ...params }) -> InventorySiteListResponse</code>

## Invoices

Types:

- <code><a href="./src/resources/qbd/invoices.ts">Invoice</a></code>

Methods:

- <code title="post /quickbooks-desktop/invoices">client.qbd.invoices.<a href="./src/resources/qbd/invoices.ts">create</a>({ ...params }) -> Invoice</code>
- <code title="get /quickbooks-desktop/invoices/{id}">client.qbd.invoices.<a href="./src/resources/qbd/invoices.ts">retrieve</a>(id, { ...params }) -> Invoice</code>
- <code title="post /quickbooks-desktop/invoices/{id}">client.qbd.invoices.<a href="./src/resources/qbd/invoices.ts">update</a>(id, { ...params }) -> Invoice</code>
- <code title="get /quickbooks-desktop/invoices">client.qbd.invoices.<a href="./src/resources/qbd/invoices.ts">list</a>({ ...params }) -> InvoicesCursorPage</code>

## JournalEntries

Types:

- <code><a href="./src/resources/qbd/journal-entries.ts">JournalEntry</a></code>

Methods:

- <code title="post /quickbooks-desktop/journal-entries">client.qbd.journalEntries.<a href="./src/resources/qbd/journal-entries.ts">create</a>({ ...params }) -> JournalEntry</code>
- <code title="get /quickbooks-desktop/journal-entries/{id}">client.qbd.journalEntries.<a href="./src/resources/qbd/journal-entries.ts">retrieve</a>(id, { ...params }) -> JournalEntry</code>
- <code title="post /quickbooks-desktop/journal-entries/{id}">client.qbd.journalEntries.<a href="./src/resources/qbd/journal-entries.ts">update</a>(id, { ...params }) -> JournalEntry</code>
- <code title="get /quickbooks-desktop/journal-entries">client.qbd.journalEntries.<a href="./src/resources/qbd/journal-entries.ts">list</a>({ ...params }) -> JournalEntriesCursorPage</code>

## NonInventoryItems

Types:

- <code><a href="./src/resources/qbd/non-inventory-items.ts">NonInventoryItem</a></code>

Methods:

- <code title="post /quickbooks-desktop/non-inventory-items">client.qbd.nonInventoryItems.<a href="./src/resources/qbd/non-inventory-items.ts">create</a>({ ...params }) -> NonInventoryItem</code>
- <code title="get /quickbooks-desktop/non-inventory-items/{id}">client.qbd.nonInventoryItems.<a href="./src/resources/qbd/non-inventory-items.ts">retrieve</a>(id, { ...params }) -> NonInventoryItem</code>
- <code title="post /quickbooks-desktop/non-inventory-items/{id}">client.qbd.nonInventoryItems.<a href="./src/resources/qbd/non-inventory-items.ts">update</a>(id, { ...params }) -> NonInventoryItem</code>
- <code title="get /quickbooks-desktop/non-inventory-items">client.qbd.nonInventoryItems.<a href="./src/resources/qbd/non-inventory-items.ts">list</a>({ ...params }) -> NonInventoryItemsCursorPage</code>

## PurchaseOrders

Types:

- <code><a href="./src/resources/qbd/purchase-orders.ts">PurchaseOrder</a></code>

Methods:

- <code title="post /quickbooks-desktop/purchase-orders">client.qbd.purchaseOrders.<a href="./src/resources/qbd/purchase-orders.ts">create</a>({ ...params }) -> PurchaseOrder</code>
- <code title="get /quickbooks-desktop/purchase-orders/{id}">client.qbd.purchaseOrders.<a href="./src/resources/qbd/purchase-orders.ts">retrieve</a>(id, { ...params }) -> PurchaseOrder</code>
- <code title="post /quickbooks-desktop/purchase-orders/{id}">client.qbd.purchaseOrders.<a href="./src/resources/qbd/purchase-orders.ts">update</a>(id, { ...params }) -> PurchaseOrder</code>
- <code title="get /quickbooks-desktop/purchase-orders">client.qbd.purchaseOrders.<a href="./src/resources/qbd/purchase-orders.ts">list</a>({ ...params }) -> PurchaseOrdersCursorPage</code>

## ReceivePayments

Types:

- <code><a href="./src/resources/qbd/receive-payments.ts">ReceivePayment</a></code>

Methods:

- <code title="post /quickbooks-desktop/receive-payments">client.qbd.receivePayments.<a href="./src/resources/qbd/receive-payments.ts">create</a>({ ...params }) -> ReceivePayment</code>
- <code title="get /quickbooks-desktop/receive-payments/{id}">client.qbd.receivePayments.<a href="./src/resources/qbd/receive-payments.ts">retrieve</a>(id, { ...params }) -> ReceivePayment</code>
- <code title="post /quickbooks-desktop/receive-payments/{id}">client.qbd.receivePayments.<a href="./src/resources/qbd/receive-payments.ts">update</a>(id, { ...params }) -> ReceivePayment</code>
- <code title="get /quickbooks-desktop/receive-payments">client.qbd.receivePayments.<a href="./src/resources/qbd/receive-payments.ts">list</a>({ ...params }) -> ReceivePaymentsCursorPage</code>

## SalesOrders

Types:

- <code><a href="./src/resources/qbd/sales-orders.ts">SalesOrder</a></code>

Methods:

- <code title="post /quickbooks-desktop/sales-orders">client.qbd.salesOrders.<a href="./src/resources/qbd/sales-orders.ts">create</a>({ ...params }) -> SalesOrder</code>
- <code title="get /quickbooks-desktop/sales-orders/{id}">client.qbd.salesOrders.<a href="./src/resources/qbd/sales-orders.ts">retrieve</a>(id, { ...params }) -> SalesOrder</code>
- <code title="post /quickbooks-desktop/sales-orders/{id}">client.qbd.salesOrders.<a href="./src/resources/qbd/sales-orders.ts">update</a>(id, { ...params }) -> SalesOrder</code>
- <code title="get /quickbooks-desktop/sales-orders">client.qbd.salesOrders.<a href="./src/resources/qbd/sales-orders.ts">list</a>({ ...params }) -> SalesOrdersCursorPage</code>

## SalesReceipts

Types:

- <code><a href="./src/resources/qbd/sales-receipts.ts">SalesReceipt</a></code>

Methods:

- <code title="post /quickbooks-desktop/sales-receipts">client.qbd.salesReceipts.<a href="./src/resources/qbd/sales-receipts.ts">create</a>({ ...params }) -> SalesReceipt</code>
- <code title="get /quickbooks-desktop/sales-receipts/{id}">client.qbd.salesReceipts.<a href="./src/resources/qbd/sales-receipts.ts">retrieve</a>(id, { ...params }) -> SalesReceipt</code>
- <code title="post /quickbooks-desktop/sales-receipts/{id}">client.qbd.salesReceipts.<a href="./src/resources/qbd/sales-receipts.ts">update</a>(id, { ...params }) -> SalesReceipt</code>
- <code title="get /quickbooks-desktop/sales-receipts">client.qbd.salesReceipts.<a href="./src/resources/qbd/sales-receipts.ts">list</a>({ ...params }) -> SalesReceiptsCursorPage</code>

## SalesTaxCodes

Types:

- <code><a href="./src/resources/qbd/sales-tax-codes.ts">SalesTaxCode</a></code>
- <code><a href="./src/resources/qbd/sales-tax-codes.ts">SalesTaxCodeListResponse</a></code>

Methods:

- <code title="post /quickbooks-desktop/sales-tax-codes">client.qbd.salesTaxCodes.<a href="./src/resources/qbd/sales-tax-codes.ts">create</a>({ ...params }) -> SalesTaxCode</code>
- <code title="get /quickbooks-desktop/sales-tax-codes/{id}">client.qbd.salesTaxCodes.<a href="./src/resources/qbd/sales-tax-codes.ts">retrieve</a>(id, { ...params }) -> SalesTaxCode</code>
- <code title="post /quickbooks-desktop/sales-tax-codes/{id}">client.qbd.salesTaxCodes.<a href="./src/resources/qbd/sales-tax-codes.ts">update</a>(id, { ...params }) -> SalesTaxCode</code>
- <code title="get /quickbooks-desktop/sales-tax-codes">client.qbd.salesTaxCodes.<a href="./src/resources/qbd/sales-tax-codes.ts">list</a>({ ...params }) -> SalesTaxCodeListResponse</code>

## SalesTaxItems

Types:

- <code><a href="./src/resources/qbd/sales-tax-items.ts">SalesTaxItem</a></code>

Methods:

- <code title="post /quickbooks-desktop/sales-tax-items">client.qbd.salesTaxItems.<a href="./src/resources/qbd/sales-tax-items.ts">create</a>({ ...params }) -> SalesTaxItem</code>
- <code title="get /quickbooks-desktop/sales-tax-items/{id}">client.qbd.salesTaxItems.<a href="./src/resources/qbd/sales-tax-items.ts">retrieve</a>(id, { ...params }) -> SalesTaxItem</code>
- <code title="post /quickbooks-desktop/sales-tax-items/{id}">client.qbd.salesTaxItems.<a href="./src/resources/qbd/sales-tax-items.ts">update</a>(id, { ...params }) -> SalesTaxItem</code>
- <code title="get /quickbooks-desktop/sales-tax-items">client.qbd.salesTaxItems.<a href="./src/resources/qbd/sales-tax-items.ts">list</a>({ ...params }) -> SalesTaxItemsCursorPage</code>

## ServiceItems

Types:

- <code><a href="./src/resources/qbd/service-items.ts">ServiceItem</a></code>

Methods:

- <code title="post /quickbooks-desktop/service-items">client.qbd.serviceItems.<a href="./src/resources/qbd/service-items.ts">create</a>({ ...params }) -> ServiceItem</code>
- <code title="get /quickbooks-desktop/service-items/{id}">client.qbd.serviceItems.<a href="./src/resources/qbd/service-items.ts">retrieve</a>(id, { ...params }) -> ServiceItem</code>
- <code title="post /quickbooks-desktop/service-items/{id}">client.qbd.serviceItems.<a href="./src/resources/qbd/service-items.ts">update</a>(id, { ...params }) -> ServiceItem</code>
- <code title="get /quickbooks-desktop/service-items">client.qbd.serviceItems.<a href="./src/resources/qbd/service-items.ts">list</a>({ ...params }) -> ServiceItemsCursorPage</code>

## StandardTerms

Types:

- <code><a href="./src/resources/qbd/standard-terms.ts">StandardTerm</a></code>
- <code><a href="./src/resources/qbd/standard-terms.ts">StandardTermListResponse</a></code>

Methods:

- <code title="post /quickbooks-desktop/standard-terms">client.qbd.standardTerms.<a href="./src/resources/qbd/standard-terms.ts">create</a>({ ...params }) -> StandardTerm</code>
- <code title="get /quickbooks-desktop/standard-terms/{id}">client.qbd.standardTerms.<a href="./src/resources/qbd/standard-terms.ts">retrieve</a>(id, { ...params }) -> StandardTerm</code>
- <code title="get /quickbooks-desktop/standard-terms">client.qbd.standardTerms.<a href="./src/resources/qbd/standard-terms.ts">list</a>({ ...params }) -> StandardTermListResponse</code>

## SubtotalItems

Types:

- <code><a href="./src/resources/qbd/subtotal-items.ts">SubtotalItem</a></code>

Methods:

- <code title="post /quickbooks-desktop/subtotal-items">client.qbd.subtotalItems.<a href="./src/resources/qbd/subtotal-items.ts">create</a>({ ...params }) -> SubtotalItem</code>
- <code title="get /quickbooks-desktop/subtotal-items/{id}">client.qbd.subtotalItems.<a href="./src/resources/qbd/subtotal-items.ts">retrieve</a>(id, { ...params }) -> SubtotalItem</code>
- <code title="post /quickbooks-desktop/subtotal-items/{id}">client.qbd.subtotalItems.<a href="./src/resources/qbd/subtotal-items.ts">update</a>(id, { ...params }) -> SubtotalItem</code>
- <code title="get /quickbooks-desktop/subtotal-items">client.qbd.subtotalItems.<a href="./src/resources/qbd/subtotal-items.ts">list</a>({ ...params }) -> SubtotalItemsCursorPage</code>

## Transfers

Types:

- <code><a href="./src/resources/qbd/transfers.ts">Transfer</a></code>

Methods:

- <code title="post /quickbooks-desktop/transfers">client.qbd.transfers.<a href="./src/resources/qbd/transfers.ts">create</a>({ ...params }) -> Transfer</code>
- <code title="get /quickbooks-desktop/transfers/{id}">client.qbd.transfers.<a href="./src/resources/qbd/transfers.ts">retrieve</a>(id, { ...params }) -> Transfer</code>
- <code title="post /quickbooks-desktop/transfers/{id}">client.qbd.transfers.<a href="./src/resources/qbd/transfers.ts">update</a>(id, { ...params }) -> Transfer</code>
- <code title="get /quickbooks-desktop/transfers">client.qbd.transfers.<a href="./src/resources/qbd/transfers.ts">list</a>({ ...params }) -> TransfersCursorPage</code>

## Vendors

Types:

- <code><a href="./src/resources/qbd/vendors.ts">Vendor</a></code>

Methods:

- <code title="post /quickbooks-desktop/vendors">client.qbd.vendors.<a href="./src/resources/qbd/vendors.ts">create</a>({ ...params }) -> Vendor</code>
- <code title="get /quickbooks-desktop/vendors/{id}">client.qbd.vendors.<a href="./src/resources/qbd/vendors.ts">retrieve</a>(id, { ...params }) -> Vendor</code>
- <code title="post /quickbooks-desktop/vendors/{id}">client.qbd.vendors.<a href="./src/resources/qbd/vendors.ts">update</a>(id, { ...params }) -> Vendor</code>
- <code title="get /quickbooks-desktop/vendors">client.qbd.vendors.<a href="./src/resources/qbd/vendors.ts">list</a>({ ...params }) -> VendorsCursorPage</code>

## VendorCredits

Types:

- <code><a href="./src/resources/qbd/vendor-credits.ts">QbdVendorCredit</a></code>

Methods:

- <code title="post /quickbooks-desktop/vendor-credits">client.qbd.vendorCredits.<a href="./src/resources/qbd/vendor-credits.ts">create</a>({ ...params }) -> QbdVendorCredit</code>
- <code title="get /quickbooks-desktop/vendor-credits/{id}">client.qbd.vendorCredits.<a href="./src/resources/qbd/vendor-credits.ts">retrieve</a>(id, { ...params }) -> QbdVendorCredit</code>
- <code title="post /quickbooks-desktop/vendor-credits/{id}">client.qbd.vendorCredits.<a href="./src/resources/qbd/vendor-credits.ts">update</a>(id, { ...params }) -> QbdVendorCredit</code>
- <code title="get /quickbooks-desktop/vendor-credits">client.qbd.vendorCredits.<a href="./src/resources/qbd/vendor-credits.ts">list</a>({ ...params }) -> QbdVendorCreditsCursorPage</code>
