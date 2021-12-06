import { CVSVG } from "./CVSVG"

export default function CV(){
    return (
        <div className='cv'>
            <h1>Önéletrajz</h1>
            <div className="cv-container">
                <div className="text">
                    <div>
                        <h3>Az önéletrajzom a gombra kattintva tekinthető meg.</h3>
                        <a rel="noreferrer" target='_blank' href="https://drive.google.com/file/d/1VQ1anT8qZhukNm1KLMaQpQcJmEHtOqnt/view?usp=sharing">
                            <button>Megnyit</button>
                        </a>
                    </div>
                </div>
                <div className="cv-illustration">
                    <CVSVG />
                </div>
            </div>
        </div>
    )
}
