import { digikalaCategoryData , digikalaSuggestion } from "../../components/DigikalaCategory";
import {  brandCarousel, firstPictureRow } from "../../components/PictureRowData";
import {digikalaAdvantage} from '../../public/data/FooterData'

const INITIAL_STATE = {firstPictureRow , brandCarousel , digikalaAdvantage ,digikalaCategoryData , digikalaSuggestion }

export const PhotosReducer =(state=INITIAL_STATE)=>{
return state;
}