import MyCarousel from "../components/carousel";
import { Link } from 'react-router-dom';
 
export default function Home() {
 
 
    return (
        <div className="w-full bg-maize-100 ">
 
 
            <main className='flex  w-full'>
                <div className=' w-full flex flex-col gap-14 mb-20'>
                    {/* Contenedor del carrusel con tamaño fijo */}
                    <div className="carousel-container">
                        <MyCarousel />
                    </div>
                    <div className='flex items-center justify-center mt-28 gap-24 mb-10'>
                        <div className="w-[80vh] flex flex-col gap-5">
                            <h1 className='text-[30px]'>QUÈ OFERIM?</h1>
                            <p>El nostre desig és el d’acompanyar persones de totes les edats en processos vitals (infantesa, adolescència, maternitat, vellesa...) i de crisi (malaltia, dols, trauma...), així com cuidar de la salut integral de la persona (física, mental, social i espiritual). Oferim una sèrie de propostes a través del silenci, la paraula, el cos i l’expressió artística, amb la finalitat última de cultivar qualitats humanes com la calma, la bondat i la bellesa, per afavorir que cada persona visqui amb sentit, llibertat i plenitud.</p>
                        </div>
                        <div>
                            <img className="w-[50vh] " src="src/assets/salaYoga.png"></img>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-10">
                        <img src="src/assets/carousel/nen2.png" alt="Imagen 1" className="w-[35vh] h-[50vh]" />
                        <img src="src/assets/carousel/pre2.png" alt="Imagen 3" className="w-[35vh] h-[50vh]" />
                        <img src="src/assets/carousel/nen1.png" alt="Imagen 2" className="w-[35vh] h-[50vh]" />
 
                    </div>
                    <div class="flex flex-row gap-5 justify-center items-center mt-20">
                        <div>
                            <img className="w-[40vh] " src="src/assets/carousel/vel.png"></img>
                        </div>
                        <div class="max-w-5xl p-8">
                            <h1 class="text-2xl font-bold text-orange-300 mb-6">Benvinguts al nostre Espai d'Acompanyament i Creixement</h1>
                            <p class="mb-4">En el nostre centre, oferim suport integral per a aquells que travessen crisi o busquen un canvi significatiu en les seves vides. A través de programes especialitzats com <strong>Calma</strong> i <strong>Trauma i Interioritat</strong></p>
                            <ul class="list-disc list-inside mb-6">
                                <li><strong>Acompanyament en Processos de Crisi i Canvi</strong>: Suport personalitzat en moments de crisis i transformació.</li>
                                <li><strong>Bombolles d’Art</strong>: Atenció personal a través del art i la meditació.</li>
                                <li><strong>Programa CALMA</strong>: Pràctiques per descobrir un espai interior de calma i benestar.</li>
                                <li><strong>Programa Trauma i Interioritat</strong>: Sanació per dones que han patit violència sexual.</li>
                            </ul>
                            <a href="/aco&proj" class="bg-orange-300 text-white py-2 px-4 rounded">Ver más</a>
                        </div>
                    </div>
                    <div className='flex items-center justify-center pt-10 mb-10'>
 
                        <h1 className='text-[30px] font-medium'>Connecta cos i ment, renova el teu esperit</h1>
 
 
                    </div>
                </div>
            </main>
        </div>
    );
}
 