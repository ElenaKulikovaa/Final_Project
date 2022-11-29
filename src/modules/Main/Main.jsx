import chanel from "./Images/chanel.png";
import gucci from './Images/gucci.jpg';
import lv from './Images/lv.jpg';
import prada from './Images/prada.jpg';
import versace from './Images/versace.jpg';

export const Main = () => {
    const slides = [ {chanel}, {gucci}, {lv}, {prada}, {versace} ]

    return (
        <div className="container">
            <div className="main_wrapper">
                <h1 className="main_title">Westfield World Trade Center</h1>
                <h2 className="main_subtitle">23th of December - BLACK FRIDAY - 50% off everything!</h2>
                <div className="main_images">
                    <img className="main_image" src={chanel} alt='chanel' />
                    <img className="main_image" src={gucci} alt='gucci' />
                    <img className="main_image" src={lv} alt='lv' />
                    <img className="main_image" src={prada} alt='prada' />
                    <img className="main_image" src={versace} alt='versace' />
                </div>
            </div>
        </div>
    )
}