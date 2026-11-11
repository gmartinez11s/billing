/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const config = require("includes/config.js");
const moduleContext = {
  "moduleId": "sap_cortex_v6_compatibility_sales"
};
const tableConfig = {
  "tableName": "billing",
  "materializationType": "table",
  "tags": [
    "billing_s4",
    "cortex_v6_compatibility",
    "sales"
  ],
  "description": "This view provides billing details including the net value, tax amount and rebates provided to customers. The granularity is at Client, Billing Document, and Billing Item.",
  "columns": {
    "Client_MANDT": "Client (Mandant), PK",
    "BillingDocument_VBELN": "Billing Document, PK",
    "BillingItem_POSNR": "Billing Item, PK",
    "BillingType_FKART": "Billing Type",
    "BillingCategory_FKTYP": "Billing Category",
    "SalesOrganization_VKORG": "Sales Organization",
    "DistributionChannel_VTWEG": "Distribution Channel",
    "Division_SPART": "Division",
    "SDDocumentCategory_VBTYP": "SD Document Category",
    "SalesDistrict_BZIRK": "Sales District",
    "PriceListType_PLTYP": "Price List Type",
    "BillingDocumentIsCancelled_FKSTO": "Billing Document is Cancelled",
    "Payer_KUNRG": "Payer",
    "IncotermsPart1_INCO1": "Incoterms (Part 1)",
    "IncotermsPart2_INCO2": "Incoterms (Part 2)",
    "DestinationCountry_LAND1": "Destination Country",
    "Region_REGIO": "Region (State, Province, Country)",
    "CountryCode_COUNC": "County Code",
    "CityCode_CITYC": "City Code",
    "TaxClassification1ForCustomer_TAXK1": "Tax Classification 1 for Customer",
    "TaxClassification2ForCustomer_TAXK2": "Tax Classification 2 for Customer",
    "TaxClassification3ForCustomer_TAXK3": "Tax Classification 3 for Customer",
    "TaxClassification4ForCustomer_TAXK4": "Tax Classification 4 for Customer",
    "TaxClassification5ForCustomer_TAXK5": "Tax Classification 5 for Customer",
    "TaxDepartureCountry_LANDTX": "Tax Departure Country",
    "OriginOfSalesTaxIDNumber_STCEG_H": "Origin Of Sales Tax ID Number",
    "CountryOfSalesTaxIDNumber_STCEG_L": "Country Of Sales Tax ID Number",
    "ReferenceDocumentNumber_XBLNR": "Reference Document Number",
    "CustomerPriceGroup_KONDA": "Customer Price Group",
    "StatusForTransferToAccounting_RFBSK": "Status for Transfer to Accounting",
    "BillingDate_FKDAT": "Billing Date",
    "FiscalYear_GJAHR": "Fiscal Year",
    "PostingPeriod_POPER": "Posting Period",
    "RecordCreationDate_ERDAT": "Date in which the Record was Created",
    "LastChangeDate_AEDAT": "Date of Last Change",
    "CustomerGroup_KDGRP": "Customer Group",
    "PaymentMethod_ZLSCH": "Payment Method",
    "CompanyCode_BUKRS": "Company Code",
    "DunningKey_MSCHL": "Dunning Key",
    "DunningBlock_MANSP": "Dunning Block",
    "SoldToParty_KUNAG": "Sold-To Party",
    "AccrualBillingType_FKART": "Accrual Billing Type",
    "AccountingDocumentNumber_BELNR": "Accounting Document Number",
    "ShippingConditions_VSBED": "Shipping Conditions",
    "SdDocumentCurrency_WAERK": "Sd Document Currency",
    "BusinessArea_GSBER": "Business Area",
    "SalesDocumentItemCategory_PSTYV": "Sales Document Item Category",
    "ItemType_POSAR": "Item Type",
    "CostCenter_KOSTL": "Cost Center",
    "SalesGroup_VKGRP": "Sales Group",
    "SalesOffice_VKBUR": "Sales Office",
    "ProfitCenter_PRCTR": "Profit Center",
    "ControllingArea_KOKRS": "Controlling Area",
    "DocumentCategoryOfPrecedingSDDocument_VGTYP": "Document Category of Preceding SD Document",
    "MaterialNumber_MATNR": "Material Number",
    "PricingReferenceMaterial_PMATN": "Pricing Reference Material",
    "BatchNumber_CHARG": "Batch Number",
    "MaterialGroup_MATKL": "Material Group",
    "ProductHierarchy_PRODH": "Product Hierarchy",
    "Plant_WERKS": "Plant",
    "MaterialPriceGroup_KONDM": "Material Price Group",
    "StorageLocation_LGORT": "Storage Location",
    "InternationalArticleNumber_EAN11": "International Article Number (EAN/UPC)",
    "MaterialGroup1_MVGR1": "Material Group 1",
    "MaterialGroup2_MVGR2": "Material Group 2",
    "MaterialGroup3_MVGR3": "Material Group 3",
    "MaterialGroup4_MVGR4": "Material Group 4",
    "MaterialGroup5_MVGR5": "Material Group 5",
    "BOMExplosionNumber_SERNR": "BOM Explosion Number",
    "CustomerGroup1_KVGR1": "Customer Group 1",
    "CustomerGroup2_KVGR2": "Customer Group 2",
    "CustomerGroup3_KVGR3": "Customer Group 3",
    "CustomerGroup4_KVGR4": "Customer Group 4",
    "CustomerGroup5_KVGR5": "Customer Group 5",
    "TaxJurisdiction_TXJCD": "Tax Jurisdiction",
    "ShippingPointReceivingPoint_VSTEL": "Shipping Point/Receiving Point",
    "DocumentNumberOfTheReferenceDocument_VGBEL": "Document Number of the Reference Document",
    "ItemNumberOfTheReferenceItem_VGPOS": "Item Number Of the Reference Item",
    "SalesDocument_AUBEL": "Sales Document",
    "SalesDocumentItem_AUPOS": "Sales Document Item",
    "ActualBilledQuantity_FKIMG": "Actual Billed Quantity",
    "Volume_VOLUM": "Volume",
    "GrossWeight_BRGEW": "Gross Weight",
    "NetWeight_NTGEW": "Net Weight",
    "NumberOfTheDocumentCondition_KNUMV": "Number of the Document Condition",
    "ConditionItemNumber_KPOSN": "Condition Item Number",
    "YearOfBillingDate_FKDAT": "Year Of Billing Date",
    "MonthOfBillingDate_FKDAT": "Month Of Billing Date",
    "WeekOfBillingDate_FKDAT": "Week Of Billing Date",
    "DayOfBillingDate_FKDAT": "Day Of Billing Date",
    "NetValue_NETWR": "Net Value",
    "TaxAmount_MWSBK": "Tax Amount in Document Currency",
    "TaxAmountPos_MWSBP": "Tax Amount in Document Currency",
    "Rebate": "Rebate amount returned for the billed item",
    "YearOrderCount": "Total number of billing documents and items posted in a calendar Year",
    "MonthOrderCount": "Total number of billing documents and items posted in a calendar month",
    "WeekOrderCount": "Total number of billing documents and items posted in a calendar Week"
  }
};

const moduleConfig = config.product[moduleContext.moduleId];
const publish_config = require("includes/publish_config.js");
const currencyHelper = require("includes/cortex_v6_compatibility_currency.js");

const materializationType = tableConfig.materializationType || "table";
const publishConfig = publish_config.getPublishConfig(
  materializationType,
  tableConfig,
  moduleConfig,
  []
);

publish("billing", { ...publishConfig, name: "Billing" }).query(
  (ctx) => `
WITH
  AGG_PRCD_ELEMENTS AS (
    SELECT
      Prcd_Elements.client AS Mandt,
      Prcd_Elements.knumv AS Knumv,
      Prcd_Elements.kposn AS Kposn,
      SUM(IF(Prcd_Elements.koaid = 'C' AND Prcd_Elements.kinak IS NULL, Prcd_Elements.kwert, NULL)) AS Rebate
    FROM
      ${ctx.ref(moduleConfig.sources.sapModule.datasetId, 'prcd_elements')} AS Prcd_Elements
    GROUP BY Mandt, Knumv, Kposn
  ),
  currency_decimal AS (
    ${currencyHelper.getCurrencyDecimalCTE(ctx, moduleConfig.sources.sapModule.datasetId)}
  )

SELECT
  VBRK.MANDT AS Client_MANDT,
  VBRK.FKART AS BillingType_FKART,
  VBRK.FKTYP AS BillingCategory_FKTYP,
  VBRK.VKORG AS SalesOrganization_VKORG,
  VBRK.VTWEG AS DistributionChannel_VTWEG,
  VBRK.SPART AS Division_SPART,
  VBRK.VBTYP AS SDDocumentCategory_VBTYP,
  VBRK.BZIRK AS SalesDistrict_BZIRK,
  VBRK.PLTYP AS PriceListType_PLTYP,
  VBRK.FKSTO AS BillingDocumentIsCancelled_FKSTO,
  VBRK.KUNRG AS Payer_KUNRG,
  VBRK.INCO1 AS IncotermsPart1_INCO1,
  VBRK.INCO2 AS IncotermsPart2_INCO2,
  VBRK.LAND1 AS DestinationCountry_LAND1,
  VBRK.REGIO AS Region_REGIO,
  VBRK.COUNC AS CountryCode_COUNC,
  VBRK.CITYC AS CityCode_CITYC,
  VBRK.TAXK1 AS TaxClassification1ForCustomer_TAXK1,
  VBRK.TAXK2 AS TaxClassification2ForCustomer_TAXK2,
  VBRK.TAXK3 AS TaxClassification3ForCustomer_TAXK3,
  VBRK.TAXK4 AS TaxClassification4ForCustomer_TAXK4,
  VBRK.TAXK5 AS TaxClassification5ForCustomer_TAXK5,
  VBRK.LANDTX AS TaxDepartureCountry_LANDTX,
  VBRK.STCEG_L AS CountryOfSalesTaxIDNumber_STCEG_L,
  VBRK.FKDAT AS BillingDate_FKDAT,
  VBRK.BELNR AS AccountingDocumentNumber_BELNR,
  VBRK.GJAHR AS FiscalYear_GJAHR,
  VBRK.POPER AS PostingPeriod_POPER,
  VBRK.WAERK AS SdDocumentCurrency_WAERK,
  VBRK.KNUMV AS NumberOfTheDocumentCondition_KNUMV,
  VBRK.VSBED AS ShippingConditions_VSBED,
  VBRK.KUNAG AS SoldToParty_KUNAG,
  VBRP.VBELN AS BillingDocument_VBELN,
  VBRP.POSNR AS BillingItem_POSNR,
  VBRP.PSTYV AS SalesDocumentItemCategory_PSTYV,
  VBRP.POSAR AS ItemType_POSAR,
  VBRP.PRODH AS ProductHierarchy_PRODH,
  VBRP.WERKS AS Plant_WERKS,
  VBRP.LGORT AS StorageLocation_LGORT,
  VBRP.VSTEL AS ShippingPointReceivingPoint_VSTEL,
  VBRP.FKIMG AS ActualBilledQuantity_FKIMG,
  VBRP.VRKME AS SalesUnit_VRKME,
  VBRP.MEINS AS BaseUnitOfMeasure_MEINS,
  VBRP.SMENG AS ScaleQuantity_SMENG,
  VBRP.FKLMG AS BilledQuantityInStockKeepingUnit_FKLMG,
  VBRP.LMENG AS RequiredDeliveryQuantity_LMENG,
  VBRP.MATNR AS MaterialNumber_MATNR,
  VBRP.ARKTX AS ShortTextForSalesOrderItem_ARKTX,
  VBRP.MATWA AS MaterialEntered_MATWA,
  VBRP.CHARG AS BatchNumber_CHARG,
  VBRP.PRCTR AS ProfitCenter_PRCTR,
  VBRP.SPART AS Division_SPART_VBRP,
  VBRP.GSBER AS BusinessArea_GSBER,
  VBRP.VGBEL AS DocumentNumberOfTheReferenceDocument_VGBEL,
  VBRP.VGPOS AS ItemNumberOfTheReferenceItem_VGPOS,
  VBRP.AUBEL AS SalesDocument_AUBEL,
  VBRP.AUPOS AS SalesDocumentItem_AUPOS,
  VBRP.SHKZG AS ReturnsItem_SHKZG,
  VBRP.WAVWR AS CostInDocumentCurrency_WAVWR,
  VBRP.KOUPD AS ConditionUpdate_KOUPD,
  VBRP.VGTYP AS DocumentCategoryOfPrecedingSDDocument_VGTYP,
  VBRP.KOKRS AS ControllingArea_KOKRS,
  VBRP.PAOBJNR AS ProfitabilitySegmentNumber_PAOBJNR,
  VBRP.SKTOF AS CashDiscountIndicator_SKTOF,
  VBRP.VOLUM AS Volume_VOLUM,
  VBRP.BRGEW AS GrossWeight_BRGEW,
  VBRP.NTGEW AS NetWeight_NTGEW,
  
  COALESCE(VBRP.NETWR * currency_decimal.CURRFIX, VBRP.NETWR) AS NetValue_NETWR,
  COALESCE(VBRK.MWSBK * currency_decimal.CURRFIX, VBRK.MWSBK) AS TaxAmount_MWSBK,
  COALESCE(VBRP.MWSBP * currency_decimal.CURRFIX, VBRP.MWSBP) AS TaxAmountPos_MWSBP,
  COALESCE(AGG_PRCD_ELEMENTS.rebate * currency_decimal.CURRFIX, AGG_PRCD_ELEMENTS.rebate) AS Rebate,
  
  -- Windowed Metrics
  COUNT(VBRK.VBELN) OVER (PARTITION BY CalendarDateDimension_FKDAT.CalYear) AS YearOrderCount,
  COUNT(VBRK.VBELN) OVER (PARTITION BY CalendarDateDimension_FKDAT.CalYear, CalendarDateDimension_FKDAT.CalMonth) AS MonthOrderCount,
  COUNT(VBRK.VBELN) OVER (PARTITION BY CalendarDateDimension_FKDAT.CalYear, CalendarDateDimension_FKDAT.CalMonth, CalendarDateDimension_FKDAT.CalWeek) AS WeekOrderCount

FROM
  ${ctx.ref(moduleConfig.sources.sapModule.datasetId, 'vbrk')} AS VBRK
INNER JOIN
  ${ctx.ref(moduleConfig.sources.sapModule.datasetId, 'vbrp')} AS VBRP
  ON
    VBRK.VBELN = VBRP.VBELN
    AND VBRK.MANDT = VBRP.MANDT
INNER JOIN
  AGG_PRCD_ELEMENTS
  ON
    AGG_PRCD_ELEMENTS.MANDT = VBRK.MANDT
    AND CAST(AGG_PRCD_ELEMENTS.Knumv AS STRING) = VBRK.KNUMV
    AND CAST(AGG_PRCD_ELEMENTS.Kposn AS STRING) = VBRP.POSNR
LEFT JOIN
  currency_decimal AS currency_decimal
  ON VBRK.WAERK = currency_decimal.CURRKEY
LEFT JOIN
  ${ctx.ref(moduleConfig.sources.sapMasterData.datasetId, 'calendar_date_dim')} AS CalendarDateDimension_FKDAT
  ON CalendarDateDimension_FKDAT.Date = VBRK.FKDAT
`
);
