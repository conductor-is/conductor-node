// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccountsAPI from './accounts';
import {
  Account,
  AccountCreateParams,
  AccountListParams,
  AccountListResponse,
  AccountRetrieveParams,
  AccountUpdateParams,
  Accounts,
} from './accounts';
import * as BillCheckPaymentsAPI from './bill-check-payments';
import {
  BillCheckPayment,
  BillCheckPaymentCreateParams,
  BillCheckPaymentListParams,
  BillCheckPaymentRetrieveParams,
  BillCheckPaymentUpdateParams,
  BillCheckPayments,
  BillCheckPaymentsCursorPage,
} from './bill-check-payments';
import * as BillCreditCardPaymentsAPI from './bill-credit-card-payments';
import {
  BillCreditCardPayment,
  BillCreditCardPaymentCreateParams,
  BillCreditCardPaymentListParams,
  BillCreditCardPaymentRetrieveParams,
  BillCreditCardPayments,
  BillCreditCardPaymentsCursorPage,
} from './bill-credit-card-payments';
import * as BillsAPI from './bills';
import {
  Bill,
  BillCreateParams,
  BillListParams,
  BillRetrieveParams,
  BillUpdateParams,
  Bills,
  BillsCursorPage,
} from './bills';
import * as ChecksAPI from './checks';
import {
  Check,
  CheckCreateParams,
  CheckListParams,
  CheckRetrieveParams,
  CheckUpdateParams,
  Checks,
  ChecksCursorPage,
} from './checks';
import * as ClassesAPI from './classes';
import {
  Class,
  ClassCreateParams,
  ClassListParams,
  ClassListResponse,
  ClassRetrieveParams,
  ClassUpdateParams,
  Classes,
} from './classes';
import * as CreditCardChargesAPI from './credit-card-charges';
import {
  CreditCardCharge,
  CreditCardChargeCreateParams,
  CreditCardChargeListParams,
  CreditCardChargeRetrieveParams,
  CreditCardChargeUpdateParams,
  CreditCardCharges,
  CreditCardChargesCursorPage,
} from './credit-card-charges';
import * as CreditCardCreditsAPI from './credit-card-credits';
import {
  CreditCardCredit,
  CreditCardCreditCreateParams,
  CreditCardCreditListParams,
  CreditCardCreditRetrieveParams,
  CreditCardCreditUpdateParams,
  CreditCardCredits,
  CreditCardCreditsCursorPage,
} from './credit-card-credits';
import * as CreditMemosAPI from './credit-memos';
import {
  CreditMemo,
  CreditMemoCreateParams,
  CreditMemoListParams,
  CreditMemoRetrieveParams,
  CreditMemoUpdateParams,
  CreditMemos,
  CreditMemosCursorPage,
} from './credit-memos';
import * as CustomersAPI from './customers';
import {
  Customer,
  CustomerCreateParams,
  CustomerListParams,
  CustomerRetrieveParams,
  CustomerUpdateParams,
  Customers,
  CustomersCursorPage,
} from './customers';
import * as DateDrivenTermsAPI from './date-driven-terms';
import {
  DateDrivenTerm,
  DateDrivenTermCreateParams,
  DateDrivenTermListParams,
  DateDrivenTermListResponse,
  DateDrivenTermRetrieveParams,
  DateDrivenTerms,
} from './date-driven-terms';
import * as EstimatesAPI from './estimates';
import {
  Estimate,
  EstimateCreateParams,
  EstimateListParams,
  EstimateRetrieveParams,
  EstimateUpdateParams,
  Estimates,
  EstimatesCursorPage,
} from './estimates';
import * as InventoryAssemblyItemsAPI from './inventory-assembly-items';
import {
  InventoryAssemblyItem,
  InventoryAssemblyItemCreateParams,
  InventoryAssemblyItemListParams,
  InventoryAssemblyItemRetrieveParams,
  InventoryAssemblyItemUpdateParams,
  InventoryAssemblyItems,
  InventoryAssemblyItemsCursorPage,
} from './inventory-assembly-items';
import * as InventoryItemsAPI from './inventory-items';
import {
  InventoryItem,
  InventoryItemCreateParams,
  InventoryItemListParams,
  InventoryItemRetrieveParams,
  InventoryItemUpdateParams,
  InventoryItems,
  InventoryItemsCursorPage,
} from './inventory-items';
import * as InventorySitesAPI from './inventory-sites';
import {
  InventorySite,
  InventorySiteCreateParams,
  InventorySiteListParams,
  InventorySiteListResponse,
  InventorySiteRetrieveParams,
  InventorySiteUpdateParams,
  InventorySites,
} from './inventory-sites';
import * as InvoicesAPI from './invoices';
import {
  Invoice,
  InvoiceCreateParams,
  InvoiceListParams,
  InvoiceRetrieveParams,
  InvoiceUpdateParams,
  Invoices,
  InvoicesCursorPage,
} from './invoices';
import * as JournalEntriesAPI from './journal-entries';
import {
  JournalEntries,
  JournalEntriesCursorPage,
  JournalEntry,
  JournalEntryCreateParams,
  JournalEntryListParams,
  JournalEntryRetrieveParams,
  JournalEntryUpdateParams,
} from './journal-entries';
import * as NonInventoryItemsAPI from './non-inventory-items';
import {
  NonInventoryItem,
  NonInventoryItemCreateParams,
  NonInventoryItemListParams,
  NonInventoryItemRetrieveParams,
  NonInventoryItemUpdateParams,
  NonInventoryItems,
  NonInventoryItemsCursorPage,
} from './non-inventory-items';
import * as PurchaseOrdersAPI from './purchase-orders';
import {
  PurchaseOrder,
  PurchaseOrderCreateParams,
  PurchaseOrderListParams,
  PurchaseOrderRetrieveParams,
  PurchaseOrderUpdateParams,
  PurchaseOrders,
  PurchaseOrdersCursorPage,
} from './purchase-orders';
import * as ReceivePaymentsAPI from './receive-payments';
import {
  ReceivePayment,
  ReceivePaymentCreateParams,
  ReceivePaymentListParams,
  ReceivePaymentRetrieveParams,
  ReceivePaymentUpdateParams,
  ReceivePayments,
  ReceivePaymentsCursorPage,
} from './receive-payments';
import * as SalesOrdersAPI from './sales-orders';
import {
  SalesOrder,
  SalesOrderCreateParams,
  SalesOrderListParams,
  SalesOrderRetrieveParams,
  SalesOrderUpdateParams,
  SalesOrders,
  SalesOrdersCursorPage,
} from './sales-orders';
import * as SalesReceiptsAPI from './sales-receipts';
import {
  SalesReceipt,
  SalesReceiptCreateParams,
  SalesReceiptListParams,
  SalesReceiptRetrieveParams,
  SalesReceiptUpdateParams,
  SalesReceipts,
  SalesReceiptsCursorPage,
} from './sales-receipts';
import * as SalesTaxCodesAPI from './sales-tax-codes';
import {
  SalesTaxCode,
  SalesTaxCodeCreateParams,
  SalesTaxCodeListParams,
  SalesTaxCodeListResponse,
  SalesTaxCodeRetrieveParams,
  SalesTaxCodeUpdateParams,
  SalesTaxCodes,
} from './sales-tax-codes';
import * as SalesTaxItemsAPI from './sales-tax-items';
import {
  SalesTaxItem,
  SalesTaxItemCreateParams,
  SalesTaxItemListParams,
  SalesTaxItemRetrieveParams,
  SalesTaxItemUpdateParams,
  SalesTaxItems,
  SalesTaxItemsCursorPage,
} from './sales-tax-items';
import * as ServiceItemsAPI from './service-items';
import {
  ServiceItem,
  ServiceItemCreateParams,
  ServiceItemListParams,
  ServiceItemRetrieveParams,
  ServiceItemUpdateParams,
  ServiceItems,
  ServiceItemsCursorPage,
} from './service-items';
import * as StandardTermsAPI from './standard-terms';
import {
  StandardTerm,
  StandardTermCreateParams,
  StandardTermListParams,
  StandardTermListResponse,
  StandardTermRetrieveParams,
  StandardTerms,
} from './standard-terms';
import * as SubtotalItemsAPI from './subtotal-items';
import {
  SubtotalItem,
  SubtotalItemCreateParams,
  SubtotalItemListParams,
  SubtotalItemRetrieveParams,
  SubtotalItemUpdateParams,
  SubtotalItems,
  SubtotalItemsCursorPage,
} from './subtotal-items';
import * as TransfersAPI from './transfers';
import {
  Transfer,
  TransferCreateParams,
  TransferListParams,
  TransferRetrieveParams,
  TransferUpdateParams,
  Transfers,
  TransfersCursorPage,
} from './transfers';
import * as VendorsAPI from './vendors';
import {
  Vendor,
  VendorCreateParams,
  VendorListParams,
  VendorRetrieveParams,
  VendorUpdateParams,
  Vendors,
  VendorsCursorPage,
} from './vendors';

export class Qbd extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  billCheckPayments: BillCheckPaymentsAPI.BillCheckPayments = new BillCheckPaymentsAPI.BillCheckPayments(
    this._client,
  );
  billCreditCardPayments: BillCreditCardPaymentsAPI.BillCreditCardPayments =
    new BillCreditCardPaymentsAPI.BillCreditCardPayments(this._client);
  bills: BillsAPI.Bills = new BillsAPI.Bills(this._client);
  checks: ChecksAPI.Checks = new ChecksAPI.Checks(this._client);
  classes: ClassesAPI.Classes = new ClassesAPI.Classes(this._client);
  creditCardCharges: CreditCardChargesAPI.CreditCardCharges = new CreditCardChargesAPI.CreditCardCharges(
    this._client,
  );
  creditCardCredits: CreditCardCreditsAPI.CreditCardCredits = new CreditCardCreditsAPI.CreditCardCredits(
    this._client,
  );
  creditMemos: CreditMemosAPI.CreditMemos = new CreditMemosAPI.CreditMemos(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  dateDrivenTerms: DateDrivenTermsAPI.DateDrivenTerms = new DateDrivenTermsAPI.DateDrivenTerms(this._client);
  estimates: EstimatesAPI.Estimates = new EstimatesAPI.Estimates(this._client);
  inventoryAssemblyItems: InventoryAssemblyItemsAPI.InventoryAssemblyItems =
    new InventoryAssemblyItemsAPI.InventoryAssemblyItems(this._client);
  inventoryItems: InventoryItemsAPI.InventoryItems = new InventoryItemsAPI.InventoryItems(this._client);
  inventorySites: InventorySitesAPI.InventorySites = new InventorySitesAPI.InventorySites(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  journalEntries: JournalEntriesAPI.JournalEntries = new JournalEntriesAPI.JournalEntries(this._client);
  nonInventoryItems: NonInventoryItemsAPI.NonInventoryItems = new NonInventoryItemsAPI.NonInventoryItems(
    this._client,
  );
  purchaseOrders: PurchaseOrdersAPI.PurchaseOrders = new PurchaseOrdersAPI.PurchaseOrders(this._client);
  receivePayments: ReceivePaymentsAPI.ReceivePayments = new ReceivePaymentsAPI.ReceivePayments(this._client);
  salesOrders: SalesOrdersAPI.SalesOrders = new SalesOrdersAPI.SalesOrders(this._client);
  salesReceipts: SalesReceiptsAPI.SalesReceipts = new SalesReceiptsAPI.SalesReceipts(this._client);
  salesTaxCodes: SalesTaxCodesAPI.SalesTaxCodes = new SalesTaxCodesAPI.SalesTaxCodes(this._client);
  salesTaxItems: SalesTaxItemsAPI.SalesTaxItems = new SalesTaxItemsAPI.SalesTaxItems(this._client);
  serviceItems: ServiceItemsAPI.ServiceItems = new ServiceItemsAPI.ServiceItems(this._client);
  standardTerms: StandardTermsAPI.StandardTerms = new StandardTermsAPI.StandardTerms(this._client);
  subtotalItems: SubtotalItemsAPI.SubtotalItems = new SubtotalItemsAPI.SubtotalItems(this._client);
  transfers: TransfersAPI.Transfers = new TransfersAPI.Transfers(this._client);
  vendors: VendorsAPI.Vendors = new VendorsAPI.Vendors(this._client);
}

Qbd.Accounts = Accounts;
Qbd.BillCheckPayments = BillCheckPayments;
Qbd.BillCheckPaymentsCursorPage = BillCheckPaymentsCursorPage;
Qbd.BillCreditCardPayments = BillCreditCardPayments;
Qbd.BillCreditCardPaymentsCursorPage = BillCreditCardPaymentsCursorPage;
Qbd.Bills = Bills;
Qbd.BillsCursorPage = BillsCursorPage;
Qbd.Checks = Checks;
Qbd.ChecksCursorPage = ChecksCursorPage;
Qbd.Classes = Classes;
Qbd.CreditCardCharges = CreditCardCharges;
Qbd.CreditCardChargesCursorPage = CreditCardChargesCursorPage;
Qbd.CreditCardCredits = CreditCardCredits;
Qbd.CreditCardCreditsCursorPage = CreditCardCreditsCursorPage;
Qbd.CreditMemos = CreditMemos;
Qbd.CreditMemosCursorPage = CreditMemosCursorPage;
Qbd.Customers = Customers;
Qbd.CustomersCursorPage = CustomersCursorPage;
Qbd.DateDrivenTerms = DateDrivenTerms;
Qbd.Estimates = Estimates;
Qbd.EstimatesCursorPage = EstimatesCursorPage;
Qbd.InventoryAssemblyItems = InventoryAssemblyItems;
Qbd.InventoryAssemblyItemsCursorPage = InventoryAssemblyItemsCursorPage;
Qbd.InventoryItems = InventoryItems;
Qbd.InventoryItemsCursorPage = InventoryItemsCursorPage;
Qbd.InventorySites = InventorySites;
Qbd.Invoices = Invoices;
Qbd.InvoicesCursorPage = InvoicesCursorPage;
Qbd.JournalEntries = JournalEntries;
Qbd.JournalEntriesCursorPage = JournalEntriesCursorPage;
Qbd.NonInventoryItems = NonInventoryItems;
Qbd.NonInventoryItemsCursorPage = NonInventoryItemsCursorPage;
Qbd.PurchaseOrders = PurchaseOrders;
Qbd.PurchaseOrdersCursorPage = PurchaseOrdersCursorPage;
Qbd.ReceivePayments = ReceivePayments;
Qbd.ReceivePaymentsCursorPage = ReceivePaymentsCursorPage;
Qbd.SalesOrders = SalesOrders;
Qbd.SalesOrdersCursorPage = SalesOrdersCursorPage;
Qbd.SalesReceipts = SalesReceipts;
Qbd.SalesReceiptsCursorPage = SalesReceiptsCursorPage;
Qbd.SalesTaxCodes = SalesTaxCodes;
Qbd.SalesTaxItems = SalesTaxItems;
Qbd.SalesTaxItemsCursorPage = SalesTaxItemsCursorPage;
Qbd.ServiceItems = ServiceItems;
Qbd.ServiceItemsCursorPage = ServiceItemsCursorPage;
Qbd.StandardTerms = StandardTerms;
Qbd.SubtotalItems = SubtotalItems;
Qbd.SubtotalItemsCursorPage = SubtotalItemsCursorPage;
Qbd.Transfers = Transfers;
Qbd.TransfersCursorPage = TransfersCursorPage;
Qbd.Vendors = Vendors;
Qbd.VendorsCursorPage = VendorsCursorPage;

export declare namespace Qbd {
  export {
    Accounts as Accounts,
    type Account as Account,
    type AccountListResponse as AccountListResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
  };

  export {
    BillCheckPayments as BillCheckPayments,
    type BillCheckPayment as BillCheckPayment,
    BillCheckPaymentsCursorPage as BillCheckPaymentsCursorPage,
    type BillCheckPaymentCreateParams as BillCheckPaymentCreateParams,
    type BillCheckPaymentRetrieveParams as BillCheckPaymentRetrieveParams,
    type BillCheckPaymentUpdateParams as BillCheckPaymentUpdateParams,
    type BillCheckPaymentListParams as BillCheckPaymentListParams,
  };

  export {
    BillCreditCardPayments as BillCreditCardPayments,
    type BillCreditCardPayment as BillCreditCardPayment,
    BillCreditCardPaymentsCursorPage as BillCreditCardPaymentsCursorPage,
    type BillCreditCardPaymentCreateParams as BillCreditCardPaymentCreateParams,
    type BillCreditCardPaymentRetrieveParams as BillCreditCardPaymentRetrieveParams,
    type BillCreditCardPaymentListParams as BillCreditCardPaymentListParams,
  };

  export {
    Bills as Bills,
    type Bill as Bill,
    BillsCursorPage as BillsCursorPage,
    type BillCreateParams as BillCreateParams,
    type BillRetrieveParams as BillRetrieveParams,
    type BillUpdateParams as BillUpdateParams,
    type BillListParams as BillListParams,
  };

  export {
    Checks as Checks,
    type Check as Check,
    ChecksCursorPage as ChecksCursorPage,
    type CheckCreateParams as CheckCreateParams,
    type CheckRetrieveParams as CheckRetrieveParams,
    type CheckUpdateParams as CheckUpdateParams,
    type CheckListParams as CheckListParams,
  };

  export {
    Classes as Classes,
    type Class as Class,
    type ClassListResponse as ClassListResponse,
    type ClassCreateParams as ClassCreateParams,
    type ClassRetrieveParams as ClassRetrieveParams,
    type ClassUpdateParams as ClassUpdateParams,
    type ClassListParams as ClassListParams,
  };

  export {
    CreditCardCharges as CreditCardCharges,
    type CreditCardCharge as CreditCardCharge,
    CreditCardChargesCursorPage as CreditCardChargesCursorPage,
    type CreditCardChargeCreateParams as CreditCardChargeCreateParams,
    type CreditCardChargeRetrieveParams as CreditCardChargeRetrieveParams,
    type CreditCardChargeUpdateParams as CreditCardChargeUpdateParams,
    type CreditCardChargeListParams as CreditCardChargeListParams,
  };

  export {
    CreditCardCredits as CreditCardCredits,
    type CreditCardCredit as CreditCardCredit,
    CreditCardCreditsCursorPage as CreditCardCreditsCursorPage,
    type CreditCardCreditCreateParams as CreditCardCreditCreateParams,
    type CreditCardCreditRetrieveParams as CreditCardCreditRetrieveParams,
    type CreditCardCreditUpdateParams as CreditCardCreditUpdateParams,
    type CreditCardCreditListParams as CreditCardCreditListParams,
  };

  export {
    CreditMemos as CreditMemos,
    type CreditMemo as CreditMemo,
    CreditMemosCursorPage as CreditMemosCursorPage,
    type CreditMemoCreateParams as CreditMemoCreateParams,
    type CreditMemoRetrieveParams as CreditMemoRetrieveParams,
    type CreditMemoUpdateParams as CreditMemoUpdateParams,
    type CreditMemoListParams as CreditMemoListParams,
  };

  export {
    Customers as Customers,
    type Customer as Customer,
    CustomersCursorPage as CustomersCursorPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export {
    DateDrivenTerms as DateDrivenTerms,
    type DateDrivenTerm as DateDrivenTerm,
    type DateDrivenTermListResponse as DateDrivenTermListResponse,
    type DateDrivenTermCreateParams as DateDrivenTermCreateParams,
    type DateDrivenTermRetrieveParams as DateDrivenTermRetrieveParams,
    type DateDrivenTermListParams as DateDrivenTermListParams,
  };

  export {
    Estimates as Estimates,
    type Estimate as Estimate,
    EstimatesCursorPage as EstimatesCursorPage,
    type EstimateCreateParams as EstimateCreateParams,
    type EstimateRetrieveParams as EstimateRetrieveParams,
    type EstimateUpdateParams as EstimateUpdateParams,
    type EstimateListParams as EstimateListParams,
  };

  export {
    InventoryAssemblyItems as InventoryAssemblyItems,
    type InventoryAssemblyItem as InventoryAssemblyItem,
    InventoryAssemblyItemsCursorPage as InventoryAssemblyItemsCursorPage,
    type InventoryAssemblyItemCreateParams as InventoryAssemblyItemCreateParams,
    type InventoryAssemblyItemRetrieveParams as InventoryAssemblyItemRetrieveParams,
    type InventoryAssemblyItemUpdateParams as InventoryAssemblyItemUpdateParams,
    type InventoryAssemblyItemListParams as InventoryAssemblyItemListParams,
  };

  export {
    InventoryItems as InventoryItems,
    type InventoryItem as InventoryItem,
    InventoryItemsCursorPage as InventoryItemsCursorPage,
    type InventoryItemCreateParams as InventoryItemCreateParams,
    type InventoryItemRetrieveParams as InventoryItemRetrieveParams,
    type InventoryItemUpdateParams as InventoryItemUpdateParams,
    type InventoryItemListParams as InventoryItemListParams,
  };

  export {
    InventorySites as InventorySites,
    type InventorySite as InventorySite,
    type InventorySiteListResponse as InventorySiteListResponse,
    type InventorySiteCreateParams as InventorySiteCreateParams,
    type InventorySiteRetrieveParams as InventorySiteRetrieveParams,
    type InventorySiteUpdateParams as InventorySiteUpdateParams,
    type InventorySiteListParams as InventorySiteListParams,
  };

  export {
    Invoices as Invoices,
    type Invoice as Invoice,
    InvoicesCursorPage as InvoicesCursorPage,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    JournalEntries as JournalEntries,
    type JournalEntry as JournalEntry,
    JournalEntriesCursorPage as JournalEntriesCursorPage,
    type JournalEntryCreateParams as JournalEntryCreateParams,
    type JournalEntryRetrieveParams as JournalEntryRetrieveParams,
    type JournalEntryUpdateParams as JournalEntryUpdateParams,
    type JournalEntryListParams as JournalEntryListParams,
  };

  export {
    NonInventoryItems as NonInventoryItems,
    type NonInventoryItem as NonInventoryItem,
    NonInventoryItemsCursorPage as NonInventoryItemsCursorPage,
    type NonInventoryItemCreateParams as NonInventoryItemCreateParams,
    type NonInventoryItemRetrieveParams as NonInventoryItemRetrieveParams,
    type NonInventoryItemUpdateParams as NonInventoryItemUpdateParams,
    type NonInventoryItemListParams as NonInventoryItemListParams,
  };

  export {
    PurchaseOrders as PurchaseOrders,
    type PurchaseOrder as PurchaseOrder,
    PurchaseOrdersCursorPage as PurchaseOrdersCursorPage,
    type PurchaseOrderCreateParams as PurchaseOrderCreateParams,
    type PurchaseOrderRetrieveParams as PurchaseOrderRetrieveParams,
    type PurchaseOrderUpdateParams as PurchaseOrderUpdateParams,
    type PurchaseOrderListParams as PurchaseOrderListParams,
  };

  export {
    ReceivePayments as ReceivePayments,
    type ReceivePayment as ReceivePayment,
    ReceivePaymentsCursorPage as ReceivePaymentsCursorPage,
    type ReceivePaymentCreateParams as ReceivePaymentCreateParams,
    type ReceivePaymentRetrieveParams as ReceivePaymentRetrieveParams,
    type ReceivePaymentUpdateParams as ReceivePaymentUpdateParams,
    type ReceivePaymentListParams as ReceivePaymentListParams,
  };

  export {
    SalesOrders as SalesOrders,
    type SalesOrder as SalesOrder,
    SalesOrdersCursorPage as SalesOrdersCursorPage,
    type SalesOrderCreateParams as SalesOrderCreateParams,
    type SalesOrderRetrieveParams as SalesOrderRetrieveParams,
    type SalesOrderUpdateParams as SalesOrderUpdateParams,
    type SalesOrderListParams as SalesOrderListParams,
  };

  export {
    SalesReceipts as SalesReceipts,
    type SalesReceipt as SalesReceipt,
    SalesReceiptsCursorPage as SalesReceiptsCursorPage,
    type SalesReceiptCreateParams as SalesReceiptCreateParams,
    type SalesReceiptRetrieveParams as SalesReceiptRetrieveParams,
    type SalesReceiptUpdateParams as SalesReceiptUpdateParams,
    type SalesReceiptListParams as SalesReceiptListParams,
  };

  export {
    SalesTaxCodes as SalesTaxCodes,
    type SalesTaxCode as SalesTaxCode,
    type SalesTaxCodeListResponse as SalesTaxCodeListResponse,
    type SalesTaxCodeCreateParams as SalesTaxCodeCreateParams,
    type SalesTaxCodeRetrieveParams as SalesTaxCodeRetrieveParams,
    type SalesTaxCodeUpdateParams as SalesTaxCodeUpdateParams,
    type SalesTaxCodeListParams as SalesTaxCodeListParams,
  };

  export {
    SalesTaxItems as SalesTaxItems,
    type SalesTaxItem as SalesTaxItem,
    SalesTaxItemsCursorPage as SalesTaxItemsCursorPage,
    type SalesTaxItemCreateParams as SalesTaxItemCreateParams,
    type SalesTaxItemRetrieveParams as SalesTaxItemRetrieveParams,
    type SalesTaxItemUpdateParams as SalesTaxItemUpdateParams,
    type SalesTaxItemListParams as SalesTaxItemListParams,
  };

  export {
    ServiceItems as ServiceItems,
    type ServiceItem as ServiceItem,
    ServiceItemsCursorPage as ServiceItemsCursorPage,
    type ServiceItemCreateParams as ServiceItemCreateParams,
    type ServiceItemRetrieveParams as ServiceItemRetrieveParams,
    type ServiceItemUpdateParams as ServiceItemUpdateParams,
    type ServiceItemListParams as ServiceItemListParams,
  };

  export {
    StandardTerms as StandardTerms,
    type StandardTerm as StandardTerm,
    type StandardTermListResponse as StandardTermListResponse,
    type StandardTermCreateParams as StandardTermCreateParams,
    type StandardTermRetrieveParams as StandardTermRetrieveParams,
    type StandardTermListParams as StandardTermListParams,
  };

  export {
    SubtotalItems as SubtotalItems,
    type SubtotalItem as SubtotalItem,
    SubtotalItemsCursorPage as SubtotalItemsCursorPage,
    type SubtotalItemCreateParams as SubtotalItemCreateParams,
    type SubtotalItemRetrieveParams as SubtotalItemRetrieveParams,
    type SubtotalItemUpdateParams as SubtotalItemUpdateParams,
    type SubtotalItemListParams as SubtotalItemListParams,
  };

  export {
    Transfers as Transfers,
    type Transfer as Transfer,
    TransfersCursorPage as TransfersCursorPage,
    type TransferCreateParams as TransferCreateParams,
    type TransferRetrieveParams as TransferRetrieveParams,
    type TransferUpdateParams as TransferUpdateParams,
    type TransferListParams as TransferListParams,
  };

  export {
    Vendors as Vendors,
    type Vendor as Vendor,
    VendorsCursorPage as VendorsCursorPage,
    type VendorCreateParams as VendorCreateParams,
    type VendorRetrieveParams as VendorRetrieveParams,
    type VendorUpdateParams as VendorUpdateParams,
    type VendorListParams as VendorListParams,
  };
}
