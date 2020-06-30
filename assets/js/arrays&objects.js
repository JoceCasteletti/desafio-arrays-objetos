
var radiologia = [
  {
    hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    prevision: 'FONASA'
  },
  {
    hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    prevision: 'ISAPRE'
  },
  {
    hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    prevision: 'ISAPRE'
  },
  {
    hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    prevision: 'FONASA'
  },
  {
    hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMON ULLOA',
    rut: '14989389-K',
    prevision: 'FONASA'
  },
];

var traumatologia = [
  {
    hora: '08:00',
    especialista: 'MARIA PAZ ALTUZARRA',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    prevision: 'FONASA'
  },
  {
    hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15444147-9',
    prevision: 'ISAPRE'
  },
  {
    hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '17879423-9',
    prevision: 'ISAPRE'
  },
  {
    hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '1547423-6',
    prevision: 'ISAPRE'
  },
  {
    hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'DIEGO MARRE',
    rut: '16554741-K',
    prevision: 'FONASA'
  },
  {
    hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    prevision: 'ISAPRE'
  },
  {
    hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    prevision: 'ISAPRE'
  },
];

var dental = [
  {
    hora: '08:30',
    especialista: 'ANDREA ZUÑIGA',
    paciente: 'MARCELA RETAMAL',
    rut: '11123425-6',
    prevision: 'ISAPRE'
  },
  {
    hora: '11:00',
    especialista: 'MARIA PIA ZAÑARTU',
    paciente: 'ANGEL MUÑOZ',
    rut: '9878789-2',
    prevision: 'ISAPRE'
  },
  {
    hora: '11:30',
    especialista: 'SCARLETT WITTING',
    paciente: 'MARIO KAST',
    rut: '7998789-5',
    prevision: 'FONASA'
  },
  {
    hora: '13:00',
    especialista: 'FRANCISCO VON TEUBER',
    paciente: 'KARIN FERNANDEZ',
    rut: '18887662-K',
    prevision: 'FONASA'
  },
  {
    hora: '13:30',
    especialista: 'EDUARDO VIÑUELA',
    paciente: 'HUGO SANCHEZ',
    rut: '17665461-4',
    prevision: 'FONASA'
  },
  {
    hora: '14:00',
    especialista: 'RAQUEL VILLASECA',
    paciente: 'ANA SEPULVEDA',
    rut: '14441281-0',
    prevision: 'ISAPRE'
  },
];

//referencia id container html
var container = document.getElementById('container');

//declarar varieble generate con la lista y el nombre de la especialidad
var generate = (list, specialty) => {
  var temp = '';

  //se imprime el título de la tabla y los nombres de los campos
  temp += `
  <h2>${specialty}</h2>
  <div class="table-responsive">
  <table class="table">
      <thead class="thead-inverse">
        <tr>
          <th>Hora</th>
          <th>Especialista</th>
          <th>Paciente</th>
          <th>Rut</th>
          <th>Previsión</th>
        </tr>
      </thead>
      <tbody id="list">
  `;

  //se recorre la lista y se llena con la información de cada campo
  list.forEach(x => {
    temp += `
    <tr>
      <td>${x.hora}</td>
      <td>${x.especialista}</td> 
      <td>${x.paciente}</td> 
      <td>${x.rut}</td> 
      <td>${x.prevision}</td> 
    </tr>`
  });

  //imprime después de la tabla la especialidad y la cantidad de atenciones con la propiedad length
  temp += `<tr><td colspan="5">Cantidad de atenciones para ${specialty}: ${list.length}<td></tr>
      </tbody>
    </table>
    </div>
  `;

  return temp;
}

//imprime las 3 tablas en html
container.innerHTML += generate(radiologia, 'Radiología');
container.innerHTML += generate(traumatologia, 'Traumatología');
container.innerHTML += generate(dental, 'Dental');

//imprime otra tabla ordenada
//container.innerHTML += `<h1>Ordenado</h1>`;
//container.innerHTML += generate(dental.sort((a, b) => a.hora < b.hora ? 1 : -1));

//ordena la tabla radiologia por la primera y ultima atención
var firstRadio = radiologia.sort((a, b) => a.hora > b.hora ? 1 : -1)[0]
var lastRadio = radiologia.sort((a, b) => a.hora > b.hora ? 1 : -1)[radiologia.length - 1]
container.innerHTML += `<h5> Estadisticas centro médico Ñuñoa </h5>
<p> Primera atención Radiología: ${firstRadio.paciente} - ${firstRadio.prevision} | Última atención: ${lastRadio.paciente} - ${lastRadio.prevision} </p>`

//ordena la tabla traumatologia por la primera y ultima atención
var firstTraum = traumatologia.sort((a, b) => a.hora > b.hora ? 1 : -1)[0]
var lastTraum = traumatologia.sort((a, b) => a.hora > b.hora ? 1 : -1)[traumatologia.length - 1]
container.innerHTML += `<p> Primera atención Traumatología: ${firstTraum.paciente} - ${firstTraum.prevision} | Última atención: ${lastTraum.paciente} - ${lastTraum.prevision} </p>`

//ordena la tabla dental por la primera y ultima atención 
var firstDent = dental.sort((a, b) => a.hora > b.hora ? 1 : -1)[0]
var lastDent = dental.sort((a, b) => a.hora > b.hora ? 1 : -1)[dental.length - 1]
container.innerHTML += `<p> Primera atención Dental: ${firstDent.paciente} - ${firstDent.prevision} | Última atención: ${lastDent.paciente} - ${lastDent.prevision} </p>`