$('#name').keyup(() => {
    $('#hello').text(`Hello ${$('#name').val()}`)
});
