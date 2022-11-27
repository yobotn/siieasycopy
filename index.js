javascript: setTimeout(async () => {

  var getSelectedText = (el) => {
    if (el.selectedIndex === -1) {
      return null;
    }
    return el.options[el.selectedIndex].text;
  };

  var productSelect = document.querySelector('#product');
  var productSelectText = getSelectedText(productSelect);

  var subProductSelect = document.querySelector('#sub_product');
  var subProductSelectText = getSelectedText(subProductSelect);

  var teken = document.querySelector('#full_standard_number').value;


  var groupSelect = document.querySelector('#calculated_dutch_group');
  var groupSelectText = getSelectedText(groupSelect);

  var data = {
    product: productSelectText,
    productCode: productSelect.value,
    subProduct: subProductSelectText,
    subProductCode: subProductSelect.value,
    teken: teken,
    groupSelect: groupSelectText
  };

  await navigator.clipboard.writeText(`${data.product}\t${data.productCode}\t${data.subProduct}\t${data.subProductCode}`);
  alert('הועתק בהצלחה');

}, 1000);
