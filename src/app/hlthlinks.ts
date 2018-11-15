export class hlinks {
  id: string;
  name: string;
}

export const PATIENT_LINKS: hlinks[] = [
  {id: 'patcontract', name: 'Patient: Establish A Contract'},
  {id: 'authrec', name: 'Authorize Medical Record'},
  {id: 'paybill', name: 'Pay Bill'}
];

export const PROVIDER_LINKS: hlinks[] = [
  {id: 'provcontract', name: 'Provider: Establish A Contract'},
  {id: 'renderservice', name: 'Render A Service'},
  {id: 'submitclaim', name: 'Submit A Claim'}
];
