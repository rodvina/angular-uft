'use strict';
angular.module('mockdataService', [])
	//service for search
	.service('mockdata', ['$log', 
        function ($log) {
			$log.info('instantiating mockdata service...')
			
			//start of functions for trackingService
			this.search = function(searchText) {
				$log.info('mockdata service searching...')
				var max = 400;
				var result = [];

				for (var i=100; i<max; i++) {
					var d = new Date();
					d.setDate(d.getDate()+i);
					result.push({"requestDate" :d,						
						"company" : "SLI"+i,
						"source" : "Billing System",
						"policyNumber" : "2389"+i,
						"effDate" : "20160213",
						"referenceNo" : i+"9474",
						"referenceType" : "Billing Number",
						"event" : "BCMINVA",
						"packetType" : "Invoice",
						"completedFlag" : "C",
						"packetId" : "104"+i+"35",
						"uuid" : "b"+i+"19eb-9194-4099-a6fc-8eee893e7"+i})
				};
				
				return result;
			};
			
			this.viewDetails = function(uuid) {
				$log.info('mockdata service viewDetails...')
				var data = {
					"TransactionRequestUUID": uuid,
					"TransactionRequestDate": "2010-08-09 11:53:00",
					"OperatingCompany": "SLI",
					"SourceSystem": "Claims",
					"ClientApplication": "ClaimCenter",
					"ClientApplicationEvent": "ProcessEvent",
					"PolicyNumber": "POL789012",
					"PolicyEffectiveDate": "2009-09-25 00:00:00",
					"RequestCompleteFlag": "C",
					"AddUser": "printbundling",
					"MostRcntGrpId": 1,
					"ReferenceNumbers": {
						"ReferenceNumber": {
							"Number": "POL789012",
							"Type": "Policy"
						}
					},
					"Packets": {
						"Packet": [
							{
								"PacketID": 30000010,
								"PacketType": "Notice",
								"RecipientType": "Insured",
								"PacketFormat": "PDF",
								"PacketDestination": "PrintVendor",
								"PacketMailDate": "2010-09-02 00:00:00",
								"DocumentProducerJobNo": 123456,
								"MostRecentAuditStep": 60,
								"GroupID": 1,
								"Forms": {
									"Form": [
										{
											"FormType": "Declaration",
											"FormNo": "AK1334",
											"FormEditionDate": "0609",
											"FormDescription": "Declaration",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4579",
											"FormEditionDate": "0106",
											"FormDescription": "Dwelling Policy Jacket",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4556",
											"FormEditionDate": "0206",
											"FormDescription": "Additional Charges And Fees Endorsement\r\t\t\t\t\t\t",
											"FormSelectionReason": "Mandatory",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}
									]
								},
								"PacketMetric": {
									"RatingStateCode": "NY",
									"UWCode": 24,
									"LOBCode": "DFIRE",
									"PackageCode": "M",
									"ContentID": "qazx-2137",
									"PacketMatricXml": {
										"CData": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><bin name=\"default\" spoolid=\"432\" inputfile=\"ThomasKemperClaims-UAT\"><envelope startpagenumber=\"1\"><document batchid=\"411\" transno=\"1\" sysid=\"411_1_942\" docdefresid=\"1128000154\" docdefresverid=\"1129004695\" startpage=\"1\" pagecount=\"1\"><property name=\"VIP\" value=\"N\"/><property name=\"PV_ReferenceNum\" value=\"Claim\"/><property name=\"print.server\" value=\"PDF\"/><property name=\"Lob\" value=\"AUTOP\"/><property name=\"InsuredFirst\" value=\"Brad\"/><property name=\"RecipientType\" value=\"TO\"/><property name=\"ClaimNum\" value=\"331 512003\"/><property name=\"Company\" value=\"KAH\"/><property name=\"review.jobsetup.name\" value=\"ClaimPacket\"/><property name=\"PV_City\" value=\"Armagh\"/><property name=\"DocType\" value=\"Claim Adjudication\"/><property name=\"LossDate\" value=\"2010-04-12\"/><property name=\"PV_Zip\" value=\"15920\"/><property name=\"MailType\" value=\"FCLASS\"/><property name=\"print.queuename\" value=\"10000450\"/><property name=\"PV_Address1\" value=\"92 Lonely Pines Estate Road\"/><property name=\"PolNum\" value=\"HB 866824\"/><property name=\"packet.destination\" value=\"PrintVendor\"/><property name=\"TransType\" value=\"ADD\"/><property name=\"TrackingDocFormat\" value=\"PDF\"/><property name=\"print.jobsetup\" value=\"ClaimPacket\"/><property name=\"Description\" value=\"F941T:Freeform Letter Request\"/><property name=\"ClaimSerNum\" value=\"51\"/><property name=\"review.jobsetup.resid\" value=\"1129000327\"/><property name=\"RiskState\" value=\"PA\"/><property name=\"PV_Name1\" value=\"Brad Kurtz\"/><property name=\"ClaimKind\" value=\"A\"/><property name=\"CaptureDate\" value=\"2010-07-01T10:22:55.257-05:00\"/><property name=\"OrigRCO\" value=\"331\"/><property name=\"SubType\" value=\"Letters\"/><property name=\"Origin\" value=\"GWCC\"/><property name=\"PV_MailCode\" value=\"M\"/><property name=\"InsuredLast\" value=\"Kurtz\"/><property name=\"print.config.resid\" value=\"1129000327\"/><property name=\"packet.type\" value=\"Claims\"/><property name=\"TrackingID\" value=\"10000450\"/><property name=\"LithoPageCount\" value=\"0\"/><property name=\"AdjOwner\" value=\"kahzcc13 SuperUser\"/><property name=\"fractionalRoundingNumberBottom\" value=\"235\"/><property name=\"PV_State\" value=\"PA\"/><property name=\"PV_ComponentOME\" value=\"OME\"/><property name=\"ClaimCenterID\" value=\"69363e6a-8f87-4987-80c7-4429c0478494\"/><property name=\"CompCode\" value=\"24\"/><property name=\"PV_MailType\" value=\"FCLASS\"/><property name=\"PV_TrackingID\" value=\"10000450\"/><property name=\"USGClaimNum\" value=\"C402284PA10\"/><property name=\"MailDate\" value=\"2010-07-01\"/><property name=\"SupAdj\" value=\"kahzcc13 SuperUser\"/></document><document batchid=\"411\" transno=\"1\" sysid=\"411_1_943\" docdefresid=\"1128000108\" docdefresverid=\"1129004022\" startpage=\"3\" pagecount=\"1\"><property name=\"formLetterNumber\" value=\"F941T\"/></document></envelope><totals file-envelopes=\"1\" file-documents=\"2\" file-pages=\"4\" bin-envelopes=\"1\" bin-documents=\"2\" bin-pages=\"4\"/></bin>"
									}
								},
								"Steps": {
									"Step": [
									        {"code" : 20,
									         "detail" : "Packet Created",
									         "timestamp" : "1439825793900"
									        },
									        {"code" : 30,
										     "detail" : "Send To Document Producer",
										     "timestamp" : "1439825793900"
										    }										    
									]
								}
							}, {
								"PacketID": 30000011,
								"PacketType": "Notice",
								"RecipientType": "Insured",
								"PacketFormat": "PDF",
								"PacketDestination": "PrintVendor",
								"PacketMailDate": "2010-08-09 00:00:00",
								"DocumentProducerJobNo": 123456,
								"MostRecentAuditStep": 60,
								"GroupID": 1,
								"Forms": {
									"Form": [
										{
											"FormType": "Declaration",
											"FormNo": "AK1334",
											"FormEditionDate": "0609",
											"FormDescription": "Declaration",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4579",
											"FormEditionDate": "0106",
											"FormDescription": "Dwelling Policy Jacket",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4556",
											"FormEditionDate": "0206",
											"FormDescription": "Additional Charges And Fees Endorsement\r\t\t\t\t\t\t",
											"FormSelectionReason": "Mandatory",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}
									]
								},
								"PacketMetric": {
									"RatingStateCode": "NY",
									"UWCode": 24,
									"LOBCode": "DFIRE",
									"PackageCode": "M",
									"ContentID": "qazx-2137",
									"PacketMatricXml": {
										"CData": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><bin name=\"default\" spoolid=\"432\" inputfile=\"ThomasKemperClaims-UAT\"><envelope startpagenumber=\"1\"><document batchid=\"411\" transno=\"1\" sysid=\"411_1_942\" docdefresid=\"1128000154\" docdefresverid=\"1129004695\" startpage=\"1\" pagecount=\"1\"><property name=\"VIP\" value=\"N\"/><property name=\"PV_ReferenceNum\" value=\"Claim\"/><property name=\"print.server\" value=\"PDF\"/><property name=\"Lob\" value=\"AUTOP\"/><property name=\"InsuredFirst\" value=\"Brad\"/><property name=\"RecipientType\" value=\"TO\"/><property name=\"ClaimNum\" value=\"331 512003\"/><property name=\"Company\" value=\"KAH\"/><property name=\"review.jobsetup.name\" value=\"ClaimPacket\"/><property name=\"PV_City\" value=\"Armagh\"/><property name=\"DocType\" value=\"Claim Adjudication\"/><property name=\"LossDate\" value=\"2010-04-12\"/><property name=\"PV_Zip\" value=\"15920\"/><property name=\"MailType\" value=\"FCLASS\"/><property name=\"print.queuename\" value=\"10000450\"/><property name=\"PV_Address1\" value=\"92 Lonely Pines Estate Road\"/><property name=\"PolNum\" value=\"HB 866824\"/><property name=\"packet.destination\" value=\"PrintVendor\"/><property name=\"TransType\" value=\"ADD\"/><property name=\"TrackingDocFormat\" value=\"PDF\"/><property name=\"print.jobsetup\" value=\"ClaimPacket\"/><property name=\"Description\" value=\"F941T:Freeform Letter Request\"/><property name=\"ClaimSerNum\" value=\"51\"/><property name=\"review.jobsetup.resid\" value=\"1129000327\"/><property name=\"RiskState\" value=\"PA\"/><property name=\"PV_Name1\" value=\"Brad Kurtz\"/><property name=\"ClaimKind\" value=\"A\"/><property name=\"CaptureDate\" value=\"2010-07-01T10:22:55.257-05:00\"/><property name=\"OrigRCO\" value=\"331\"/><property name=\"SubType\" value=\"Letters\"/><property name=\"Origin\" value=\"GWCC\"/><property name=\"PV_MailCode\" value=\"M\"/><property name=\"InsuredLast\" value=\"Kurtz\"/><property name=\"print.config.resid\" value=\"1129000327\"/><property name=\"packet.type\" value=\"Claims\"/><property name=\"TrackingID\" value=\"10000450\"/><property name=\"LithoPageCount\" value=\"0\"/><property name=\"AdjOwner\" value=\"kahzcc13 SuperUser\"/><property name=\"fractionalRoundingNumberBottom\" value=\"235\"/><property name=\"PV_State\" value=\"PA\"/><property name=\"PV_ComponentOME\" value=\"OME\"/><property name=\"ClaimCenterID\" value=\"69363e6a-8f87-4987-80c7-4429c0478494\"/><property name=\"CompCode\" value=\"24\"/><property name=\"PV_MailType\" value=\"FCLASS\"/><property name=\"PV_TrackingID\" value=\"10000450\"/><property name=\"USGClaimNum\" value=\"C402284PA10\"/><property name=\"MailDate\" value=\"2010-07-01\"/><property name=\"SupAdj\" value=\"kahzcc13 SuperUser\"/></document><document batchid=\"411\" transno=\"1\" sysid=\"411_1_943\" docdefresid=\"1128000108\" docdefresverid=\"1129004022\" startpage=\"3\" pagecount=\"1\"><property name=\"formLetterNumber\" value=\"F941T\"/></document></envelope><totals file-envelopes=\"1\" file-documents=\"2\" file-pages=\"4\" bin-envelopes=\"1\" bin-documents=\"2\" bin-pages=\"4\"/></bin>"
									}
								},
								"Steps": {
									"Step": [
									        {"code" : 20,
										         "detail" : "Packet Created",
										         "timestamp" : "1439825793900"
										        }	
									]
								}
							}, {
								"PacketID": 30000012,
								"PacketType": "Invoice",
								"RecipientType": "Insured",
								"PacketFormat": "PDF",
								"PacketDestination": "PrintVendor",
								"PacketMailDate": "2010-08-09 00:00:00",
								"DocumentProducerJobNo": 123456,
								"MostRecentAuditStep": 60,
								"GroupID": 1,
								"Forms": {
									"Form": [
										{
											"FormType": "Declaration",
											"FormNo": "AK1334",
											"FormEditionDate": "0609",
											"FormDescription": "Declaration",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4579",
											"FormEditionDate": "0106",
											"FormDescription": "Dwelling Policy Jacket",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4556",
											"FormEditionDate": "0206",
											"FormDescription": "Additional Charges And Fees Endorsement\r\t\t\t\t\t\t",
											"FormSelectionReason": "Mandatory",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}
									]
								},
								"PacketMetric": {
									"RatingStateCode": "NY",
									"UWCode": 24,
									"LOBCode": "DFIRE",
									"PackageCode": "M",
									"ContentID": "qazx-2137",
									"PacketMatricXml": {
										"CData": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><bin name=\"default\" spoolid=\"432\" inputfile=\"ThomasKemperClaims-UAT\"><envelope startpagenumber=\"1\"><document batchid=\"411\" transno=\"1\" sysid=\"411_1_942\" docdefresid=\"1128000154\" docdefresverid=\"1129004695\" startpage=\"1\" pagecount=\"1\"><property name=\"VIP\" value=\"N\"/><property name=\"PV_ReferenceNum\" value=\"Claim\"/><property name=\"print.server\" value=\"PDF\"/><property name=\"Lob\" value=\"AUTOP\"/><property name=\"InsuredFirst\" value=\"Brad\"/><property name=\"RecipientType\" value=\"TO\"/><property name=\"ClaimNum\" value=\"331 512003\"/><property name=\"Company\" value=\"KAH\"/><property name=\"review.jobsetup.name\" value=\"ClaimPacket\"/><property name=\"PV_City\" value=\"Armagh\"/><property name=\"DocType\" value=\"Claim Adjudication\"/><property name=\"LossDate\" value=\"2010-04-12\"/><property name=\"PV_Zip\" value=\"15920\"/><property name=\"MailType\" value=\"FCLASS\"/><property name=\"print.queuename\" value=\"10000450\"/><property name=\"PV_Address1\" value=\"92 Lonely Pines Estate Road\"/><property name=\"PolNum\" value=\"HB 866824\"/><property name=\"packet.destination\" value=\"PrintVendor\"/><property name=\"TransType\" value=\"ADD\"/><property name=\"TrackingDocFormat\" value=\"PDF\"/><property name=\"print.jobsetup\" value=\"ClaimPacket\"/><property name=\"Description\" value=\"F941T:Freeform Letter Request\"/><property name=\"ClaimSerNum\" value=\"51\"/><property name=\"review.jobsetup.resid\" value=\"1129000327\"/><property name=\"RiskState\" value=\"PA\"/><property name=\"PV_Name1\" value=\"Brad Kurtz\"/><property name=\"ClaimKind\" value=\"A\"/><property name=\"CaptureDate\" value=\"2010-07-01T10:22:55.257-05:00\"/><property name=\"OrigRCO\" value=\"331\"/><property name=\"SubType\" value=\"Letters\"/><property name=\"Origin\" value=\"GWCC\"/><property name=\"PV_MailCode\" value=\"M\"/><property name=\"InsuredLast\" value=\"Kurtz\"/><property name=\"print.config.resid\" value=\"1129000327\"/><property name=\"packet.type\" value=\"Claims\"/><property name=\"TrackingID\" value=\"10000450\"/><property name=\"LithoPageCount\" value=\"0\"/><property name=\"AdjOwner\" value=\"kahzcc13 SuperUser\"/><property name=\"fractionalRoundingNumberBottom\" value=\"235\"/><property name=\"PV_State\" value=\"PA\"/><property name=\"PV_ComponentOME\" value=\"OME\"/><property name=\"ClaimCenterID\" value=\"69363e6a-8f87-4987-80c7-4429c0478494\"/><property name=\"CompCode\" value=\"24\"/><property name=\"PV_MailType\" value=\"FCLASS\"/><property name=\"PV_TrackingID\" value=\"10000450\"/><property name=\"USGClaimNum\" value=\"C402284PA10\"/><property name=\"MailDate\" value=\"2010-07-01\"/><property name=\"SupAdj\" value=\"kahzcc13 SuperUser\"/></document><document batchid=\"411\" transno=\"1\" sysid=\"411_1_943\" docdefresid=\"1128000108\" docdefresverid=\"1129004022\" startpage=\"3\" pagecount=\"1\"><property name=\"formLetterNumber\" value=\"F941T\"/></document></envelope><totals file-envelopes=\"1\" file-documents=\"2\" file-pages=\"4\" bin-envelopes=\"1\" bin-documents=\"2\" bin-pages=\"4\"/></bin>"
									}
								},
								"Steps": {
									"Step": [
									        {"code" : 95,
										         "detail" : "Packet Error",
										         "timestamp" : "1439825793900"
										        }

									]
								}
							}, {
								"PacketID": 30000023,
								"PacketType": "Invoice",
								"RecipientType": "Insured",
								"PacketFormat": "PDF",
								"PacketDestination": "Archive",
								"PacketMailDate": "2010-08-09 00:00:00",
								"DocumentProducerJobNo": 123456,
								"MostRecentAuditStep": 60,
								"GroupID": 1,
								"Forms": {
									"Form": [
										{
											"FormType": "Declaration",
											"FormNo": "AK1334",
											"FormEditionDate": "0609",
											"FormDescription": "Declaration",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4579",
											"FormEditionDate": "0106",
											"FormDescription": "Dwelling Policy Jacket",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4556",
											"FormEditionDate": "0206",
											"FormDescription": "Additional Charges And Fees Endorsement\r\t\t\t\t\t\t",
											"FormSelectionReason": "Mandatory",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}
									]
								},
								"PacketMetric": {
									"RatingStateCode": "NY",
									"UWCode": 24,
									"LOBCode": "DFIRE",
									"PackageCode": "M",
									"ContentID": "qazx-2137",
									"PacketMatricXml": {
										"CData": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><bin name=\"default\" spoolid=\"432\" inputfile=\"ThomasKemperClaims-UAT\"><envelope startpagenumber=\"1\"><document batchid=\"411\" transno=\"1\" sysid=\"411_1_942\" docdefresid=\"1128000154\" docdefresverid=\"1129004695\" startpage=\"1\" pagecount=\"1\"><property name=\"VIP\" value=\"N\"/><property name=\"PV_ReferenceNum\" value=\"Claim\"/><property name=\"print.server\" value=\"PDF\"/><property name=\"Lob\" value=\"AUTOP\"/><property name=\"InsuredFirst\" value=\"Brad\"/><property name=\"RecipientType\" value=\"TO\"/><property name=\"ClaimNum\" value=\"331 512003\"/><property name=\"Company\" value=\"KAH\"/><property name=\"review.jobsetup.name\" value=\"ClaimPacket\"/><property name=\"PV_City\" value=\"Armagh\"/><property name=\"DocType\" value=\"Claim Adjudication\"/><property name=\"LossDate\" value=\"2010-04-12\"/><property name=\"PV_Zip\" value=\"15920\"/><property name=\"MailType\" value=\"FCLASS\"/><property name=\"print.queuename\" value=\"10000450\"/><property name=\"PV_Address1\" value=\"92 Lonely Pines Estate Road\"/><property name=\"PolNum\" value=\"HB 866824\"/><property name=\"packet.destination\" value=\"PrintVendor\"/><property name=\"TransType\" value=\"ADD\"/><property name=\"TrackingDocFormat\" value=\"PDF\"/><property name=\"print.jobsetup\" value=\"ClaimPacket\"/><property name=\"Description\" value=\"F941T:Freeform Letter Request\"/><property name=\"ClaimSerNum\" value=\"51\"/><property name=\"review.jobsetup.resid\" value=\"1129000327\"/><property name=\"RiskState\" value=\"PA\"/><property name=\"PV_Name1\" value=\"Brad Kurtz\"/><property name=\"ClaimKind\" value=\"A\"/><property name=\"CaptureDate\" value=\"2010-07-01T10:22:55.257-05:00\"/><property name=\"OrigRCO\" value=\"331\"/><property name=\"SubType\" value=\"Letters\"/><property name=\"Origin\" value=\"GWCC\"/><property name=\"PV_MailCode\" value=\"M\"/><property name=\"InsuredLast\" value=\"Kurtz\"/><property name=\"print.config.resid\" value=\"1129000327\"/><property name=\"packet.type\" value=\"Claims\"/><property name=\"TrackingID\" value=\"10000450\"/><property name=\"LithoPageCount\" value=\"0\"/><property name=\"AdjOwner\" value=\"kahzcc13 SuperUser\"/><property name=\"fractionalRoundingNumberBottom\" value=\"235\"/><property name=\"PV_State\" value=\"PA\"/><property name=\"PV_ComponentOME\" value=\"OME\"/><property name=\"ClaimCenterID\" value=\"69363e6a-8f87-4987-80c7-4429c0478494\"/><property name=\"CompCode\" value=\"24\"/><property name=\"PV_MailType\" value=\"FCLASS\"/><property name=\"PV_TrackingID\" value=\"10000450\"/><property name=\"USGClaimNum\" value=\"C402284PA10\"/><property name=\"MailDate\" value=\"2010-07-01\"/><property name=\"SupAdj\" value=\"kahzcc13 SuperUser\"/></document><document batchid=\"411\" transno=\"1\" sysid=\"411_1_943\" docdefresid=\"1128000108\" docdefresverid=\"1129004022\" startpage=\"3\" pagecount=\"1\"><property name=\"formLetterNumber\" value=\"F941T\"/></document></envelope><totals file-envelopes=\"1\" file-documents=\"2\" file-pages=\"4\" bin-envelopes=\"1\" bin-documents=\"2\" bin-pages=\"4\"/></bin>"
									}
								},
								"Steps": {
									"Step": [
										        {"code" : 20,
											         "detail" : "Packet Created",
											         "timestamp" : "1439825793900"
											        },
											        {"code" : 30,
												     "detail" : "Send To Document Producer",
												     "timestamp" : "1439825793900"
												    }
									]
								}
							}, {
								"PacketID": 30000013,
								"PacketType": "Check",
								"RecipientType": "Insured",
								"PacketFormat": "PDF",
								"PacketDestination": "PrintVendor",
								"PacketMailDate": "2010-08-09 00:00:00",
								"DocumentProducerJobNo": 123456,
								"MostRecentAuditStep": 60,
								"GroupID": 1,
								"Forms": {
									"Form": [
										{
											"FormType": "Declaration",
											"FormNo": "AK1334",
											"FormEditionDate": "0609",
											"FormDescription": "Declaration",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4579",
											"FormEditionDate": "0106",
											"FormDescription": "Dwelling Policy Jacket",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4556",
											"FormEditionDate": "0206",
											"FormDescription": "Additional Charges And Fees Endorsement\r\t\t\t\t\t\t",
											"FormSelectionReason": "Mandatory",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}
									]
								},
								"PacketMetric": {
									"RatingStateCode": "NY",
									"UWCode": 24,
									"LOBCode": "DFIRE",
									"PackageCode": "M",
									"ContentID": "qazx-2137",
									"PacketMatricXml": {
										"CData": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><bin name=\"default\" spoolid=\"432\" inputfile=\"ThomasKemperClaims-UAT\"><envelope startpagenumber=\"1\"><document batchid=\"411\" transno=\"1\" sysid=\"411_1_942\" docdefresid=\"1128000154\" docdefresverid=\"1129004695\" startpage=\"1\" pagecount=\"1\"><property name=\"VIP\" value=\"N\"/><property name=\"PV_ReferenceNum\" value=\"Claim\"/><property name=\"print.server\" value=\"PDF\"/><property name=\"Lob\" value=\"AUTOP\"/><property name=\"InsuredFirst\" value=\"Brad\"/><property name=\"RecipientType\" value=\"TO\"/><property name=\"ClaimNum\" value=\"331 512003\"/><property name=\"Company\" value=\"KAH\"/><property name=\"review.jobsetup.name\" value=\"ClaimPacket\"/><property name=\"PV_City\" value=\"Armagh\"/><property name=\"DocType\" value=\"Claim Adjudication\"/><property name=\"LossDate\" value=\"2010-04-12\"/><property name=\"PV_Zip\" value=\"15920\"/><property name=\"MailType\" value=\"FCLASS\"/><property name=\"print.queuename\" value=\"10000450\"/><property name=\"PV_Address1\" value=\"92 Lonely Pines Estate Road\"/><property name=\"PolNum\" value=\"HB 866824\"/><property name=\"packet.destination\" value=\"PrintVendor\"/><property name=\"TransType\" value=\"ADD\"/><property name=\"TrackingDocFormat\" value=\"PDF\"/><property name=\"print.jobsetup\" value=\"ClaimPacket\"/><property name=\"Description\" value=\"F941T:Freeform Letter Request\"/><property name=\"ClaimSerNum\" value=\"51\"/><property name=\"review.jobsetup.resid\" value=\"1129000327\"/><property name=\"RiskState\" value=\"PA\"/><property name=\"PV_Name1\" value=\"Brad Kurtz\"/><property name=\"ClaimKind\" value=\"A\"/><property name=\"CaptureDate\" value=\"2010-07-01T10:22:55.257-05:00\"/><property name=\"OrigRCO\" value=\"331\"/><property name=\"SubType\" value=\"Letters\"/><property name=\"Origin\" value=\"GWCC\"/><property name=\"PV_MailCode\" value=\"M\"/><property name=\"InsuredLast\" value=\"Kurtz\"/><property name=\"print.config.resid\" value=\"1129000327\"/><property name=\"packet.type\" value=\"Claims\"/><property name=\"TrackingID\" value=\"10000450\"/><property name=\"LithoPageCount\" value=\"0\"/><property name=\"AdjOwner\" value=\"kahzcc13 SuperUser\"/><property name=\"fractionalRoundingNumberBottom\" value=\"235\"/><property name=\"PV_State\" value=\"PA\"/><property name=\"PV_ComponentOME\" value=\"OME\"/><property name=\"ClaimCenterID\" value=\"69363e6a-8f87-4987-80c7-4429c0478494\"/><property name=\"CompCode\" value=\"24\"/><property name=\"PV_MailType\" value=\"FCLASS\"/><property name=\"PV_TrackingID\" value=\"10000450\"/><property name=\"USGClaimNum\" value=\"C402284PA10\"/><property name=\"MailDate\" value=\"2010-07-01\"/><property name=\"SupAdj\" value=\"kahzcc13 SuperUser\"/></document><document batchid=\"411\" transno=\"1\" sysid=\"411_1_943\" docdefresid=\"1128000108\" docdefresverid=\"1129004022\" startpage=\"3\" pagecount=\"1\"><property name=\"formLetterNumber\" value=\"F941T\"/></document></envelope><totals file-envelopes=\"1\" file-documents=\"2\" file-pages=\"4\" bin-envelopes=\"1\" bin-documents=\"2\" bin-pages=\"4\"/></bin>"
									}
								},
								"Steps": {
									"Step": [
										        {"code" : 20,
											         "detail" : "Packet Created",
											         "timestamp" : "1439825793900"
											        },
											        {"code" : 30,
												     "detail" : "Send To Document Producer",
												     "timestamp" : "1439825793900"
												    },
											        {"code" : 50,
											         "detail" : "Post Processor Uploaded",
											         "timestamp" : "1439825793900"
											        }
									]
								}
							}, {
								"PacketID": 30000014,
								"PacketType": "Letter",
								"RecipientType": "Insured",
								"PacketFormat": "PDF",
								"PacketDestination": "PrintVendor",
								"PacketMailDate": "2010-08-09 00:00:00",
								"DocumentProducerJobNo": 123456,
								"MostRecentAuditStep": 60,
								"GroupID": 1,
								"Forms": {
									"Form": [
										{
											"FormType": "Declaration",
											"FormNo": "AK1334",
											"FormEditionDate": "0609",
											"FormDescription": "Declaration",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4579",
											"FormEditionDate": "0106",
											"FormDescription": "Dwelling Policy Jacket",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4556",
											"FormEditionDate": "0206",
											"FormDescription": "Additional Charges And Fees Endorsement\r\t\t\t\t\t\t",
											"FormSelectionReason": "Mandatory",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}
									]
								},
								"PacketMetric": {
									"RatingStateCode": "NY",
									"UWCode": 24,
									"LOBCode": "DFIRE",
									"PackageCode": "M",
									"ContentID": "qazx-2137",
									"PacketMatricXml": {
										"CData": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><bin name=\"default\" spoolid=\"432\" inputfile=\"ThomasKemperClaims-UAT\"><envelope startpagenumber=\"1\"><document batchid=\"411\" transno=\"1\" sysid=\"411_1_942\" docdefresid=\"1128000154\" docdefresverid=\"1129004695\" startpage=\"1\" pagecount=\"1\"><property name=\"VIP\" value=\"N\"/><property name=\"PV_ReferenceNum\" value=\"Claim\"/><property name=\"print.server\" value=\"PDF\"/><property name=\"Lob\" value=\"AUTOP\"/><property name=\"InsuredFirst\" value=\"Brad\"/><property name=\"RecipientType\" value=\"TO\"/><property name=\"ClaimNum\" value=\"331 512003\"/><property name=\"Company\" value=\"KAH\"/><property name=\"review.jobsetup.name\" value=\"ClaimPacket\"/><property name=\"PV_City\" value=\"Armagh\"/><property name=\"DocType\" value=\"Claim Adjudication\"/><property name=\"LossDate\" value=\"2010-04-12\"/><property name=\"PV_Zip\" value=\"15920\"/><property name=\"MailType\" value=\"FCLASS\"/><property name=\"print.queuename\" value=\"10000450\"/><property name=\"PV_Address1\" value=\"92 Lonely Pines Estate Road\"/><property name=\"PolNum\" value=\"HB 866824\"/><property name=\"packet.destination\" value=\"PrintVendor\"/><property name=\"TransType\" value=\"ADD\"/><property name=\"TrackingDocFormat\" value=\"PDF\"/><property name=\"print.jobsetup\" value=\"ClaimPacket\"/><property name=\"Description\" value=\"F941T:Freeform Letter Request\"/><property name=\"ClaimSerNum\" value=\"51\"/><property name=\"review.jobsetup.resid\" value=\"1129000327\"/><property name=\"RiskState\" value=\"PA\"/><property name=\"PV_Name1\" value=\"Brad Kurtz\"/><property name=\"ClaimKind\" value=\"A\"/><property name=\"CaptureDate\" value=\"2010-07-01T10:22:55.257-05:00\"/><property name=\"OrigRCO\" value=\"331\"/><property name=\"SubType\" value=\"Letters\"/><property name=\"Origin\" value=\"GWCC\"/><property name=\"PV_MailCode\" value=\"M\"/><property name=\"InsuredLast\" value=\"Kurtz\"/><property name=\"print.config.resid\" value=\"1129000327\"/><property name=\"packet.type\" value=\"Claims\"/><property name=\"TrackingID\" value=\"10000450\"/><property name=\"LithoPageCount\" value=\"0\"/><property name=\"AdjOwner\" value=\"kahzcc13 SuperUser\"/><property name=\"fractionalRoundingNumberBottom\" value=\"235\"/><property name=\"PV_State\" value=\"PA\"/><property name=\"PV_ComponentOME\" value=\"OME\"/><property name=\"ClaimCenterID\" value=\"69363e6a-8f87-4987-80c7-4429c0478494\"/><property name=\"CompCode\" value=\"24\"/><property name=\"PV_MailType\" value=\"FCLASS\"/><property name=\"PV_TrackingID\" value=\"10000450\"/><property name=\"USGClaimNum\" value=\"C402284PA10\"/><property name=\"MailDate\" value=\"2010-07-01\"/><property name=\"SupAdj\" value=\"kahzcc13 SuperUser\"/></document><document batchid=\"411\" transno=\"1\" sysid=\"411_1_943\" docdefresid=\"1128000108\" docdefresverid=\"1129004022\" startpage=\"3\" pagecount=\"1\"><property name=\"formLetterNumber\" value=\"F941T\"/></document></envelope><totals file-envelopes=\"1\" file-documents=\"2\" file-pages=\"4\" bin-envelopes=\"1\" bin-documents=\"2\" bin-pages=\"4\"/></bin>"
									}
								},
								"Steps": {
									"Step": [
										        {"code" : 20,
											         "detail" : "Packet Created",
											         "timestamp" : "1439825793900"
											        },
											        {"code" : 30,
												     "detail" : "Send To Document Producer",
												     "timestamp" : "1439825793900"
												    },
											        {"code" : 50,
											         "detail" : "Post Processor Uploaded",
											         "timestamp" : "1439825793900"
											        },
											        {"code" : 60,
												     "detail" : "PrintVendor Ready",
												     "timestamp" : "1439825793900"
												    }
									]
								}
							}, {
								"PacketID": 30000020,
								"PacketType": "Letter",
								"RecipientType": "Insured",
								"PacketFormat": "PDF",
								"PacketDestination": "Archive",
								"PacketMailDate": "2010-08-09 00:00:00",
								"DocumentProducerJobNo": 123456,
								"MostRecentAuditStep": 60,
								"GroupID": 1,
								"Forms": {
									"Form": [
										{
											"FormType": "Declaration",
											"FormNo": "AK1334",
											"FormEditionDate": "0609",
											"FormDescription": "Declaration",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4579",
											"FormEditionDate": "0106",
											"FormDescription": "Dwelling Policy Jacket",
											"FormSelectionReason": "Coverage",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}, {
											"FormType": "Endorsement",
											"FormNo": "AK4556",
											"FormEditionDate": "0206",
											"FormDescription": "Additional Charges And Fees Endorsement\r\t\t\t\t\t\t",
											"FormSelectionReason": "Mandatory",
											"FormPrintFlag": "Y",
											"FormPrintSuppressionFlag": ""
										}
									]
								},
								"PacketMetric": {
									"RatingStateCode": "NY",
									"UWCode": 24,
									"LOBCode": "DFIRE",
									"PackageCode": "M",
									"ContentID": "qazx-2137",
									"PacketMatricXml": {
										"CData": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><bin name=\"default\" spoolid=\"432\" inputfile=\"ThomasKemperClaims-UAT\"><envelope startpagenumber=\"1\"><document batchid=\"411\" transno=\"1\" sysid=\"411_1_942\" docdefresid=\"1128000154\" docdefresverid=\"1129004695\" startpage=\"1\" pagecount=\"1\"><property name=\"VIP\" value=\"N\"/><property name=\"PV_ReferenceNum\" value=\"Claim\"/><property name=\"print.server\" value=\"PDF\"/><property name=\"Lob\" value=\"AUTOP\"/><property name=\"InsuredFirst\" value=\"Brad\"/><property name=\"RecipientType\" value=\"TO\"/><property name=\"ClaimNum\" value=\"331 512003\"/><property name=\"Company\" value=\"KAH\"/><property name=\"review.jobsetup.name\" value=\"ClaimPacket\"/><property name=\"PV_City\" value=\"Armagh\"/><property name=\"DocType\" value=\"Claim Adjudication\"/><property name=\"LossDate\" value=\"2010-04-12\"/><property name=\"PV_Zip\" value=\"15920\"/><property name=\"MailType\" value=\"FCLASS\"/><property name=\"print.queuename\" value=\"10000450\"/><property name=\"PV_Address1\" value=\"92 Lonely Pines Estate Road\"/><property name=\"PolNum\" value=\"HB 866824\"/><property name=\"packet.destination\" value=\"PrintVendor\"/><property name=\"TransType\" value=\"ADD\"/><property name=\"TrackingDocFormat\" value=\"PDF\"/><property name=\"print.jobsetup\" value=\"ClaimPacket\"/><property name=\"Description\" value=\"F941T:Freeform Letter Request\"/><property name=\"ClaimSerNum\" value=\"51\"/><property name=\"review.jobsetup.resid\" value=\"1129000327\"/><property name=\"RiskState\" value=\"PA\"/><property name=\"PV_Name1\" value=\"Brad Kurtz\"/><property name=\"ClaimKind\" value=\"A\"/><property name=\"CaptureDate\" value=\"2010-07-01T10:22:55.257-05:00\"/><property name=\"OrigRCO\" value=\"331\"/><property name=\"SubType\" value=\"Letters\"/><property name=\"Origin\" value=\"GWCC\"/><property name=\"PV_MailCode\" value=\"M\"/><property name=\"InsuredLast\" value=\"Kurtz\"/><property name=\"print.config.resid\" value=\"1129000327\"/><property name=\"packet.type\" value=\"Claims\"/><property name=\"TrackingID\" value=\"10000450\"/><property name=\"LithoPageCount\" value=\"0\"/><property name=\"AdjOwner\" value=\"kahzcc13 SuperUser\"/><property name=\"fractionalRoundingNumberBottom\" value=\"235\"/><property name=\"PV_State\" value=\"PA\"/><property name=\"PV_ComponentOME\" value=\"OME\"/><property name=\"ClaimCenterID\" value=\"69363e6a-8f87-4987-80c7-4429c0478494\"/><property name=\"CompCode\" value=\"24\"/><property name=\"PV_MailType\" value=\"FCLASS\"/><property name=\"PV_TrackingID\" value=\"10000450\"/><property name=\"USGClaimNum\" value=\"C402284PA10\"/><property name=\"MailDate\" value=\"2010-07-01\"/><property name=\"SupAdj\" value=\"kahzcc13 SuperUser\"/></document><document batchid=\"411\" transno=\"1\" sysid=\"411_1_943\" docdefresid=\"1128000108\" docdefresverid=\"1129004022\" startpage=\"3\" pagecount=\"1\"><property name=\"formLetterNumber\" value=\"F941T\"/></document></envelope><totals file-envelopes=\"1\" file-documents=\"2\" file-pages=\"4\" bin-envelopes=\"1\" bin-documents=\"2\" bin-pages=\"4\"/></bin>"
									}
								},
								"Steps": {
									"Step": [
										        {"code" : 20,
											         "detail" : "Packet Created",
											         "timestamp" : "1439825793900"
											        }
	
									]
								}
							}
						]
					},
					"Steps": {
						"Step": 10
					}
				}
//				$log.debug('returning data: '+JSON.stringify(data));
				return data;
			}
	}])