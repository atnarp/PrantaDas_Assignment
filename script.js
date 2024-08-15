

// Ensure the document is fully loaded before running any scripts
$(document).ready(function() {
    // Manually initialize all dropdowns (if needed)
    $('.dropdown-toggle').dropdown();

    // Optionally, you can add event listeners to dropdowns for additional functionality
    $('#dateDropdown').on('show.bs.dropdown', function () {
        console.log('Date dropdown is about to be shown');
    });

    $('#destinationDropdown').on('show.bs.dropdown', function () {
        console.log('Destination dropdown is about to be shown');
    });

    $('#statusDropdown').on('show.bs.dropdown', function () {
        console.log('Status dropdown is about to be shown');
    });

    // Example of handling dropdown item click events
    $('.dropdown-item').on('click', function(){
        let selectedItem = $(this).text();
        console.log('You selected: ' + selectedItem);
    });
});
