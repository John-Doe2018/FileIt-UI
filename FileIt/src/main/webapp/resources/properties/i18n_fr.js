/**
 * this file contains key value pairs for the languages
 */

fileItApp
		.config(function($translateProvider) {
			$translateProvider
					.useSanitizeValueStrategy('escaped')
					.

					translations(
							'fr',
							{
								APP_TITLE : "Omnistore - Back-office",
								BACK : "Le retour",
								OFFICE : "Le bureau",
								BUSINESS_PERIOD : "Période d'affaires",
								ADD_FLOAT_REG_ERR : 'Aucun registre est actif',
								ADD_FLOAT_OPR_ERR : "Ajouter flotteur est pas autorisé dans l'opérateur accountibility",
								BUSINESS_DATE : 'affaires date',
								MANAGER_AUTHORIZATION : 'La responsible autorisation',
								LOGIN : "Connexion",
								WS_LOOKUP_ERR_DELAYED : 'Déclaration ne peut pas être fait pour le même jour ouvrable.',
								SAFE_AMT_ERR : 'Montant Safe doit être supérieure à',
								MINIMUM_SAFE_AMT_ERR : 'Montant Safe ne doit pas être inférieure à:',
								CLOSING_BALANCE_ERR : 'montant Safe est moins le montant de fermeture du dernier magasin :',
								STANDARD_REPORT : 'Rapport standard',
								EXCEPTION_REPORT : "Rapport d'exception",
								GENERATE_REPORT : 'Générer un rapport',
								MANAGE_SCHEDULE : 'GÉRER ANNEXE',
								VALIDATION_MSG144 : 'Limite supérieure Montant',
								REPORT : 'rapport',
								SELECT_A_REPORT : 'Sélectionnez un rapport',
								Operator_ID : 'ID opérateur',
								Select_An_Operator : 'Sélectionnez un opérateur',
								Terminal_ID : 'Terminal ID',
								More : 'Plus',
								Report_generated_by : 'Rapport généré par',
								Select_A_Terminal : 'Sélectionnez A Terminal',
								Select_A_Safe : 'Sélectionnez un Safe',
								From_Date : 'Partir de la date',
								To_Date : 'À ce jour',
								Department_ID : 'Dept. Id',
								Select_A_Department : 'Sélectionnez un département',
								Sub_Department_ID : 'Sous Dept. Id',
								Select_A_Sub_Department : 'Sélectionnez un département Sous',
								Order_By : 'Commandé par',
								Select_Order_By : 'Sélectionnez Trier par',
								SETTLEMENT_NOT_ALLOWD : 'règlement de magasin pas autorisé',
								FIRST_TIME_USER : "L'utilisateur pour le premier temps. Veuillez changer le mot de passe pour continuer",
								TOTAL_AMOUNT : 'Le montant total',
								CREDIT_DEBIT : 'Crédit débit',
								CARD : 'Carte',
								USER_NAME : "le nom d'utilisateur",
								USER_NAME_PLACEHOLDER : "S'il vous plaît entrez le nom d'utilisateur",
								PASSWORD_PLACEHOLDER : "Veuillez entrer le mot de passe",
								PWD_CHNGE_MSG : 'Souhaitez-vous changer le mot de passe.',
								PASSWORD_CHANGE_SUCCESS : 'Mot de passe a été changé avec succès.',
								PASSWORD : "Mot de passe ",
								CLEAR : "Clair",
								LOGOUT : "Déconnexion",
								DAILY_OPERATIONS : "Les opérations quotidiennes",
								CONFIRM_LOGOUT : 'Déconnexion confirmer.',
								LOGOUT_MSG : 'Êtes-vous sûr que vous souhaitez à deconnecter ?',
								SAFE_FUNCTIONS : "Les fonctions sûres",
								DASH_BOARD : "Le tableau de bord et rapports",
								MAINTENANCE_FUNCTIONS : "Les fonctions de maintenance",
								CONFIGURATIONS : "Les configurations",
								PROMOTIONS : "Les promotions",
								STORE_BEGIN : "Le magasin est commencé",
								REG_TILL_BEGIN : "Registrer Begin",
								REG_TILL_BEGIN_CAP : "REGISTRE BEGIN",
								REG_TILL_DECLARATION : "Registrer/ La declaration de Till",
								REG_END : "Registrer Fin",
								REG_END_CAP : "REGISTRER FIN",
								SAFE_INITIALIZATION : "L'initialisation sûre",
								SAFE_SPOT_CHECK : "La contrôle de tache sûr",
								BANK_RECEIPT : "Le reçu bancaire",
								BANK_DEPOSIT : "Le versement bancaire",
								LOAN : "Le prêt",
								PICKUP : "Reprendre",
								PAY_IN_PAY_OUT : "Verser et payer.",
								STORE_SETTLEMENT : "le  règlement du magasin",
								TOTAL : 'Total.',
								TOTAL_CAP : 'Total.',
								QUANTITY : 'La quantité',
								QUANTITY_CAP : 'La quantité',
								CURRENCY : 'La devise',
								CURRENCY_CAP : 'La devise',
								COINS : 'Les pièces de monnaie',
								NOTES : 'Las billets',
								SOURCE : 'La source',
								TILL : 'Till',
								REGISTER : 'Registrer',
								CASH : 'La trésorerie',
								TENDER_TYPE : "le type d'appel d'Offre",
								INITIALIZE_STORE : "Initialisez le magasin",
								STORE_END : "Le fin du magasin",
								BUSINESS_DATE : "La date d'affaires",
								SAFE_AMOUNT : "Le montant sûre",
								CANCEL : "Annuler",
								DEPOSIT_SOURCE : "La source",
								DEPOSIT_DESTINATION : "La destination",
								DEPOSIT_AMOUNT : "Le montant",
								BAG_BRAND_ID : "Sac/ID de marque",
								PLUS_SIGN : "+",
								REMARKS : "Remarques",
								CHEQUE_NO : "Le numéro de chèque ",
								BANK_NAME : "La banque",
								GIFT_VOUCHER : 'Chèque-cadeau',
								SAVE_ADD : "Sauver et ajouter",
								DATE : "La date",
								STORE : "Le magasin",
								LOAN_SETTLEMENT : "Le prêt",
								PICKUP_SETTLEMENT : "Reprendre",
								FLOAT_SETTLEMENT : "FLOTTE",
								CONFIRM : "Confirmer",
								CHANGE_PASSWORD : "changer mot de passe",
								UPDATE : "Mise à jour",
								USER_ID : "L'Identifiant utilisateur",
								OLD_PASSWORD : "L'ancien mot de passe",
								NEW_PASSWORD : "Le nouveau mot de passe",
								CONFIRM_PASSWORD : "Confirmer le mot",
								PASSWORD_REQUIREMENT : "Veuillez entrer  les informations suivantes pour changer votre de mot de passe",
								OLD_PASSWORD_PLACEHOLDER : "Veuillez entrer l'ancien mot de passe",
								NEW_PASSWORD_PLACEHOLDER : "Veuillez entrer le nouveau mot de passe",
								CONFIRM_PASSWORD_PLACEHOLDER : " Veuillez retaper le nouveau mot de passe",
								NOTES_CAP : 'Les billets/notes',
								COINS_CAP : 'Les pièces de monnaieE',
								CHEQUE_NO_CAP : 'Le numéro de chèque ',
								DATE_CAP : 'La date',
								BANK_CAP : 'La banque',
								AMOUNT : 'Le montant',
								COUPON_NO : 'Le numéro de coupon',
								VOUCHER_NO : 'Numéro de bon',
								EXPECTED : 'Attendue',
								DECLARED : 'Déclaré',
								OVER : 'plus',
								SHORT : 'court',
								TENDERS : "L'appels d'Offres",
								REGISTER_ID : "L'identification du registre",
								TILL_NO : 'Le numéro de Till',
								Select_Register_ID : "Veuillez choisir l'identifiant de registre",
								Select_Till_No : 'Veuillez choisir le numéro de Till',
								DECLARE : 'Déclarer',
								EXPECTED_SMALL : 'Attendue',
								DECLARED_SMALL : 'Déclaré',
								OVER_SMALL : 'plus',
								SHORT_SMALL : 'court',
								REASON_CODE : 'Le code du motif',
								TOLERANCE_SMALL : 'Tolérance',
								Select_Reason_Code : 'Veuillez choisir un code du motif',
								RE_ENTER : 'Rentrer',
								STORE_COUPON : 'Coupon de magasin',
								LOYALTY_CARD : 'Carte de fidélité',
								GIFT_CARD : 'Carte cadeau',
								CHEQUE : 'Vérifier',
								GIFT_CERTIFICATE : 'Cadeau certifié',
								STORED_VALUE : 'Valeur stockée',
								VALIDATION_MSG : 'Vous avez laissé le champ vide.',
								VALIDATION_MSG1 : 'Votre champ est trop court.',
								VALIDATION_MSG2 : 'Votre champ est trop longue.',
								VALIDATION_MSG3 : 'Votre champ a une adresse e-mail invalide.',
								VALIDATION_MSG4 : 'Seulement des caractères alphanumériques sont autorisés.',
								VALIDATION_MSG5 : "Seulement des caractères alphanumériques avec l'espace vides sont autorisés.",
								VALIDATION_MSG6 : 'Seulement des nombres positifs sont autorisés.',
								VALIDATION_MSG7 : "Seulement  les caractères d' alphabet sont autorisés.",
								VALIDATION_MSG8 : "Seulement  les caractères d' alphabet avec l'espace vides sont autorisés.",
								VALIDATION_MSG9 : 'Pas un numéro de téléphone valable.',
								VALIDATION_MSG10 : 'Montant non valable.',
								VALIDATION_MSG11 : "Le montant n'est pas dans la limite.",
								VALIDATION_MSG12 : "Le montant n'est pas dans la limite.",
								GRAND_TOTAL : 'La somme globale',
								FORGOT_PWD : 'oublier mot de passe ?',
								CHANGE_PWD : ' Finir registrer/till',
								COMPLETED_REGISTER_TILL : 'INSCRIVEZ-VOUS REMPLI / TILL',
								STORE_END_SUCCESS : 'Le magasin a terminée.',
								STORE_BEGIN_SUCCESS : 'Le magasin a commencé.',
								STORE_SETTLEMENT_SUCCESS : 'Le règlement du magasin a complété avec succès.',
								TILL_DECLARATION_ERR : 'Aucun till est disponible pour la déclaration.',
								WS_LOOKUP_ERR : "Register n'a pas commencé.",
								REASON_CODE_ERR : "Veuillez choisissez un code de raison.",
								TILL_DECLARATION_SUCCESS : 'La déclaration faite avec succès.',
								BANK_DEPOSIT_EMPTY_CHECK_ERROR : "Veuillez entrer un montant.",
								BANK_DEPOSIT_SUCCESS : 'Le versement bancaire a fait avec succès.',
								BANK_RECEIPT_SUCCESS : 'Le reçu bancaire a fait avec succès.',
								MGR_ROLE_CHECK : 'Le terminal est verrouillé par un autre opérateur.',
								MGR_ROLE_CHECK_END : 'Souhaitez-vous continuer',
								TenderSummary : "Le sommaire de l'appel d'offre",
								Actual : 'Réel',
								SafeSummary : 'Le sommaire sûr',
								ERR_NOT_AUTH : 'Vous n\'êtes pas autorisé à accéder à cette application.',
								timeInterval : "L'intervalle de Temps",
								operator : "L'opérateur",
								terminal : 'Le terminal',
								noOfSalesTxn : 'Le nombre de transaction de ventes',
								noOfItemsSold : 'Le nombre des articles vendus',
								totalSalesAmount : 'Le montant total de ventes',
								totalReturnsAmount : 'Le montant total de retours',
								salesExcludingReturn : 'Des ventes hors retour',
								avgNoOfItems : "Le nombre moyen d'articles",
								avgAmount : 'Le montant moyen',
								businessDate : "La date d'affaires",
								avgTxnAmount : 'Le montant de transaction moyen',
								dollarAmountOverShort : 'Somme en dollars plus / Court',
								noOfPostVoids : 'Le nombre de postes vides',
								noOfPriceOverrides : 'Le nobre de surpassements de prix',
								cashier : 'Le caissier',
								cash : 'La trésorerie',
								creditCard : 'La cartes de crédit',
								debitCard : 'La carte de débit',
								coupon : 'Le coupon',
								giftVoucher : 'La chèque-cadeau',
								giftCard : 'La carte-cadeau',
								giftCertificate : 'La chèque-cadeau',
								creditNote : 'La note de crédit',
								cheque : 'La chèque',
								foreignCurrency : 'Les devises étrangères',
								travellersCheque : 'Le voyageur chèque',
								cashHire : "L'embauche liquide",
								advanceInvoice : "Le facture d'avance",
								loyaltyPoints : 'Les points de fidélité',
								totalDiscountAmount : 'le montant total de reprise',
								deptSalesAmount : 'Le montant de ventes de département',
								percentageOfSalesByQty : 'Pourcentage de ventes (par quantité)',
								percentageOfSalesBySalesAmount : 'Pourcentage de ventes (par quantité de ventes)',
								department : 'Le département',
								subDepartment : 'Le sous-département',
								itemCode : "Le code de l'article",
								itemShortDesc : "La description courte de l'article",
								itemSalesAmount : "Le montant de Ventes d'Article",
								transactionId : "L'identifiant de transaction",
								transactionDate : 'La date de transaction',
								SUMMARY : 'Résumé',
								Declaration : 'Déclaration',
								ADDITION : 'UNE ADDITION',
								SPENDING : 'DÉPENSES',
								reasonCode : 'Le code du motif',
								OpeningBalance : "Solde d'ouverture",
								Float : 'Flotte',
								PayIn : 'Payer en',
								PayOut : 'Paiements auxquels',
								Select : 'Sélectionner',
								SUCCESS : 'LE SUCCÈS',
								IDLE_MSG : 'Vous étiez inactif pendant log trop long.Please dans .',
								ERROR : 'ERREUR',
								WARNING : 'ATTENTION',
								NO : 'NON',
								YES : 'OUI',
								SAVE : 'sauvegarder',
								MAINTAIN_EMPLOYEE : 'Maintenir des employés',
								CREATE_EMPLOYEE : 'Créer des employés',
								CREATE_EMPLOYEE_HEADER : 'CRÉER DES EMPLOYÉS',
								UPDATE_EMPLOYEE : 'Mise à jour des employés',
								ASSIGN_ROLES_EMPLOYEE : 'Attribuer des rôles pour les employés',
								SELECTALL : 'Sélectionner tout',
								STATUS : 'statut',
								RESET_PASSWORD_MSG : "S'il vous plaît cliquer sur le bouton de réinitialisation pour confirmer Reset.",
								UNLOCK_ACCOUNT_MESSAGE : 'Aimeriez-vous pour déverrouiller votre compte?',
								OPENINGCASH : 'ouverture liquide',
								REG_BUSINESS_DATE : "Entreprise Date",
								CONFIRMATION : "CONFIRMATION",
								REG_BEGIN_MODAL_MSG : "veux-tu ouvrir les registres?",
								REG_END_MODAL_MSG : "Do you want to mettre fin aux registres?",
								NO_TILL_AVAILABLE : "Pas jusqu'à disponible pour ce poste de travail.",
								PICKUP_SUMMARY : 'Ramasser',
								PICKUP_CAPS : 'RAMASSER',
								LOAN_SUMMARY : 'Prêt',
								COUPON : 'Coupon',
								BANK_RECIEPT_MSG : 'Accusé de réception de la Banque terminée avec succès.',
								BANK_DEPOSITE_MSG : 'Acompte bancaire terminée avec succès.',
								BANK_DEPOSITE : 'DÉPÔT BANCAIRE',
								BANK_RECEIPT_CAP : 'REÇU DE BANQUE',
								PICKUP : 'Ramasser',
								PICKUP_SUMMARY : 'RAMASSER',
								LOAN_CAP : 'PRÊT',
								Register_Till_declaration : 'REGISTRE / TILL DECLARATION',
								Store_Begin : 'MAGASIN BEGIN',
								OmniStore_build_version : 'Version OmniStore No: ',
								STORE_SETTLEMENT_CAP : "STORE RÈGLEMENT",
								REGISTER_TILL : "Inscription / Till",
								FIELDS_MARKED : 'Les champs marqués ',
								ARE_MANDATORY : ' sont obligatoires.',
								TENDERS_CAPS : "Les offres",
								OK : "D'accord",
								TILL_ID : 'TILL ID',
								AMOUNT_DECLARATION : 'Montant',
								SAFE_SMALL : 'Sûr',
								TILL_ID : 'Till Id',
								SAFE_ID : 'Safe Id',
								REMARKS_REFERENCE : 'Remarques / Référence',
								NO_DATA : 'Pas de données disponibles',
								STORE_DECLARATION : 'Magasin règlement - déclaration',
								UPDATE_EMPLOYEE : 'MISE À JOUR DES EMPLOYÉS',
								ASSIGN_ROLES_HEADER : 'ASSIGN RÔLES',
								REGISTER_PICKUP : 'Registre',
								TILL_PICKUP : 'Jusqu\'à',
								CLEAR_CAPS : 'Clair',
								OPERATOR_NOT_CREATED : 'Opérateur ne peut être créé avec succès.',
								SAFE_PAYIN_SUCCESS : 'Safe Pay est terminée avec succès.',
								SAFE_PAYOUT_SUCCESS : 'Paiement Safe est terminé avec succès.',
								REGISTER_PAYIN_SUCCESS : 'Register Pay In est terminé avec succès.',
								REGISTER_PAYOUT_SUCCESS : 'Inscription Payout est terminée avec succès.',
								NO_SEARCH_RESULTS : 'Aucun employé.',
								DO_YOU_WANT_TO_OPEN_STORE : 'Voulez-vous ouvrir le magasin pour affaires Date',
								DO_YOU_WANT_TO_CLOSE_STORE : "Voulez-vous mettre fin au magasin pour l' affaire Date",
								BUSINESS_PERIOD : 'Période d\'affaires',
								ADD_FLOAT : 'Ajouter Float',
								ADD_FLOAT_CAPS : 'ADD FLOAT',
								AMOUNT : 'Montant',
								REGISTER_ID_CAPS : 'INSCRIVEZ- ID',
								STATUS_CAPS : 'STATUT',
								AMOUNT_CAPS : 'MONTANT',
								BUSINESS_DATE_CAPS : 'BUSINESS DATE',
								SELECTALL_CAPS : 'SÉLECTIONNER TOUT',
								SUCCESS : 'LE SUCCÈS',
								ADD_FLOAT_SUCC_MSG : 'Float a émis avec succès',
								ADD_FLOAT_CINFIRMATION_MSG : 'Voulez-vous ajouter float au registre (s) ?',
								transactiondatetime : 'Transaction Date Heure',
								transactiontype : 'Type de transaction',
								transactionid : 'Identifiant de transaction',
								amount : 'Montant',
								declarationdate : 'Déclaration date',
								tendertype : 'Type de soumission',
								openingamount : "Montant d'ouverture",
								floatamount : 'Float Montant',
								expectedamount : 'Montant attendu',
								declaredamount : 'Montant déclaré',
								overshortamount : 'Over/Montant court',
								settlementdate : 'Date de règlement',
								safeid : 'Safe Id',
								payinamount : 'Payer en Montant',
								payoutamount : 'Montant du paiement',
								loanamount : 'Montant du prêt',
								pickupamount : 'Pick-up Montant',
								bankdepositamount : 'Acompte bancaire Montant',
								bankreceiptamount : 'Banque de réception Montant',
								bankdesc : "Date et heure de dépôt de la Banque d'affaires",
								bankname : 'Nom de banque',
								bagid : 'Sac/Identification Marque',
								refid : 'Ref ID'
							});

		});