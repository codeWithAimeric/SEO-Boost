import path from "path";

interface Url {
    location: string,
    lastModification: Date,
    changeFreq: string,
    priority: number
}

export const generateSiteMapXml = () => {
    getAllUrl();
}

const getAllUrl = (): void => {
    const rootPath = path.join(path.dirname(require.main!.filename), '../../..');
    console.log(rootPath);
}
//
// const generateXML = (url: Url[]) => {
//
// }