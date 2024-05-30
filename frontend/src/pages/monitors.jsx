

const Monitors = () => {

    const inform = [

        {
            perfil: "src/assets/chica.png",
            nom: "Andrea",
            descripcio: "Monitora de ioga i biodanza amb una presència tranquil·la i un somriure càlid que inspira confiança. El seu enfocament en l'ensenyament es basa en la creença que cada individu té el potencial per a aconseguir un estat d'harmonia i benestar",
            experiencia: " Ha dedicat més de 10 anys a l'ensenyament de ioga i biodanza, acumulant una àmplia gamma d'experiències i coneixements en el camp",
            especialitats: " Especialitza en tècniques de ioga que fomenten la connexió amb el cos i la ment, ajudant els estudiants a superar bloquejos emocionals i físics"
        },

        {
            perfil: "src/assets/chh.png",
            nom: "Andres",
            descripcio: "Monitor de ioga i biodanza amb una presència tranquil·la i un somriure càlid que inspira confiança. El seu enfocament en l'ensenyament es basa en la creença que cada individu té el potencial per a aconseguir un estat d'harmonia i benestar",
            experiencia: " Ha dedicat més de 10 anys a l'ensenyament de ioga i biodanza, acumulant una àmplia gamma d'experiències i coneixements en el camp",
            especialitats: " Especialitza en tècniques de ioga que fomenten la connexió amb el cos i la ment, ajudant els estudiants a superar bloquejos emocionals i físics"
        },

        {
            perfil: "src/assets/CHICA2.png",
            nom: "Paula",
            descripcio: "Monitora de ioga i biodanza amb una presència tranquil·la i un somriure càlid que inspira confiança. El seu enfocament en l'ensenyament es basa en la creença que cada individu té el potencial per a aconseguir un estat d'harmonia i benestar",
            experiencia: " Ha dedicat més de 10 anys a l'ensenyament de ioga i biodanza, acumulant una àmplia gamma d'experiències i coneixements en el camp",
            especialitats: " Especialitza en tècniques de ioga que fomenten la connexió amb el cos i la ment, ajudant els estudiants a superar bloquejos emocionals i físics"
        },
        {
            perfil: "src/assets/chica3.png",
            nom: "Cristina",
            descripcio: "Monitora de ioga i biodanza amb una presència tranquil·la i un somriure càlid que inspira confiança. El seu enfocament en l'ensenyament es basa en la creença que cada individu té el potencial per a aconseguir un estat d'harmonia i benestar",
            experiencia: " Ha dedicat més de 10 anys a l'ensenyament de ioga i biodanza, acumulant una àmplia gamma d'experiències i coneixements en el camp",
            especialitats: " Especialitza en tècniques de ioga que fomenten la connexió amb el cos i la ment, ajudant els estudiants a superar bloquejos emocionals i físics"
        }
    ];
    return (
        <div>
           

            <div className='bg-maize-100 flex flex-col gap-28 justify-center items-center' >
                <div>
                    <h1 className='text-[40px] mt-8 font-bold text-center'>Coneix al nostre EQUIP</h1>
                </div>
                <div className='flex flex-row gap-10 flex-wrap justify-center items-center'>
                    {/* Recorrer el array de actividades y renderizar la información de cada actividad */}
                    {inform.map((info, index) => (
                        <div className='flex flex-col gap-5 mb-20 p-7 w-[80vh]  rounded shadow-2xl' key={index}>

                            <div className='flex flex-row gap-3'>
                                <div className='flex flex-col mt-10 gap-5'>
                                    <h2 className='font-bold text-2xl'>{info.nom}</h2>
                                    <h2 className='font-medium text-md'>{info.descripcio}</h2>

                                </div>
                                <img className='w-[19vh] h-[20vh]' src={info.perfil} alt={info.titulo} />
                            </div>

                            <p>
                                <span className='font-semibold'>Experiencia:</span>
                                <span className='font-normal'>{info.experiencia}</span>
                            </p>
                            <p>
                                <span className='font-semibold'>Especialitats:</span>
                                <span className='font-normal'>{info.especialitats}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )



}

export default Monitors;