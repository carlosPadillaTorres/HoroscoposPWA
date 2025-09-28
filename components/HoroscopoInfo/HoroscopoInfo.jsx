
import { useLocation, useNavigate } from "react-router-dom";
import './HoroscopoInfo.css'

const HorsocopeDescription = [
  {
    "id": 1,
    "signo": "Aries",
    "descripcion": "Eres una persona llena de energía y valentía. Tu naturaleza impulsiva te convierte en un líder natural que no teme enfrentar nuevos desafíos. Tu signo es el primer signo de fuego.",
    "fechas": {
      "inicio": { "dia": 21, "mes": 3 },
      "fin": { "dia": 19, "mes": 4 }
    },
    "img": "aries.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/aries/"
  },
  {
    "id": 2,
    "signo": "Tauro",
    "descripcion": "Eres determinado y sensual, con un profundo aprecio por la estabilidad y los placeres de la vida. Tu naturaleza práctica te hace valorar el lujo y la comodidad. Tu signo es de tierra.",
    "fechas": {
      "inicio": { "dia": 20, "mes": 4 },
      "fin": { "dia": 20, "mes": 5 }
    },
    "img": "tauro.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/tauro/"
  },
  {
    "id": 3,
    "signo": "Géminis",
    "descripcion": "Eres curioso e ingenioso, con una personalidad dual que te hace muy adaptable. Tu naturaleza comunicativa te lleva a cambiar de opinión frecuentemente. Tu signo es de aire.",
    "fechas": {
      "inicio": { "dia": 21, "mes": 5 },
      "fin": { "dia": 20, "mes": 6 }
    },
    "img": "geminis.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/geminis/"
  },
  {
    "id": 4,
    "signo": "Cáncer",
    "descripcion": "Eres emocional y protector, con un fuerte instinto hogareño. Tu intuición es muy desarrollada, aunque a veces puedes ser algo sensible. Tu signo es el primer signo de agua.",
    "fechas": {
      "inicio": { "dia": 21, "mes": 6 },
      "fin": { "dia": 22, "mes": 7 }
    },
    "img": "cancer.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/cancer/"
  },
  {
    "id": 5,
    "signo": "Leo",
    "descripcion": "Eres carismático y orgulloso, con una personalidad dramática que ilumina cualquier lugar. Tu gran corazón te convierte en alguien magnético y generoso. Tu signo es de fuego, regido por el Sol.",
    "fechas": {
      "inicio": { "dia": 23, "mes": 7 },
      "fin": { "dia": 22, "mes": 8 }
    },
    "img": "leo.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/leo/"
  },
  {
    "id": 6,
    "signo": "Virgo",
    "descripcion": "Eres analítico y práctico, con una naturaleza detallista y organizadas. Tu perfeccionismo a veces te hace ser demasiado crítico contigo mismo y con otros. Tu signo es de tierra.",
    "fechas": {
      "inicio": { "dia": 23, "mes": 8 },
      "fin": { "dia": 22, "mes": 9 }
    },
    "img": "virgo.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/virgo/"
  },
  {
    "id": 7,
    "signo": "Libra",
    "descripcion": "Buscas constantemente el equilibrio y la justicia en todo lo que haces. Eres sociable y encantador, aunque a veces puedes ser un poco indeciso. Tu signo es de aire.",
    "fechas": {
      "inicio": { "dia": 23, "mes": 9 },
      "fin": { "dia": 22, "mes": 10 }
    },
    "img": "libra.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/libra/"
  },
  {
    "id": 8,
    "signo": "Escorpio",
    "descripcion": "Eres intenso y misterioso, con una naturaleza apasionada y profunda. Tu percepción es extraordinaria, aunque tiendes a ser reservado con tus emociones. Tu signo es de agua.",
    "fechas": {
      "inicio": { "dia": 23, "mes": 10 },
      "fin": { "dia": 21, "mes": 11 }
    },
    "img": "escorpio.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/escorpio/"
  },
  {
    "id": 9,
    "signo": "Sagitario",
    "descripcion": "Eres optimista y aventurero, con un amor profundo por la libertad y los viajes. Tu naturaleza filosófica te hace ser muy honesto y directo. Tu signo es de fuego.",
    "fechas": {
      "inicio": { "dia": 22, "mes": 11 },
      "fin": { "dia": 21, "mes": 12 }
    },
    "img": "sagitario.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/sagitario/"
  },
  {
    "id": 10,
    "signo": "Capricornio",
    "descripcion": "Eres ambicioso y disciplinado, con una naturaleza responsable y paciente. Tu orientación hacia las metas te hace perseverante en todo lo que emprendes. Tu signo es de tierra.",
    "fechas": {
      "inicio": { "dia": 22, "mes": 12 },
      "fin": { "dia": 19, "mes": 1 }
    },
    "img": "capricornio.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/capricornio/"
  },
  {
    "id": 11,
    "signo": "Acuario",
    "descripcion": "Eres innovador y humanitario, con una mentalidad independiente e intelectual. Tu naturaleza un poco excéntrica te hace único y visionario. Tu signo es de aire.",
    "fechas": {
      "inicio": { "dia": 20, "mes": 1 },
      "fin": { "dia": 18, "mes": 2 }
    },
    "img": "acuario.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/acuario/"
  },
  {
    "id": 12,
    "signo": "Piscis",
    "descripcion": "Eres compasivo y soñador, con una naturaleza artística muy desarrollada. A veces evades la realidad sumergiéndote en tu mundo interior. Tu signo es el último signo de agua.",
    "fechas": {
      "inicio": { "dia": 19, "mes": 2 },
      "fin": { "dia": 20, "mes": 3 }
    },
    "img": "piscis.png",
    "ligaMasInfo": "https://www.zodiacsign.com/es/signos-del-zodiaco/piscis/"
  }
]

const HoroscopoInfo = () => {
  const throwError = (msg) =>{
    alert('Error: '+msg);
    //setTimeout(() =>{ navigate("/")}, 3500)
    throw new Error('Error: '+msg+'\nRegresando...');
  }
  
  const location = useLocation();
  const navigate = useNavigate();

  const { userName, birthDate } = location.state || {};

  console.log("Username: ",userName,' \n', 'Birthdate: ',birthDate);

  if(!userName || !birthDate) throwError('No se recibió el nombre y/o la fecha de nacimiento');
  
  const signUserInfo = determinarSigno(birthDate.toString());
  if (!signUserInfo) throwError(('Su signo no se pudo determinar'));
  return (
    <div >
      <button className="back-button" onClick={() => navigate("/")}>🔙</button>
      <h1 className="title">Tu signo es {signUserInfo.signo}</h1>
      <a href={signUserInfo.ligaMasInfo} target="_blank">
          <img src={signUserInfo.img} className="logo" alt={signUserInfo.signo} />
        </a>

      <div className="card">
        <h3>{userName}:</h3>
        <p className="text">{signUserInfo.descripcion}</p>
      </div>
    </div>
  )
}

export default HoroscopoInfo

function determinarSigno(fechaString) {
  const fechaNacimiento = new Date(fechaString);
  const diaNacimiento = fechaNacimiento.getDate();
  // El mes en JS es 0-indexado (0=Enero, 11=Diciembre), por eso se suma 1
  const mesNacimiento = fechaNacimiento.getMonth() + 1; 

  for (const signo of HorsocopeDescription) {
    const { inicio, fin } = signo.fechas;

    // Lógica especial para Capricornio (el único que cruza el cambio de año)
    if (inicio.mes > fin.mes) { 
      // Si el mes de inicio (Dic=12) > mes de fin (Ene=1) (es decir, Capricornio)
      if (
        (mesNacimiento === inicio.mes && diaNacimiento >= inicio.dia) || // Diciembre después del 22
        (mesNacimiento === fin.mes && diaNacimiento <= fin.dia)        // Enero antes del 19
      ) {
        return signo;
      }
    } else {
      // Lógica estándar para los otros 11 signos dentro del mismo año
      if (
        (mesNacimiento === inicio.mes && diaNacimiento >= inicio.dia) ||
        (mesNacimiento > inicio.mes && mesNacimiento < fin.mes) ||
        (mesNacimiento === fin.mes && diaNacimiento <= fin.dia)
      ) {
        return signo;
      }
    }
  }
  alert('ERROR - Fecha recibida inválida');
  throw new Error ("ERROR - Fecha recibida inválida");
  return null; // En caso de que no encuentre el signo (imposible con este conjunto de datos)
}
