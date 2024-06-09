
function orderDrink(drink, table) {
    var scriptURL = 'https://script.google.com/macros/s/AKfycbxfpZR5NAIt-wvbTW85pI6hge6PR8Pz4j9XzK4LZ_ukyhEjTg8_j3yGFSIUKuUh4dGWeQ/exec';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', scriptURL + '?drink=' + encodeURIComponent(drink) + '&table=' + encodeURIComponent(table));
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Order placed for ' + drink + ' from ' + table);
        } else {
            alert('Failed to place order. Please try again.');
        }
    };
    xhr.send();
}
