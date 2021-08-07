import {PaymentMethods, Configuration, CheckoutDomain as Domain} from '@shopify/scripts-checkout-apis';

export function paymentMethodsHandler(
  input: PaymentMethods.Input,
  configuration: Configuration,
): PaymentMethods.Result {

  const sortResponse = new PaymentMethods.SortResponse([]);
  const filterResponse = new PaymentMethods.FilterResponse([]);
  const renameResponse = renamePaymentMethod(input.paymentMethods);

  return new PaymentMethods.Result(sortResponse, filterResponse, renameResponse);
}

function renamePaymentMethod(paymentMethods: Domain.PaymentMethod[]): PaymentMethods.RenameResponse {
  var renameProposals = new Array<PaymentMethods.RenameProposal>();

  for (let i=0; i<paymentMethods.length; i++) {
    const renameProposal = PaymentMethods.RenameProposal.rename(paymentMethods[i], 'Renamed by scripts');
    renameProposals.push(renameProposal);
  }

  return new PaymentMethods.RenameResponse(renameProposals);
}