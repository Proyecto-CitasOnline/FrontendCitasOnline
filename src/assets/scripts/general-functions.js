function showMessage(message) {
    //alert(message);
    document.querySelector("#messageText").innerHTML = message;
        let elem = document.querySelector('#messageModal');
        let instance = M.Modal.init(elem, {});
        instance.open();
}

//alert('Hi');

function showRemoveConfirmationWindow(message) {
    //alert(message);
      let elem = document.querySelector('#removeConfirmationModal');
        let instance = M.Modal.init(elem, {});
        instance.open();
}

function closeModal(modalId){
  let elem = document.querySelector('#' + modalId);
  let instance = M.Modal.init(elem, {});
  instance.close();

}