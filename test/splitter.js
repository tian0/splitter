contract('Splitter', function(accounts) {
  
  var accountA = accounts[1];
  var accountB = accounts[2];
  var sender = accounts[0];
  var amountToSend = 100;

  //each test uses new contract deployment
  beforeEach(function() {

    return Splitter.new(accountA, accountB, {from: sender, gas: 2000000})
      .then(function(_contract) {
        contract = _contract;
      })
  })


  it("should have valid accountA", function() {
    // var contract = Splitter.deployed();

    return contract.accountA.call()
      .then(function(accountA) {
      //console.log(accountA);
      assert.notStrictEqual(accountA,0, "accountA was not valid");
    });
  });

  it("should have valid accountB", function() {
    // var contract = Splitter.deployed();

    return contract.accountB.call()
      .then(function(accountB) {
      //console.log(accountB);
      assert.notStrictEqual(accountB,0, "accountB was not valid");
    });
  });

  // it("split went thru", function() {
  //   // var contract = Splitter.deployed();
  //   var balanceA;
  //   var balanceB;
  //   var resultA;
  //   var resultB;

  //   return web3.eth.getBalance(accountA,function(){
  //   .then(function(_balanceA) {
  //     balanceA = _balanceA;
  //     return web3.eth.getBalance(accountB);
  //     })
  //     .then(function(_balanceB) {
  //       balanceB = _balanceB;
  //       return web3.eth.sendTransaction({from: sender, to: contract.address, value: amountToSend});
  //     })
  //     .then(function(txn) {
  //       return web3.eth.getBalance(accountA);
  //     })
  //     .then(function(_resultA) {
  //       resultA = _resultA;
  //       return web.eth.getBalance(accountB);
  //     })
  //     .then(function(_resultB) {
  //       resultB = _resultB;
  //       var expectedA = balanceA + amountToSend/2;
  //       var expectedB = balanceB + amountToSend/2;
  //       assert.StrictEqual(expectedA,resultA,"unexpected balanceA after 1 transaction");
  //       assert.StrictEqual(expectedB,resultB,"unexpected balanceB after 1 transaction");
  //     });
  //   });
  // });
});