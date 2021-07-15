var radiologia = [
    {HORA: '11:00', 
    ESPECIALISTA: 'IGNACIO SCHULZ', 
    PACIENTE: 'FRANCISCA ROJAS', 
    RUT: '9878782-1', 
    PREVISION: 'FONASA'},
    {HORA: '11:30', 
    ESPECIALISTA: 'FEDERICO SUBERCASEAUX', 
    PACIENTE: 'PAMELA ESTRADA', 
    RUT: '15345241-3', 
    PREVISION: 'ISAPRE'},
    {HORA: '15:00', 
    ESPECIALISTA: 'FERNANDO WURTHZ', 
    PACIENTE: 'ARMANDO LUNA', 
    RUT: '116445345-9', 
    PREVISION: 'ISAPRE'},
    {HORA: '15:30', 
    ESPECIALISTA: 'ANA MARIA GODOY', 
    PACIENTE: 'MANUEL GODOY', 
    RUT: '17666419-0', 
    PREVISION: 'FONASA'},
    {HORA: '16:00', 
    ESPECIALISTA: 'PATRICIA SUAZO', 
    PACIENTE: 'RAMON ULLOA', 
    RUT: '14989389-K', 
    PREVISION: 'FONASA'}
];

var primera1 = [];
for (var i = 0; i < radiologia.length; i++){
    primera1.push(' Primera atencion Radiología : '+radiologia[i].PACIENTE+' - '+radiologia[i].PREVISION);
}
document.write(primera1[0]);

var ultima1 = [];
for (var i = 0; i < radiologia.length; i++){
    ultima1.push(' | Ultima atencion Radiología : '+radiologia[i].PACIENTE+' - '+radiologia[i].PREVISION+'<br>');
}
document.write(ultima1[4]);

document.write('<br>'+'Cantidad de atenciones para Radiología : '+radiologia.length+'<br>');

var traumatologia = [
    {HORA: '08:00', 
    ESPECIALISTA: 'MARIA PAZ ALTUZARRA', 
    PACIENTE: 'PAULA SANCHEZ', 
    RUT: '15554774-5', 
    PREVISION: 'FONASA'},
    {HORA: '10:00', 
    ESPECIALISTA: 'RAUL ARAYA', 
    PACIENTE: 'ANGÉLICA NAVAS', 
    RUT: '15444147-9', 
    PREVISION: 'ISAPRE'},
    {HORA: '10:30', 
    ESPECIALISTA: 'MARIA ARRIAGADA', 
    PACIENTE: 'ANA KLAPP', 
    RUT: '17879423-9', 
    PREVISION: 'ISAPRE'},
    {HORA: '11:00', 
    ESPECIALISTA: 'ALEJANDRO BADILLA', 
    PACIENTE: 'FELIPE MARDONES', 
    RUT: '1547423-6', 
    PREVISION: 'ISAPRE'},
    {HORA: '11:30', 
    ESPECIALISTA: 'CECILIA BUDNIK', 
    PACIENTE: 'DIEGO MARRE', 
    RUT: '16554741-K', 
    PREVISION: 'FONASA'},
    {HORA: '12:00', 
    ESPECIALISTA: 'ARTURO CAVAGNARO', 
    PACIENTE: 'CECILIA MENDEZ', 
    RUT: '9747535-8', 
    PREVISION: 'ISAPRE'},
    {HORA: '12:30', 
    ESPECIALISTA: 'ANDRES KANACRI', 
    PACIENTE: 'MARCIAL SUAZO', 
    RUT: '11254785-5', 
    PREVISION: 'ISAPRE'}
];

var primera2 = [];
for (var i = 0; i < traumatologia.length; i++){
    primera2.push('<br>'+'Primera atencion Traumatologia : '+(traumatologia[i].PACIENTE)+' - '+traumatologia[i].PREVISION);
}
document.write(primera2[0]);


var ultima2 = [];
for (var i = 0; i < traumatologia.length; i++){
    ultima2.push(' | Ultima atencion Traumatologia : '+traumatologia[i].PACIENTE+' - '+traumatologia[i].PREVISION+'<br>');
}
document.write(ultima2[6]);

document.write('<br>'+'Cantidad de atenciones para Traumatología : '+traumatologia.length+'<br>');

var dental = [
    {HORA: '08:30', 
    ESPECIALISTA: 'ANDREA ZUÑIGA', 
    PACIENTE: 'MARCELA RETAMAL', 
    RUT: '11123425-6', 
    PREVISION: 'ISAPRE'},
    {HORA: '11:00', 
    ESPECIALISTA: 'MARIA PIA ZAÑARTU', 
    PACIENTE: 'ANGEL MUÑOZ', 
    RUT: '9878789-2', 
    PREVISION: 'ISAPRE'},
    {HORA: '11:30', 
    ESPECIALISTA: 'SCARLETT WITTING', 
    PACIENTE: 'MARIO KAST', 
    RUT: '7998789-5', 
    PREVISION: 'FONASA'},
    {HORA: '13:00', 
    ESPECIALISTA: 'FRANCISCO VON TEUBER', 
    PACIENTE: 'KARIN FERNANDEZ', 
    RUT: '18887662-K', 
    PREVISION: 'FONASA'},
    {HORA: '13:30', 
    ESPECIALISTA: 'EDUARDO VIÑUELA', 
    PACIENTE: 'HUGO SANCHEZ', 
    RUT: '17665461-4', 
    PREVISION: 'FONASA'},
    {HORA: '14:00', 
    ESPECIALISTA: 'RAQUEL VILLASECA', 
    PACIENTE: 'ANA SEPULVEDA', 
    RUT: '14441281-0', 
    PREVISION: 'ISAPRE'}
];

var primera3 = [];
for (var i = 0; i < dental.length; i++){
    primera3.push('<br>'+'Primera atencion Dental : '+(dental[i].PACIENTE)+' - '+dental[i].PREVISION);
}
document.write(primera3[0]);

var ultima3 = [];
for (var i = 0; i < dental.length; i++){
    ultima3.push(' | Ultima atencion Dental : '+dental[i].PACIENTE+' - '+dental[i].PREVISION+'<br>');
}
document.write(ultima3[5]);

document.write('<br>'+'Cantidad de atenciones para Dental : '+dental.length+'<br>');