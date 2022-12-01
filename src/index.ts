import QRCode from 'qrcode';
import { IProps } from './types';
import { promises as fs } from 'fs';
import { join } from 'path';

const generateQRCode = async ({ text, format = 'svg', outPath = `${__dirname}/dist`, filename }:IProps) => {

    async function makeOutPath() {
        if( outPath && ! await fs.stat(outPath) ) {
            await fs.mkdir( join(outPath) , { recursive: true });
        }
    }
    

    switch (format) {
        case 'svg' || 'png':
            return await QRCode.toFile(`${outPath}/${filename}.${format}`, text);
        case 'png':
            return await QRCode.toDataURL(text);
        default:
            return await QRCode.toString(text);
    }
}


(async function() {
    const data = "https://kwn.digital";
    const output = `${process.cwd()}/dist`;
    // const code = await QRCode.toString(data,{type:'terminal'});
    const file = await QRCode.toFile(`${output}/code.svg`, data);

    await generateQRCode({ text: data, format: 'svg', outPath: output });

})();
