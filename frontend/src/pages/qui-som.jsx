
import Calendar from "../components/cale";
const Quisom = () => {
    return (

        <div className='bg-maize-100 flex flex-col  gap-14 ' >
            <div className='flex flex-row mt-16 mb-10 gap-10 justify-center items-center'>
                <div className='flex flex-col  w-[80vh] gap-4'>
                    <h1 className='text-[25px]  font-semibold '>QUI SOM?</h1>
                    <h1 className='text-[15px]  font-medium '>En Aurores, ens dediquem a conrear el benestar holístic a través d'un enfocament únic i enriquidor cap a la vida. Som més que una empresa, som un santuari per al creixement personal, la connexió espiritual i l'harmonia interior.
                        La nostra filosofia es basa en la creença que l'equilibri entre el cos, la ment i l'esperit és essencial per a aconseguir una vida plena i significativa. Per això, oferim una àmplia gamma d'activitats espirituals dissenyades per a nodrir cada aspecte del teu ser.
                    </h1>
                </div>
                <div>
                    <img className="w-[30vh]" src="src/assets/hab.jpeg"></img>
                </div>

            </div>

            <div className='flex flex-row   mb-[20vh] gap-10 justify-center items-center'>
                <div>
                    <img className="w-[40vh]" src="src/assets/niños.jpeg"></img>
                </div>
                <div className='flex flex-col  w-[80vh] gap-4'>

                    <h1 className='text-[15px]  font-medium '>En Aurores, no sols ens preocupem pel teu benestar individual, sinó que també ens esforcem per crear una comunitat acollidora i solidària on puguis trobar suport, inspiració i connexions significatives.
                        <br></br>
                        Uneix-te a nosaltres en aquest viatge cap a l'autodescobriment i la realització personal. En Aurores, t'ajudem a trobar la teva llum interior i a brillar amb tota la teva esplendor.
                    </h1>
                </div>


            </div>
            <div className="flex flex-row justify-center items-center mb-10"> 
                        <Calendar /> 
                    </div>
        </div>

    );
}


export default Quisom;
