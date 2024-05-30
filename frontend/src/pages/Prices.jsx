import TaulaPreus from "../components/TaulaPreus";
 
const Prices = () => {
    return (
        <div className="bg-maize-100 pb-10">
            <div className="px-20 py-10">
                <TaulaPreus />
            </div>
 
            <div className="flex flex-col justify-center items-center w-full px-4 lg:px-0">
                <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl">
                    <div className="text-center lg:text-left lg:w-3/5">
                        <h1 className="text-4xl font-bold mb-6">Oferim lloguer d’espais per a:</h1>
                        <ul className="list-disc text-lg">
                            <li className="mb-4">
                                <strong>Tallers, xerrades i activitats afins al nostre espai.</strong> Contacta amb nosaltres i comparteix la teva proposta.
                            </li>
                            <li className="mb-4">
                                <strong>Celebracions d’aniversari (“Celebrem la teva vida”).</strong> Vine a gaudir d’un espai acollidor per celebrar l’aniversari dels teus éssers estimats, on sentir-te com a casa.
                            </li>
                        </ul>
                        <p className="text-lg">Consulta els nostres horaris i el nostre calendari. Podem assessorar-te. Classes personalitzades. És necessari la reserva plaça.</p>
                    </div>
 
                    <div className="mt-8 lg:mt-0 lg:ml-10 lg:w-2/5 flex justify-center">
                        <img src="https://www.alquilarsalas.com/images/osproperty/properties/371/3711528103458salayoga2.jpg" alt="Espai de lloguer" className="w-full mb-10 lg:mb-0" />
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Prices;