import {createContentLoader} from 'vitepress'
import {transAllData} from "./utils.js";


export default createContentLoader('src/**/*.md', {
        transform(rawData) {
            return transAllData(rawData);
        }
    }
);
