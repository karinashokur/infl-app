window.onAmazonLoginReady = function() {
  amazon.Login.setClientId('amzn1.application-oa2-client.d627327cd6f749f3846a6b57f69688be');
};
window.onAmazonPaymentsReady = function() {
  showButton();
};
function showButton(){
  var authRequest;
  new OffAmazonPayments.Button("AmazonPayButton", "A2S2XWN7B3EK8I", {
    type:  "PwA",
    color: "Gold",
    size:  "medium",
    authorization: function() {
      loginOptions = {scope: "profile payments:widget payments:shipping_address",
        popup: true};
      authRequest = amazon.Login.authorize (loginOptions,
        "/dashboard/checkout");
    }
  });
}
