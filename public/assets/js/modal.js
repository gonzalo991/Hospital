$(document).ready(function () {
    $('#mytable').on('click', 'edit', function () {
        let servicio = $(this).data('servicio');
        let lunes = $(this).data('lunes');
        let martes = $(this).data('martes');
        let miercoles = $(this).data('miercoles');
        let jueves = $(this).data('jueves');
        let viernes = $(this).data('viernes');
        $('EditModal').modal('show');
        $('.servicio').val('servicio');
        $('.lunes').val('lunes');
        $('.martes').val('martes');
        $('.miercoles').val('miercoles');
        $('.jueves').val('jueves');
        $('.viernes').val('viernes');
    })
})

$('#mytable').on('click', '.delete', function () {
    let servicio = $(this).data('id');
    $('#DeleteModal').modal('show');
    $('.servicio2').val(servicio);

})
