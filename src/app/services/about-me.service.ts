import { Icon } from "../model/icon.model";
import * as data from '../../assets/projects/projects.json';

const iconsList = data;

export class AboutMeService {
    getIcons(): Icon[] {
        return iconsList.icons;
    }
}