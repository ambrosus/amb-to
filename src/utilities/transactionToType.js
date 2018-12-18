/**
 * Function to retrieve type from a transaction
 *
 * @param {object} transaction - Transaction object
 *
 * @returns {string}
 */

import transaction_icon from '../assets/icons/transaction_gradient.svg';
import contract_call_icon from '../assets/icons/contract_call_gradient.svg';
import bundle_upload from '../assets/icons/transaction_bundle_upload_gradient.svg';
import kyc from '../assets/icons/transaction_kyc_gradient.svg';
import payout from '../assets/icons/transaction_payout_gradient.svg';
import challenge from '../assets/icons/transaction_challenge_gradient.svg';
import fees from '../assets/icons/transaction_fees_gradient.svg';
import sheltering from '../assets/icons/transaction_sheltering_gradient.svg';
import roles from '../assets/icons/transaction_roles_gradient.svg';

export default function transactionToType(transaction = {}) {
  if (!transaction.to_id || !transaction.to_id.isContract) {
    return {
      title: 'Transaction', type: 'TX', icon: transaction_icon
    };
  }

  let type = transaction.to_id.name || '';
  type = type.toLowerCase();

  if (!type) {
    return {
      title: 'Contract Call', type: 'CC', icon: contract_call_icon
    };
  }

  if (type === 'uploads') {
    return {
      title: 'Bundle Uploaded', type: 'BU', icon: bundle_upload
    };
  }

  if (type === 'kyc') {
    return {
      title: 'KYC', type: 'KYC', icon: kyc
    };
  }

  if (type === 'fees') {
    return {
      title: 'Fees', type: 'F', icon: fees
    };
  }

  if (type === 'challenges') {
    return {
      title: 'Challenge', type: 'CG', icon: challenge
    };
  }

  if (type === 'payout') {
    return {
      title: 'Payout', type: 'PO', icon: payout
    };
  }

  if (type === 'sheltering') {
    return {
      title: 'Sheltering', type: 'S', icon: sheltering
    };
  }

  if (type === 'roles') {
    return {
      title: 'Roles', type: 'RO', icon: roles
    };
  }

  if (type === 'head') {
    return {
      title: 'Head', type: 'H', icon: transaction_icon
    };
  }

  if (type === 'context') {
    return {
      title: 'Context', type: 'C', icon: transaction_icon
    };
  }

  return {
    title: 'Transaction', type: 'TX', icon: transaction_icon
  };
}
